# Deploy to GitHub - Step by Step Guide

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `sanju-portfolio` (or any name you prefer)
3. Description: "Portfolio website - AI & ML Engineer"
4. Choose **Public** or **Private**
5. **DO NOT** check "Add a README file" (we already have one)
6. Click **"Create repository"**

## Step 2: Push Your Code

After creating the repository, run these commands (replace `YOUR_REPO_NAME` with your actual repo name):

```bash
git remote add origin https://github.com/sanjaysm25/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to GitHub Pages (Optional)

### Option A: Using GitHub Actions (Recommended)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **"GitHub Actions"**
4. Create a workflow file (see below)

### Option B: Manual Deployment

1. Build your project: `npm run build`
2. Go to repository **Settings** → **Pages**
3. Select **"Deploy from a branch"**
4. Choose branch: `main` and folder: `/docs`
5. Copy the `dist` folder contents to a `docs` folder
6. Commit and push

## GitHub Actions Workflow (Recommended)

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
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Quick Commands Reference

```bash
# Add remote (replace YOUR_REPO_NAME)
git remote add origin https://github.com/sanjaysm25/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main

# For future updates
git add .
git commit -m "Your commit message"
git push
```

