# Deployment Checklist for Teacup Digital

## Pre-deployment Tasks
1. [ ] Update all environment variables:
   - [ ] `EMAILJS_SERVICE_ID`
   - [ ] `EMAILJS_TEMPLATE_ID`
   - [ ] `RECAPTCHA_SITE_KEY`

2. [ ] Optimize assets:
   - [ ] Compress all images
   - [ ] Minify CSS and JavaScript files
   - [ ] Convert images to WebP format where possible

3. [ ] Update meta information:
   - [ ] Update sitemap.xml with correct lastmod date
   - [ ] Verify all meta tags in index.html
   - [ ] Update Open Graph image paths

## Deployment Steps
1. [ ] Upload files to Crazy Domain hosting:
   ```
   - index.html
   - theme.css
   - content.js
   - form-handler.js
   - robots.txt
   - sitemap.xml
   - .htaccess
   - 404.html
   - 500.html
   - assets/
   ```

2. [ ] Set file permissions:
   ```
   - Directories: 755 (drwxr-xr-x)
   - Files: 644 (-rw-r--r--)
   ```

3. [ ] Verify SSL configuration:
   - [ ] Check SSL certificate is active
   - [ ] Test HTTPS redirects
   - [ ] Verify mixed content warnings

## Post-deployment Checks
1. [ ] Test all functionality:
   - [ ] Contact form submission
   - [ ] reCAPTCHA integration
   - [ ] Email delivery
   - [ ] Form validation

2. [ ] Verify SEO elements:
   - [ ] robots.txt is accessible
   - [ ] sitemap.xml is accessible
   - [ ] Meta tags are present
   - [ ] Open Graph tags work

3. [ ] Performance checks:
   - [ ] Page load speed
   - [ ] Mobile responsiveness
   - [ ] Browser compatibility
   - [ ] Image loading

4. [ ] Security verification:
   - [ ] HTTPS is enforced
   - [ ] Security headers are present
   - [ ] No sensitive data exposure
   - [ ] Form validation works

## Monitoring Setup
1. [ ] Set up error logging
2. [ ] Configure uptime monitoring
3. [ ] Set up form submission notifications
4. [ ] Configure backup schedule

## Documentation
1. [ ] Update README with deployment information
2. [ ] Document environment variables
3. [ ] Create maintenance procedures
4. [ ] Document backup and restore processes

# Deployment Guide for CrazyDomains Linux Server

## Prerequisites
1. Node.js installed on the server (v14 or higher)
2. Access to cPanel or SSH access to the server
3. Domain name configured in CrazyDomains

## Deployment Steps

### 1. Prepare the Project
```bash
# Install dependencies
npm install

# Create production build
npm run build
```

### 2. Server Configuration
1. Log in to cPanel
2. Navigate to "Setup Node.js App"
3. Create a new Node.js application:
   - Application root: /home/username/teacup-web-portal
   - Application URL: your-domain.com
   - Application startup file: server.js
   - Node.js version: 14.x or higher
   - Environment variables:
     ```
     NODE_ENV=production
     PORT=3000
     ```

### 3. File Structure
```
teacup-web-portal/
├── public/           # Static files
├── node_modules/     # Dependencies
├── server.js         # Main server file
├── package.json      # Project configuration
└── .htaccess        # Apache configuration
```

### 4. Create .htaccess
Create a .htaccess file in the root directory with the following content:
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /server.js [L]

# Enable CORS
Header set Access-Control-Allow-Origin "*"
```

### 5. SSL Configuration
1. In cPanel, go to "SSL/TLS"
2. Install SSL certificate for your domain
3. Force HTTPS by adding to .htaccess:
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### 6. Start the Application
1. In cPanel's Node.js App section:
   - Click "Run JS Script"
   - Select your application
   - Click "Start"

### 7. Monitoring
- Check application logs in cPanel
- Monitor server resources
- Set up error notifications

## Troubleshooting
1. If the site doesn't load:
   - Check Node.js application status in cPanel
   - Verify port configuration
   - Check application logs

2. If static files aren't serving:
   - Verify file permissions
   - Check .htaccess configuration
   - Ensure correct file paths

3. If SSL isn't working:
   - Verify SSL certificate installation
   - Check .htaccess redirects
   - Clear browser cache

## Maintenance
1. Regular updates:
   - Keep Node.js updated
   - Update dependencies
   - Monitor security patches

2. Backup:
   - Regular file backups
   - Database backups (if applicable)
   - Configuration backups

## Support
For technical support:
1. CrazyDomains Support: https://www.crazydomains.com/support/
2. Node.js Documentation: https://nodejs.org/docs/
3. cPanel Documentation: https://docs.cpanel.net/ 