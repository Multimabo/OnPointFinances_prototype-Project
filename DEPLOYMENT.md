# OnPoint Financial Website Configuration

## Environment Variables
```bash
# Production
SITE_URL=https://onpointfin.co.za
CONTACT_EMAIL=info@onpointfin.co.za
PHONE_NUMBER=+27834852436

# Development
SITE_URL=http://localhost:8000
CONTACT_EMAIL=dev@onpointfin.co.za
PHONE_NUMBER=+27834852436
```

## Deployment Instructions

### Option 1: Static Hosting (Recommended)
1. **Netlify**
   - Connect your GitHub repository
   - Build command: `# No build needed`
   - Publish directory: `.` (root)
   - Environment variables: Set SITE_URL

2. **Vercel**
   - Import project from GitHub
   - Framework preset: Other
   - Build command: `# No build needed`
   - Output directory: `.` (root)

3. **GitHub Pages**
   - Enable GitHub Pages in repository settings
   - Select source: Deploy from a branch
   - Branch: main / master
   - Folder: / (root)

### Option 2: Traditional Web Hosting
1. Upload all files to your web server
2. Ensure index.html is in the root directory
3. Update contact information in HTML
4. Test all functionality

### Option 3: Local Development
1. Install a local web server:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx http-server
   
   # PHP
   php -S localhost:8000
   ```
2. Open http://localhost:8000 in your browser

## SSL Certificate
- Always use HTTPS in production
- Most hosting providers offer free SSL certificates
- Update all URLs to use HTTPS

## Performance Optimization
- Enable gzip compression on your server
- Set up proper caching headers
- Use a Content Delivery Network (CDN) for static assets
- Optimize images before deployment

## Security Headers
Add these headers to your server configuration:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self' https: 'unsafe-inline'
```

## Analytics
Add Google Analytics or similar:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Monitoring
- Set up uptime monitoring
- Monitor Core Web Vitals
- Track form submissions
- Monitor error rates
