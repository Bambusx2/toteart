# Server Configuration for Production SEO

This guide helps you configure your web server for optimal SEO performance.

## Before Deployment

**CRITICAL:** Replace all instances of `https://yourwebsite.com/` with your actual domain in:
- `src/index.html` (multiple locations)
- `public/sitemap.xml`
- `public/robots.txt`

## Apache (.htaccess)

Create a `.htaccess` file in your production root directory:

```apache
# Enable Rewrite Engine
RewriteEngine On

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Force WWW (or remove WWW - choose one)
# Option 1: Force WWW
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule ^(.*)$ https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Option 2: Remove WWW (recommended for cleaner URLs)
# RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
# RewriteRule ^(.*)$ https://%1%{REQUEST_URI} [L,R=301]

# Angular routing - redirect all requests to index.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On

  # Images
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"

  # Fonts
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"

  # CSS and JavaScript
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"

  # HTML (short cache for Angular SPA)
  ExpiresByType text/html "access plus 0 seconds"

  # Manifest and service worker
  ExpiresByType application/manifest+json "access plus 1 week"
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"

  # HSTS (enable after testing)
  # Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
</IfModule>

# Prevent directory listing
Options -Indexes

# Block access to hidden files
<FilesMatch "^\.">
  Require all denied
</FilesMatch>
```

## Nginx Configuration

Add to your `nginx.conf` or site configuration:

```nginx
server {
    listen 80;
    server_name yourwebsite.com www.yourwebsite.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourwebsite.com www.yourwebsite.com;

    # SSL Configuration
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    root /var/www/toteart/dist/browser;
    index index.html;

    # Compression
    gzip on;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json;
    gzip_min_length 1000;

    # Security Headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Cache static assets
    location ~* \.(webp|jpg|jpeg|png|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location ~* \.(css|js)$ {
        expires 1M;
        add_header Cache-Control "public";
    }

    # Angular routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Serve special files
    location = /robots.txt {
        allow all;
        log_not_found off;
        access_log off;
    }

    location = /sitemap.xml {
        allow all;
        log_not_found off;
    }
}
```

## Post-Deployment SEO Checklist

### 1. Verify Search Engine Indexing
- [ ] Create Google Search Console account
- [ ] Submit sitemap: `https://yourwebsite.com/sitemap.xml`
- [ ] Create Bing Webmaster Tools account
- [ ] Submit sitemap to Bing

### 2. Test Social Media Sharing
- [ ] Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- [ ] Twitter Card Validator: https://cards-dev.twitter.com/validator
- [ ] LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

### 3. Performance Testing
- [ ] Google PageSpeed Insights: https://pagespeed.web.dev/
- [ ] GTmetrix: https://gtmetrix.com/
- [ ] WebPageTest: https://www.webpagetest.org/

### 4. SEO Validation
- [ ] Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Schema.org Validator: https://validator.schema.org/
- [ ] Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

### 5. Security & SSL
- [ ] SSL Labs Test: https://www.ssllabs.com/ssltest/
- [ ] Security Headers: https://securityheaders.com/

### 6. Additional Tools
- [ ] Set up Google Analytics (optional)
- [ ] Configure Google Tag Manager (optional)
- [ ] Set up monitoring (Uptime Robot, Pingdom, etc.)

## Content Updates

To maintain SEO rankings:
1. Update `lastmod` dates in sitemap.xml when content changes
2. Keep artwork collection fresh (add new pieces regularly)
3. Update the about section with recent achievements
4. Respond to inquiries promptly (engagement signals)

## Local Business SEO (Optional)

If selling locally in North Macedonia, consider:
- Creating Google Business Profile
- Adding local schema markup
- Getting listed in local art directories
- Macedonian art websites and galleries

## Monitoring

After deployment, monitor:
- **Search Console**: Crawl errors, indexing status
- **Core Web Vitals**: LCP, FID, CLS scores
- **Social shares**: Track engagement on shared posts
- **Organic traffic**: Growth in search traffic
- **Rankings**: Track position for key terms

---

**Need Help?** Contact ResolVR: http://resolvr.dev
