# Project Structure

Complete directory structure of the Multi-Portfolio project.

```
Sanju Portolio/
│
├── 📁 src/                          # React/JavaScript Portfolio Source
│   ├── 📁 components/                # React Components
│   │   ├── About.jsx                # About section component
│   │   ├── Contact.jsx              # Contact form component
│   │   ├── Education.jsx            # Education section
│   │   ├── Experience.jsx           # Experience timeline
│   │   ├── Footer.jsx               # Footer component
│   │   ├── Hero.jsx                 # Hero/landing section
│   │   ├── NameSection.jsx          # Name section component
│   │   ├── Navbar.jsx               # Navigation bar with switcher
│   │   ├── PortfolioIntro.jsx      # Welcome modal component
│   │   ├── PortfolioSwitcher.jsx    # Portfolio switcher dropdown
│   │   ├── Projects.jsx             # Projects showcase
│   │   ├── ScrollToTop.jsx          # Scroll to top button
│   │   └── Skills.jsx               # Skills section
│   ├── 📁 contexts/                  # React Contexts (empty, for future use)
│   ├── 📁 portfolios/               # Portfolio data/configs (empty, for future use)
│   ├── App.jsx                      # Main application component
│   ├── ErrorBoundary.jsx            # Error boundary component
│   ├── index.css                    # Global styles and Tailwind
│   └── main.jsx                     # Application entry point
│
├── 📁 python-portfolio/              # Python/Flask Portfolio
│   ├── 📁 templates/                # Jinja2 HTML Templates
│   │   ├── base.html                # Base template (navbar, footer)
│   │   ├── index.html               # Main page (single-page design)
│   │   ├── about.html               # About section
│   │   ├── skills.html              # Skills section
│   │   ├── experience.html          # Experience section
│   │   ├── projects.html            # Projects section
│   │   ├── education.html           # Education section
│   │   └── contact.html             # Contact section
│   ├── 📁 static/                    # Static Assets
│   │   └── style.css                # Complete stylesheet
│   ├── app.py                       # Flask application
│   ├── requirements.txt              # Python dependencies
│   ├── Procfile                     # Heroku/Railway deployment config
│   ├── runtime.txt                  # Python version for deployment
│   └── README.md                     # Python portfolio documentation
│
├── 📁 public/                        # Public Static Assets
│   └── logo.png                     # Logo image
│
├── 📁 .github/                       # GitHub Configuration
│   └── 📁 workflows/                # GitHub Actions
│       └── deploy.yml               # Auto-deploy workflow
│
├── 📄 Configuration Files
│   ├── package.json                 # Node.js dependencies & scripts
│   ├── package-lock.json            # Locked dependencies
│   ├── vite.config.js               # Vite build configuration
│   ├── tailwind.config.js           # Tailwind CSS configuration
│   ├── postcss.config.js            # PostCSS configuration
│   └── .gitignore                   # Git ignore rules
│
├── 📄 Documentation
│   ├── README.md                    # Main project documentation
│   ├── DEPLOYMENT.md                # Deployment guide
│   ├── QUICK_START.md               # Quick start guide
│   ├── CONTRIBUTING.md              # Contribution guidelines
│   ├── PROJECT_STRUCTURE.md         # This file
│   └── LICENSE                      # MIT License
│
├── 📄 Environment & Deployment
│   ├── .env.example                 # Environment variables template
│   └── .gitattributes               # Git line ending configuration
│
└── 📄 Entry Points
    └── index.html                   # HTML entry point for React app

```

## 📦 Key Files Explained

### JavaScript Portfolio
- **`src/App.jsx`**: Main React component that renders all sections
- **`src/main.jsx`**: Application entry point
- **`vite.config.js`**: Build configuration with base path for GitHub Pages
- **`package.json`**: Dependencies and npm scripts

### Python Portfolio
- **`app.py`**: Flask application with all routes and portfolio data
- **`requirements.txt`**: Python dependencies (Flask, gunicorn)
- **`Procfile`**: Deployment configuration for Heroku/Railway
- **`templates/base.html`**: Base template with navbar and portfolio switcher

### Deployment
- **`.github/workflows/deploy.yml`**: Automated GitHub Pages deployment
- **`DEPLOYMENT.md`**: Comprehensive deployment guide
- **`.env.example`**: Template for environment variables

## 🗂️ Directory Purposes

- **`src/components/`**: All React components (modular, reusable)
- **`python-portfolio/templates/`**: Jinja2 HTML templates
- **`python-portfolio/static/`**: CSS and static assets for Flask
- **`public/`**: Static assets served by Vite
- **`.github/workflows/`**: CI/CD automation

## 📝 Notes

- Empty directories (`contexts/`, `portfolios/`) are kept for future expansion
- Both portfolios share the same data structure
- Portfolio switcher allows navigation between implementations
- All styles are self-contained in respective CSS files

