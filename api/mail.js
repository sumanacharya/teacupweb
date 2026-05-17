// Contact form handler — works as both a Vercel serverless function and an Express route.
// Set SMTP_* environment variables in Vercel project settings (or .env locally).
// Without SMTP_HOST the handler logs to console and returns 200 (useful for local testing).

const nodemailer = require('nodemailer');

// Buffer and parse application/x-www-form-urlencoded body.
// If Express has already parsed it into req.body we use that directly.
async function parseBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', chunk => { raw += chunk; });
    req.on('end', () => {
      try {
        const parsed = Object.fromEntries(
          raw.split('&').filter(Boolean).map(pair => {
            const idx = pair.indexOf('=');
            const k = decodeURIComponent(pair.slice(0, idx).replace(/\+/g, ' '));
            const v = decodeURIComponent(pair.slice(idx + 1).replace(/\+/g, ' '));
            return [k, v];
          })
        );
        resolve(parsed);
      } catch (e) { reject(e); }
    });
    req.on('error', reject);
  });
}

function strip(str = '') {
  return String(str).replace(/<[^>]*>/g, '').trim();
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  let body;
  try {
    body = await parseBody(req);
  } catch {
    return res.status(400).end('Invalid request body.');
  }

  const name    = strip(body.name);
  const org     = strip(body.org);
  const email   = strip(body.email);
  const phone   = strip(body.phone);
  const message = strip(body.message);

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).end('Please complete all required fields.');
  }

  const to      = process.env.CONTACT_TO || 'contact@teacupdigital.com.au';
  const subject = `Enquiry from ${name}${org ? ` (${org})` : ''}`;
  const text    = [
    `Name:         ${name}`,
    org   ? `Organisation: ${org}`   : null,
    `Email:        ${email}`,
    phone ? `Phone:        ${phone}` : null,
    '',
    '--- Message ---',
    message
  ].filter(v => v !== null).join('\n');

  // Development fallback — no SMTP configured
  if (!process.env.SMTP_HOST) {
    console.log('[mail] No SMTP_HOST set. Would have sent:');
    console.log(`  To: ${to}`);
    console.log(`  Subject: ${subject}`);
    console.log(`  Body:\n${text}`);
    return res.status(200).end('Message sent.');
  }

  try {
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST,
      port:   parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from:    `"Teacup Digital Contact" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to,
      subject,
      text
    });

    res.status(200).end('Message sent.');
  } catch (err) {
    console.error('[mail] Error:', err.message);
    res.status(500).end(`Unable to send. Please email us directly at ${to}`);
  }
}

module.exports = handler;

// Vercel: disable automatic body parsing so we can handle it ourselves
module.exports.config = { api: { bodyParser: false } };
