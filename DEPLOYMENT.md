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