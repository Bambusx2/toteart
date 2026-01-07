# Netlify Deployment Guide

This guide walks you through deploying your Tote Art Portfolio to Netlify.

## Prerequisites

- GitHub account with this repository
- Netlify account (free tier works great)

## Option 1: Deploy via Netlify Dashboard (Recommended)

### Step 1: Connect Repository

1. Go to [Netlify](https://www.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" as your Git provider
4. Authorize Netlify to access your repositories
5. Select the `toteart` repository

### Step 2: Configure Build Settings

Netlify should auto-detect the settings from `netlify.toml`, but verify:

**Build settings:**
- **Build command:** `npm run build`
- **Publish directory:** `dist/tato-blog/browser`
- **Node version:** 20

Click "Deploy site"

### Step 3: Wait for Build

First deployment takes 2-5 minutes. You'll see:
- ✓ Build command running
- ✓ Dependency installation
- ✓ Site deployment

### Step 4: Get Your URL

Netlify assigns a random URL like: `random-name-123.netlify.app`

You can change it:
1. Go to Site settings → Domain management
2. Click "Options" → "Edit site name"
3. Choose: `tote-art.netlify.app` (or your preference)

## Option 2: Deploy via Netlify CLI

### Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Login to Netlify

```bash
netlify login
```

### Initialize Site

```bash
netlify init
```

Follow the prompts:
- Create & configure a new site
- Team: Your team
- Site name: `tote-art` (or your choice)
- Build command: `npm run build`
- Publish directory: `dist/tato-blog/browser`

### Deploy

```bash
# Deploy to draft URL
netlify deploy

# Deploy to production
netlify deploy --prod
```

## Custom Domain Setup

### Step 1: Add Custom Domain

1. In Netlify dashboard: Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain: `yourdomain.com`

### Step 2: Configure DNS

**Option A - Netlify DNS (Recommended):**
1. Click "Set up Netlify DNS"
2. Follow wizard to migrate nameservers
3. Update nameservers at your domain registrar

**Option B - External DNS:**
Add these records at your DNS provider:

```
Type    Name    Value
A       @       75.2.60.5
CNAME   www     your-site.netlify.app
```

### Step 3: Enable HTTPS

1. Netlify auto-provisions SSL certificate (Let's Encrypt)
2. Wait 1-24 hours for DNS propagation
3. Certificate appears under Domain management → HTTPS

### Step 4: Force HTTPS

In Domain management:
- Enable "Force HTTPS"
- Enable "HSTS" (optional, but recommended)

## Environment Variables (If Needed)

If you add API keys or secrets later:

1. Site settings → Environment variables
2. Add variables
3. Redeploy site

## Post-Deployment Tasks

### Update URLs in Code

Now that you have your actual domain, replace placeholder URLs:

1. **In `src/index.html`:** Replace `https://yourwebsite.com/` with your actual URL
2. **In `public/sitemap.xml`:** Replace all URL occurrences
3. **In `public/robots.txt`:** Update sitemap URL

Commit and push changes - Netlify auto-deploys!

### Create OG Image

1. Create social share image (1200×630px)
2. Save as `src/assets/images/og-image.jpg`
3. Commit and push

### Submit to Search Engines

1. **Google Search Console:**
   - Add property: `https://yourdomain.com`
   - Verify ownership (use HTML file method)
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Bing Webmaster Tools:**
   - Add site
   - Verify ownership
   - Submit sitemap

## Continuous Deployment

Every push to `main` branch auto-deploys to production!

**Deploy previews:** Pull requests get preview URLs automatically.

## Build Settings Reference

Your `netlify.toml` is configured with:

- ✓ Correct publish directory
- ✓ SPA redirect for Angular routing
- ✓ Security headers
- ✓ Cache optimization for assets
- ✓ Angular runtime plugin

## Troubleshooting

### Build Fails

**Check build logs:**
1. Deploys → Failed deploy → View build logs
2. Look for errors in npm install or build phase

**Common fixes:**
```bash
# Clear cache and rebuild
netlify build --clear-cache

# Check Node version matches
node -v  # Should be 20.x
```

### Routes Don't Work (404 on Refresh)

Ensure `public/_redirects` exists with:
```
/*    /index.html   200
```

### Images Don't Load

Check paths in code:
- Should be: `assets/images/logo.webp`
- Not: `/assets/images/logo.webp` (no leading slash)

### Slow First Load

Normal! After first visit:
- Assets are cached
- CDN warms up
- Subsequent loads are fast

## Performance Optimization

Netlify automatically provides:
- ✓ Global CDN
- ✓ Asset optimization
- ✓ Brotli compression
- ✓ HTTP/2
- ✓ Smart CDN caching

## Monitoring

**View analytics:**
- Site overview → Analytics
- Real-time visitors
- Bandwidth usage
- Deploy frequency

**Set up notifications:**
- Site settings → Build & deploy → Deploy notifications
- Add Slack, email, or webhook

## Cost

**Free tier includes:**
- 100 GB bandwidth/month
- 300 build minutes/month
- Automatic HTTPS
- Deploy previews
- Forms (100 submissions/month)

Your art portfolio will comfortably fit in free tier!

## Support

**Netlify Docs:** https://docs.netlify.com/
**Community:** https://answers.netlify.com/
**Status:** https://www.netlifystatus.com/

---

## Quick Deploy Badge

Add to your GitHub README:

```markdown
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)
```

Get your site ID from: Site settings → General → Site details

---

**Ready to deploy?** Push your code and watch it go live! 🚀
