require('dotenv').config();

const express = require('express');
const path    = require('path');
const helmet  = require('helmet');
const compression = require('compression');

const app  = express();
const port = process.env.PORT || 3000;

// Security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc:  ["'self'"],
      scriptSrc:   ["'self'", "'unsafe-inline'", "unpkg.com", "fonts.googleapis.com"],
      styleSrc:    ["'self'", "'unsafe-inline'", "fonts.googleapis.com"],
      fontSrc:     ["'self'", "fonts.gstatic.com"],
      imgSrc:      ["'self'", "data:", "https:"],
      connectSrc:  ["'self'"],
      mediaSrc:    ["'self'", "https://teacupdigital.com.au"]
    }
  }
}));

app.use(compression());

// Parse URL-encoded form bodies (used by /api/mail)
app.use(express.urlencoded({ extended: false }));

// Static files — no cache in dev, 1-year in production
const isDev = process.env.NODE_ENV !== 'production';
app.use(express.static('public', {
  maxAge: isDev ? 0 : '1y',
  etag: true,
  lastModified: true
}));

// Contact form API (same handler as the Vercel serverless function)
app.post('/api/mail', require('./api/mail'));

// SPA fallback — serve index.html for all other GET requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(__dirname, 'public', '500.html'));
});

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}  [${process.env.NODE_ENV || 'development'}]`);
});

server.on('error', err => {
  if (err.code === 'EADDRINUSE') {
    console.error(
      `\nError: port ${port} is already in use.\n` +
      `Stop the other process first, or run on a different port:\n` +
      `  PORT=3001 npm run dev\n`
    );
    process.exit(1);
  } else {
    throw err;
  }
});
