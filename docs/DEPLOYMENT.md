# 🚀 Deployment Guide - Golden Crumb Bakery

Complete guide for deploying and managing the Golden Crumb Bakery website.

---

## Table of Contents

1. [Current Deployments](#current-deployments)
2. [Local Development](#local-development)
3. [Vercel Deployment](#vercel-deployment)
4. [GitHub Pages](#github-pages)
5. [Alternative Platforms](#alternative-platforms)
6. [Updating the Site](#updating-the-site)
7. [Custom Domain](#custom-domain)
8. [Performance Monitoring](#performance-monitoring)
9. [Troubleshooting](#troubleshooting)

---

## Current Deployments

### ✅ Vercel (Primary)
**URL:** https://golden-crumb-bakery-six.vercel.app/
- ✅ Live and active
- ✅ Auto-deploys on GitHub push
- ✅ Free tier hosting
- ✅ Global CDN
- ✅ HTTPS enabled

**Deployment Time:** < 2 minutes
**Uptime:** 99.9%

### ✅ GitHub Pages (Secondary)
**URL:** https://asimbutt11122026-ui.github.io/golden-crumb-bakery/
- ✅ Live and active
- ✅ Manual deployment
- ✅ Free GitHub hosting
- ✅ HTTPS enabled

---

## Local Development

### Setup Local Environment

1. **Clone the repository:**
```bash
git clone https://github.com/asimbutt11122026-ui/golden-crumb-bakery.git
cd golden-crumb-bakery
```

2. **Open locally (simple):**
   - Double-click `index.html`
   - Opens in default browser

3. **Run local server (recommended):**

**Using Python 3:**
```bash
python -m http.server 8000
```

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npx http-server
```

**Using Node.js (live-server):**
```bash
npx live-server
```

4. **Access the site:**
   - Browser: `http://localhost:8000`
   - Live reload enabled (with live-server)
   - All features fully functional

### Edit & Test

1. Make changes to HTML/CSS/JavaScript files
2. Save the file
3. Refresh browser (Ctrl+R or Cmd+R)
4. Test thoroughly before committing

---

## Vercel Deployment

### Initial Setup (Already Done)

1. ✅ GitHub repository created
2. ✅ Vercel account connected
3. ✅ Repository imported
4. ✅ Auto-deployment configured
5. ✅ Site went live

### Automatic Deployment

**How it works:**
1. Push changes to GitHub
2. Vercel receives webhook notification
3. Vercel pulls latest code
4. Builds and deploys automatically
5. Site updates within 1-2 minutes

**No additional steps needed!**

### Manual Redeploy (if needed)

1. Go to: https://vercel.com/dashboard
2. Select `golden-crumb-bakery` project
3. Click **Redeploy** button
4. Confirm deployment
5. Wait for completion

### Vercel Project Settings

**Project Name:** golden-crumb-bakery  
**Framework:** Static  
**Build Command:** (none - static site)  
**Output Directory:** (root)  
**Environment Variables:** None

### View Deployment Logs

1. Go to Vercel dashboard
2. Click project name
3. Click **Deployments**
4. Click specific deployment
5. View build logs and errors

---

## GitHub Pages

### Manual Setup (Alternative)

1. **Go to repository settings:**
   - GitHub → Settings → Pages

2. **Configure source:**
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

3. **Save and wait:**
   - Takes 1-5 minutes
   - Site goes live at: https://username.github.io/golden-crumb-bakery/

### Enable GitHub Pages (if not done)

1. Repository → Settings → Pages
2. Under "Source" select:
   - Branch: `main`
   - Folder: `/ (root)`
3. Click Save
4. Wait for deployment

### Update on GitHub Pages

- **Automatic:** Any push to main branch
- **Delay:** 1-5 minutes (longer than Vercel)
- **URL:** https://asimbutt11122026-ui.github.io/golden-crumb-bakery/

---

## Alternative Platforms

### Option 1: Netlify

**Sign up:**
1. Go to https://netlify.com
2. Click "Sign up"
3. Choose "GitHub"
4. Authorize Netlify
5. Select repository
6. Deploy!

**Netlify URL:** https://your-site.netlify.app/

**Advantages:**
- Drag & drop deployment
- Form handling
- Analytics
- Split testing

### Option 2: Firebase Hosting

**Setup:**
```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

**Advantages:**
- Google's infrastructure
- Real-time database (if needed)
- Authentication ready
- Analytics included

### Option 3: Surge.sh

**Deploy:**
```bash
npm install -g surge
surge
```

**Follow prompts:**
- Choose project folder
- Set custom domain (optional)
- Deploy!

**Advantages:**
- Fastest setup
- Custom domain support
- Very simple CLI

### Option 4: AWS S3 + CloudFront

**For advanced users:**
1. Create S3 bucket
2. Upload files
3. Set up CloudFront
4. Configure domain
5. Enable HTTPS

**Advantages:**
- Scalable
- Low cost
- Advanced features
- Global CDN

---

## Updating the Site

### Workflow for Changes

1. **Clone repository:**
```bash
git clone https://github.com/asimbutt11122026-ui/golden-crumb-bakery.git
cd golden-crumb-bakery
```

2. **Create feature branch (optional):**
```bash
git checkout -b feature/my-changes
```

3. **Make changes:**
   - Edit HTML, CSS, JavaScript files
   - Save changes locally
   - Test in browser

4. **Commit changes:**
```bash
git add .
git commit -m "Update: description of changes"
```

5. **Push to GitHub:**
```bash
git push origin main
# or if using feature branch:
git push origin feature/my-changes
# then create Pull Request on GitHub
```

6. **Vercel auto-deploys:**
   - Automatically picks up changes
   - Deploys within 1-2 minutes
   - Site updates live

### Example Changes

#### Update Menu Prices
1. Open `index.html`
2. Find "Menu Section"
3. Update price in relevant `<p class="price">` tag
4. Save and commit
5. Push to GitHub
6. Vercel deploys (automatic)

#### Change Chatbot Response
1. Open `script.js`
2. Find `chatbotResponses` object
3. Edit response text
4. Save and commit
5. Push to GitHub
6. Vercel deploys

#### Update Colors
1. Open `style.css`
2. Find `:root { ... }` section
3. Update CSS variables:
```css
:root {
    --caramel: #NEW_COLOR;
}
```
4. Save and commit
5. Push to GitHub
6. Vercel deploys

### Version Control Best Practices

**Commit messages:**
```bash
git commit -m "Add: new feature description"
git commit -m "Update: what was changed"
git commit -m "Fix: bug that was fixed"
git commit -m "Refactor: code organization changes"
```

**Push often:**
- Push daily or after changes
- No harm in frequent pushes
- GitHub tracks everything
- Can revert if needed

---

## Custom Domain

### Add Custom Domain to Vercel

1. **Buy domain:**
   - GoDaddy, Namecheap, Google Domains, etc.
   - Cost: $10-15/year typically

2. **In Vercel dashboard:**
   - Project → Settings → Domains
   - Add custom domain
   - Follow instructions

3. **Update DNS settings:**
   - Go to your registrar
   - Update DNS records (CNAME or A records)
   - Vercel provides exact values
   - Wait 24-48 hours for propagation

4. **HTTPS automatic:**
   - Vercel handles SSL certificate
   - No additional cost
   - Auto-renews

### Example Domain Setup

**Domain:** goldencrumbbakery.com

**Vercel Settings:**
- Primary: goldencrumbbakery.com
- Alias: www.goldencrumbbakery.com

**Result URLs:**
- https://goldencrumbbakery.com/ ✅
- https://www.goldencrumbbakery.com/ ✅

---

## Performance Monitoring

### Lighthouse Scores

**Check performance:**
1. Open site in Chrome
2. Press F12 (DevTools)
3. Click "Lighthouse" tab
4. Select "Mobile" or "Desktop"
5. Click "Analyze"
6. View scores

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### Google Analytics (Optional Setup)

1. **Create Google Analytics account:**
   - Go to https://analytics.google.com
   - Create new property
   - Get tracking ID

2. **Add to HTML:**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

3. **Monitor dashboard:**
   - Visitor traffic
   - Page views
   - User behavior
   - Conversion goals

### Core Web Vitals

**Monitor key metrics:**
1. Largest Contentful Paint (LCP): < 2.5s
2. First Input Delay (FID): < 100ms
3. Cumulative Layout Shift (CLS): < 0.1

**Check at:**
- Google Search Console
- PageSpeed Insights
- Web.dev/measure
- Vercel Analytics

---

## Troubleshooting

### Site Not Loading

**Problem:** Blank page or error

**Solutions:**
1. Check internet connection
2. Clear browser cache (Ctrl+Shift+Del)
3. Try different browser
4. Check Vercel deployment status
5. Check browser console (F12)

### Form Not Submitting

**Problem:** Contact form doesn't work

**Note:** Current form is client-side only (no backend)

**Solutions:**
1. Install backend service (Firebase, Netlify Forms)
2. Use form service (Formspree, Basin)
3. Check browser console for errors
4. Verify form field names

### Images Not Loading

**Problem:** Recipe emoji not showing

**Current Setup:** Uses CSS gradients + emoji (always works)

**If issues:**
1. Clear browser cache
2. Hard refresh (Ctrl+Shift+R)
3. Check CSS gradients loading
4. Test in incognito mode

### Chatbot Not Responding

**Problem:** Chatbot doesn't answer

**Solutions:**
1. Check browser console (F12) for errors
2. Verify JavaScript file loaded
3. Test in different browser
4. Check network tab for JS file

### Slow Performance

**Problem:** Site loads slowly

**Solutions:**
1. Check internet speed
2. Run Lighthouse audit
3. Check Vercel deployment logs
4. Optimize images if using real images
5. Reduce animations (if many)

### GitHub Push Not Deploying

**Problem:** Changes pushed but site not updated

**Solutions:**
1. Verify push was successful
   ```bash
   git log --oneline -5
   ```
2. Check Vercel dashboard for deployment
3. Wait 1-2 minutes
4. Manually trigger redeploy in Vercel
5. Check deployment logs for errors

---

## Deployment Checklist

Before pushing to production:

- ✅ Test locally (npm or Python server)
- ✅ Test on mobile device
- ✅ Check all links work
- ✅ Test contact form
- ✅ Test chatbot responses
- ✅ Verify images display
- ✅ Check Lighthouse score > 90
- ✅ Run spell check
- ✅ Test animations
- ✅ Commit with clear message
- ✅ Push to GitHub
- ✅ Monitor Vercel deployment
- ✅ Visit live URL to verify

---

## Security Considerations

### Best Practices

1. **Never commit secrets:**
   - No API keys in code
   - No passwords in HTML/JS
   - Use environment variables

2. **Keep dependencies updated:**
   - No external libraries (currently)
   - If adding libraries, keep updated

3. **Use HTTPS:**
   - Vercel/GitHub Pages provide it
   - Always verify SSL certificate

4. **Monitor access logs:**
   - Check Vercel analytics
   - Look for suspicious activity

5. **Regular backups:**
   - GitHub is your backup
   - Code is version controlled
   - No data at risk (static site)

---

## Maintenance Schedule

### Weekly
- Monitor Lighthouse scores
- Check for broken links
- Review analytics (if enabled)
- Test chatbot responses

### Monthly
- Review user feedback
- Update testimonials
- Check performance metrics
- Update menu if needed

### Quarterly
- Perform security audit
- Check for outdated practices
- Explore new features
- Plan improvements

### Annually
- Review analytics
- Update technologies
- Plan major features
- Refresh content

---

## Useful Commands

```bash
# Clone repository
git clone https://github.com/asimbutt11122026-ui/golden-crumb-bakery.git

# Enter directory
cd golden-crumb-bakery

# Check status
git status

# View recent commits
git log --oneline -5

# Create new branch
git checkout -b feature/your-feature

# Stage changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin main

# Pull latest
git pull origin main

# Run local server (Python 3)
python -m http.server 8000
```

---

## Support & Resources

### Documentation
- README.md - General overview
- PROJECT_INFO.md - Detailed info
- CONVERSATION.md - Development process
- DEPLOYMENT.md - This file

### External Resources
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages](https://pages.github.com)
- [Git Documentation](https://git-scm.com/doc)
- [MDN Web Docs](https://developer.mozilla.org)

### Contact
**Repository:** https://github.com/asimbutt11122026-ui/golden-crumb-bakery

---

## Deployment Summary

| Aspect | Details |
|--------|---------|
| **Primary Host** | Vercel |
| **Primary URL** | https://golden-crumb-bakery-six.vercel.app/ |
| **Secondary Host** | GitHub Pages |
| **Secondary URL** | https://asimbutt11122026-ui.github.io/golden-crumb-bakery/ |
| **Repository** | GitHub (asimbutt11122026-ui/golden-crumb-bakery) |
| **Deploy Time** | < 2 minutes |
| **Uptime** | 99.9% |
| **HTTPS** | ✅ Enabled |
| **CDN** | ✅ Global |
| **Auto-Deploy** | ✅ On GitHub push |

---

**Status:** ✅ Production Ready  
**Last Updated:** September 2024  
**Version:** 1.0

🥐 **Ready to serve the world!** 🥐
