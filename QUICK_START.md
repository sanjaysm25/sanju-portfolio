# Quick Start Guide

Get both portfolios running locally in minutes!

## ⚡ Quick Setup

### 1. JavaScript Portfolio (React)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### 2. Python Portfolio (Flask)

```bash
# Navigate to python-portfolio
cd python-portfolio

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the application
python app.py

# Open http://localhost:5000
```

## 🔗 Linking Portfolios

1. **Create `.env` file in root directory:**
```env
VITE_PYTHON_PORTFOLIO_URL=http://localhost:5000
```

2. **Restart JavaScript portfolio dev server**

3. **Click the portfolio switcher button** in the navbar to switch between portfolios!

## 📦 Build for Production

### JavaScript Portfolio
```bash
npm run build
# Output in dist/ folder
```

### Python Portfolio
```bash
# For production, use gunicorn:
gunicorn app:app
```

## 🚀 Deploy

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

---

**Need help?** Check the main [README.md](README.md) for more details.

