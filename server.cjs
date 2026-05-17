require('dotenv').config();

const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const nodemailer = require('nodemailer');

const app = express();
const isProduction = process.env.NODE_ENV === 'production';
/** PaaS sets PORT in production. Locally 3000 is often busy; default dev to 3001 unless PORT is set. */
const listenPort = Number(process.env.PORT || (isProduction ? 3000 : 3001));

const CONTACT_MAIL_TO =
  process.env.CONTACT_MAIL_TO || 'contact@teacupdigital.com.au';

const MAX_NAME_LENGTH = 200;
const MAX_EMAIL_LENGTH = 320;
const MAX_MESSAGE_LENGTH = 8000;

function createMailTransport() {
  const host = process.env.SMTP_HOST;
  if (!host) {
    return null;
  }

  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === 'true';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth:
      user && pass
        ? {
            user,
            pass,
          }
        : undefined,
  });
}

function sanitizeSingleLine(input, maxLen) {
  return String(input ?? '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLen);
}

function sanitizeMultiline(input, maxLen) {
  return String(input ?? '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim()
    .slice(0, maxLen);
}

function isValidEmail(email) {
  if (!email || email.length > MAX_EMAIL_LENGTH) return false;
  // Practical RFC-inspired check without catastrophic regex backtracking
  const parts = email.split('@');
  if (parts.length !== 2) return false;
  const [local, domain] = parts;
  if (!local || !domain || local.includes(' ') || !domain.includes('.')) return false;
  if (/[^\x21-\x7E]/.test(email)) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.use(compression());

if (isProduction) {
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
          fontSrc: ["'self'", 'https://fonts.gstatic.com'],
          imgSrc: ["'self'", 'data:', 'https:'],
          connectSrc: ["'self'"],
          mediaSrc: ["'self'", 'https:'],
          frameSrc: ["'none'"],
          objectSrc: ["'none'"],
          upgradeInsecureRequests: [],
        },
      },
    }),
  );
} else {
  app.use(helmet({ contentSecurityPolicy: false }));
}

app.use(express.json({ limit: '64kb' }));

app.post('/api/contact', async (req, res) => {
  const transport = createMailTransport();
  if (!transport) {
    res.status(503).json({
      error:
        'Contact email is not configured. Set SMTP_HOST and related environment variables.',
    });
    return;
  }

  const name = sanitizeSingleLine(req.body?.name, MAX_NAME_LENGTH);
  const email = sanitizeSingleLine(req.body?.email, MAX_EMAIL_LENGTH).toLowerCase();
  const message = sanitizeMultiline(req.body?.message, MAX_MESSAGE_LENGTH);

  if (!name || !email || !message || !isValidEmail(email)) {
    res.status(400).json({ error: 'Please fill in all fields correctly.' });
    return;
  }

  const fromAddress =
    process.env.SMTP_FROM || process.env.SMTP_USER || CONTACT_MAIL_TO;

  try {
    await transport.sendMail({
      from: fromAddress,
      to: CONTACT_MAIL_TO,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    res.status(200).json({ ok: true, message: 'Message sent!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

if (isProduction) {
  const distDir = path.join(__dirname, 'dist');
  app.use(
    express.static(distDir, {
      maxAge: '1y',
      etag: true,
      lastModified: true,
    }),
  );

  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      next();
      return;
    }
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

app.use((err, req, res, next) => {
  console.error(err.stack);
  const fallback500 = path.join(__dirname, '500.html');
  res.status(500);
  res.sendFile(fallback500, (sendErr) => {
    if (sendErr) {
      res.type('text/plain').send('Internal Server Error');
    }
  });
});

const server = app.listen(listenPort, () => {
  console.log(`API server listening on http://localhost:${listenPort}`);
  if (!isProduction) {
    console.log('Development: run Vite separately; /api routes are proxied from Vite.');
  }
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(
      `[server] Port ${listenPort} is already in use. Stop the other process, or run with a different PORT (e.g. PORT=3002 npm run dev).`,
    );
  } else {
    console.error('[server] Failed to start:', err);
  }
  process.exit(1);
});
