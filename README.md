# Sanjay S M - Multi-Portfolio Website

A modern, responsive portfolio website showcasing skills, experience, and projects as an AI & Machine Learning Engineer. This repository contains **two portfolio implementations**: a React/JavaScript version and a Python/Flask version, both featuring a portfolio switcher for seamless navigation.

🌐 **Live Site**: [https://sanjaysm25.github.io/sanju-portfolio/](https://sanjaysm25.github.io/sanju-portfolio/)

## 🎯 Features

### Both Portfolios Include:
- **Modern UI/UX**: Beautiful, sleek design with glassmorphism effects and smooth animations
- **Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- **Portfolio Switcher**: Easy navigation between different portfolio implementations
- **Interactive Animations**: Smooth scroll animations and hover effects
- **Welcome Modal**: First-time visitor introduction to the portfolio switcher feature

### Sections:
- Hero section with animated background
- About me with highlights and stats
- Technical skills with progress indicators
- Experience timeline
- Projects showcase
- Education & Certifications
- Contact form with social links

## 📁 Project Structure

```
Sanju Portolio/
├── src/                          # React/JavaScript Portfolio
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation with portfolio switcher
│   │   ├── Hero.jsx             # Hero section
│   │   ├── About.jsx            # About section
│   │   ├── Skills.jsx           # Skills section
│   │   ├── Experience.jsx       # Experience timeline
│   │   ├── Projects.jsx         # Projects showcase
│   │   ├── Education.jsx        # Education section
│   │   ├── Contact.jsx          # Contact form
│   │   ├── PortfolioSwitcher.jsx # Portfolio switcher component
│   │   ├── PortfolioIntro.jsx  # Welcome modal
│   │   └── ...
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── python-portfolio/             # Python/Flask Portfolio
│   ├── app.py                   # Flask application
│   ├── requirements.txt         # Python dependencies
│   ├── templates/               # Jinja2 templates
│   │   ├── base.html           # Base template
│   │   ├── index.html          # Main page
│   │   ├── about.html          # About page
│   │   ├── skills.html         # Skills page
│   │   ├── experience.html     # Experience page
│   │   ├── projects.html       # Projects page
│   │   ├── education.html      # Education page
│   │   └── contact.html        # Contact page
│   └── static/
│       └── style.css            # Stylesheet
├── public/                      # Static assets
│   └── logo.png
├── package.json                 # Node.js dependencies
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── README.md                    # This file
```

## 🚀 Quick Start

### JavaScript Portfolio (React)

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

### Python Portfolio (Flask)

1. **Create virtual environment:**
```bash
cd python-portfolio
python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate
```

2. **Install dependencies:**
```bash
pip install -r requirements.txt
```

3. **Run the application:**
```bash
python app.py
```

4. **Access the portfolio:**
Open your browser and navigate to `http://localhost:5000`

## 🛠️ Technologies Used

### JavaScript Portfolio:
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

### Python Portfolio:
- **Flask** - Python web framework
- **Jinja2** - Template engine
- **CSS3** - Custom styling with animations
- **JavaScript** - Interactive features

## 🎨 Portfolio Switcher

Both portfolios feature a portfolio switcher button in the navbar that allows users to:
- Switch between Python, JavaScript, HTML/CSS, and Java portfolio versions
- See a welcome modal on first visit explaining the feature
- Get visual hints and tooltips on hover

### Configuration

To configure the Python portfolio URL in the JavaScript portfolio, create a `.env` file:

```env
VITE_PYTHON_PORTFOLIO_URL=http://localhost:5000
```

For production, update the URL to your deployed Python portfolio.

## 📦 Deployment

### JavaScript Portfolio (GitHub Pages)

1. **Update `vite.config.js` base path:**
```javascript
export default defineConfig({
  base: '/sanju-portfolio/',
  // ... rest of config
})
```

2. **Build the project:**
```bash
npm run build
```

3. **Deploy `dist/` folder to GitHub Pages**

### Python Portfolio (Heroku/Railway/Render)

1. **Create `Procfile`:**
```
web: gunicorn app:app
```

2. **Update `requirements.txt`** to include:
```
gunicorn
```

3. **Deploy to your preferred platform**

### Alternative Deployment Options

- **Vercel**: Connect GitHub repository (for React)
- **Netlify**: Drag and drop `dist` folder or connect via Git
- **Render**: Deploy Flask app directly
- **Railway**: Deploy both portfolios separately

## 🎯 Features Overview

### Portfolio Switcher
- Located in the top-left of the navbar
- Dropdown menu with all available portfolios
- Visual indicators and animations
- Welcome modal for first-time visitors
- Tooltip hints on hover

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interactions
- Optimized images and assets

### Performance
- Lazy loading for images
- Code splitting
- Optimized animations
- Fast page loads

## 📝 Customization

### Update Personal Information

**JavaScript Portfolio:**
- Edit component files in `src/components/`
- Update contact info in `Hero.jsx` and `Contact.jsx`
- Modify data in respective component files

**Python Portfolio:**
- Edit `python-portfolio/app.py`
- Update `portfolio_data` dictionary
- Modify templates in `python-portfolio/templates/`

### Color Scheme

**JavaScript Portfolio:**
- Modify `tailwind.config.js`
- Update gradient colors in components

**Python Portfolio:**
- Edit CSS variables in `python-portfolio/static/style.css`
- Update `:root` color variables

## 🔧 Development

### Running Both Portfolios Simultaneously

1. **Terminal 1 - JavaScript Portfolio:**
```bash
npm run dev
# Runs on http://localhost:5173
```

2. **Terminal 2 - Python Portfolio:**
```bash
cd python-portfolio
python app.py
# Runs on http://localhost:5000
```

### Environment Variables

Create `.env` file in root directory:
```env
VITE_PYTHON_PORTFOLIO_URL=http://localhost:5000
```

## 📱 Contact

- **Email**: itssanjaysm@gmail.com
- **LinkedIn**: [linkedin.com/in/sanjay-sm-484186271](https://www.linkedin.com/in/sanjay-sm-484186271/)
- **GitHub**: [github.com/sanjaysm25](https://github.com/sanjaysm25)
- **Phone**: +91 84319 42404
- **Location**: Bengaluru, Karnataka, India

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from React Icons and Font Awesome
- Animations powered by Framer Motion

---

Built with ❤️ by Sanjay S M
