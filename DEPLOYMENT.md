# Deployment Guide

This guide covers deploying both the JavaScript (React) and Python (Flask) portfolios to various platforms.

## 📋 Table of Contents

- [JavaScript Portfolio Deployment](#javascript-portfolio-deployment)
- [Python Portfolio Deployment](#python-portfolio-deployment)
- [GitHub Pages Setup](#github-pages-setup)
- [Environment Variables](#environment-variables)

## 🚀 JavaScript Portfolio Deployment

### GitHub Pages

1. **Update `vite.config.js`:**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/sanju-portfolio/', // Your repository name
})
```

2. **Build the project:**
```bash
npm run build
```

3. **Deploy to GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (or `main` with `/dist` folder)
   - Folder: `/dist` or `/root`

4. **Using GitHub Actions (Recommended):**
   - Create `.github/workflows/deploy.yml`
   - Automate build and deployment

### Vercel

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Or connect via GitHub:**
   - Import repository on Vercel
   - Auto-deploy on push

### Netlify

1. **Via Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

2. **Via Netlify Dashboard:**
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`

### Environment Variables

Create `.env.production`:
```env
VITE_PYTHON_PORTFOLIO_URL=https://your-python-portfolio.herokuapp.com
```

## 🐍 Python Portfolio Deployment

### Heroku

1. **Install Heroku CLI:**
```bash
# Download from heroku.com
```

2. **Login:**
```bash
heroku login
```

3. **Create app:**
```bash
cd python-portfolio
heroku create your-app-name
```

4. **Deploy:**
```bash
git push heroku main
```

5. **Set environment variables:**
```bash
heroku config:set FLASK_ENV=production
heroku config:set JS_PORTFOLIO_URL=https://your-username.github.io/sanju-portfolio
```

**Important:** Set `JS_PORTFOLIO_URL` to your deployed JavaScript portfolio URL (e.g., GitHub Pages URL).

### Railway

1. **Connect GitHub repository**
2. **Set build command:**
```
pip install -r requirements.txt
```

3. **Set start command:**
```
gunicorn app:app
```

4. **Set environment variable:**
   - In Railway dashboard, add: `JS_PORTFOLIO_URL=https://your-username.github.io/sanju-portfolio`

5. **Deploy automatically on push**

### Render

1. **Create new Web Service**
2. **Connect GitHub repository**
3. **Settings:**
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn app:app`
   - Environment: Python 3
   - Environment Variables: Add `JS_PORTFOLIO_URL=https://your-username.github.io/sanju-portfolio`

4. **Deploy**

### PythonAnywhere

1. **Upload files via Files tab**
2. **Create new Web App**
3. **Set WSGI file:**
```python
import sys
path = '/home/yourusername/python-portfolio'
if path not in sys.path:
    sys.path.append(path)

from app import app as application
```

4. **Reload web app**

## 🔗 Linking Portfolios

After deploying both portfolios:

1. **Update JavaScript portfolio `.env.production`:**
```env
VITE_PYTHON_PORTFOLIO_URL=https://your-python-portfolio.herokuapp.com
```

2. **Update Python portfolio environment variable:**
```bash
# Set JS_PORTFOLIO_URL to your JavaScript portfolio URL
# For Heroku:
heroku config:set JS_PORTFOLIO_URL=https://your-username.github.io/sanju-portfolio

# For Railway/Render: Set in their dashboard
# JS_PORTFOLIO_URL=https://your-username.github.io/sanju-portfolio
```

2. **Rebuild and redeploy JavaScript portfolio**

3. **Update Python portfolio base.html:**
```html
<a href="https://your-js-portfolio.vercel.app" class="portfolio-option">
```

## 📝 GitHub Pages Setup (Detailed)

### Option 1: Using gh-pages Branch

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json:**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy:**
```bash
npm run deploy
```

### Option 2: Using GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 🔐 Environment Variables

### JavaScript Portfolio

Create `.env.production`:
```env
VITE_PYTHON_PORTFOLIO_URL=https://your-python-portfolio-url.com
```

### Python Portfolio

Set the JavaScript portfolio URL for the portfolio switcher:

**Heroku:**
```bash
heroku config:set JS_PORTFOLIO_URL=https://your-username.github.io/sanju-portfolio
```

**Railway/Render:**
Set in dashboard: `JS_PORTFOLIO_URL=https://your-username.github.io/sanju-portfolio`

**Local Development:**
Defaults to `http://localhost:5173` if not set.

For other production settings, you may want to add:
```python
import os

app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-secret-key')
```

## ✅ Pre-Deployment Checklist

### JavaScript Portfolio
- [ ] Update `vite.config.js` base path
- [ ] Set environment variables
- [ ] Test build locally (`npm run build`)
- [ ] Verify all assets load correctly
- [ ] Test portfolio switcher links
- [ ] Check responsive design

### Python Portfolio
- [ ] Add `gunicorn` to requirements.txt
- [ ] Create `Procfile`
- [ ] Test locally with gunicorn
- [ ] Set environment variables
- [ ] Update portfolio switcher URLs
- [ ] Test all routes

## 🐛 Troubleshooting

### JavaScript Portfolio

**Issue: Assets not loading on GitHub Pages**
- Check `vite.config.js` base path
- Ensure all paths are relative
- Clear browser cache

**Issue: Portfolio switcher not working**
- Check environment variable is set
- Verify Python portfolio URL is correct
- Check browser console for errors

### Python Portfolio

**Issue: Application crashes on Heroku**
- Check `Procfile` is correct
- Verify `requirements.txt` includes gunicorn
- Check Heroku logs: `heroku logs --tail`

**Issue: Static files not loading**
- Verify `static` folder structure
- Check Flask static folder configuration
- Ensure CSS/JS files are in correct locations

## 📚 Additional Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Flask Deployment Guide](https://flask.palletsprojects.com/en/latest/deploying/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Heroku Python Guide](https://devcenter.heroku.com/articles/getting-started-with-python)

---

For issues or questions, please open an issue on GitHub.

