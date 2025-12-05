# Python Portfolio - Flask Implementation

A Flask-based portfolio website showcasing skills, experience, and projects. This is the Python/Flask version of the portfolio, featuring server-side rendering with Jinja2 templates.

## 🚀 Quick Start

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

### Installation

1. **Navigate to the python-portfolio directory:**
```bash
cd python-portfolio
```

2. **Create a virtual environment (recommended):**
```bash
python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate
```

3. **Install dependencies:**
```bash
pip install -r requirements.txt
```

4. **Run the application:**
```bash
python app.py
```

5. **Access the portfolio:**
Open your browser and navigate to `http://localhost:5000`

## 📁 Project Structure

```
python-portfolio/
├── app.py                 # Flask application and routes
├── requirements.txt       # Python dependencies
├── templates/            # Jinja2 HTML templates
│   ├── base.html        # Base template with navbar and footer
│   ├── index.html       # Main landing page (single-page)
│   ├── about.html       # About section
│   ├── skills.html      # Skills section
│   ├── experience.html # Experience section
│   ├── projects.html    # Projects section
│   ├── education.html  # Education section
│   └── contact.html     # Contact section
└── static/
    └── style.css        # Stylesheet with all styles
```

## 🛠️ Technologies Used

- **Flask** - Python web framework
- **Jinja2** - Template engine
- **CSS3** - Custom styling with animations
- **JavaScript** - Interactive features and animations
- **HTML5** - Semantic markup

## 📝 Configuration

### Update Portfolio Data

Edit `app.py` and modify the `portfolio_data` dictionary:

```python
portfolio_data = {
    'name': 'Your Name',
    'title': 'Your Title',
    'email': 'your.email@example.com',
    # ... update other fields
}
```

### Customize Styling

Edit `static/style.css` to customize:
- Color scheme (CSS variables in `:root`)
- Animations and transitions
- Responsive breakpoints
- Component styles

## 🌐 Deployment

### Environment Variables

Before deploying, set the JavaScript portfolio URL:

```bash
# For production, set the JavaScript portfolio URL
export JS_PORTFOLIO_URL=https://your-username.github.io/sanju-portfolio

# Or for Heroku/Railway/Render, set in their dashboard:
# JS_PORTFOLIO_URL=https://your-username.github.io/sanju-portfolio
```

**Note:** If not set, it defaults to `http://localhost:5173` for local development.

### Heroku

1. **Create `Procfile`:**
```
web: gunicorn app:app
```

2. **Update `requirements.txt`** to include:
```
gunicorn
```

3. **Set environment variable:**
```bash
heroku config:set JS_PORTFOLIO_URL=https://your-username.github.io/sanju-portfolio
```

4. **Deploy:**
```bash
git push heroku main
```

### Railway

1. **Add `Procfile`:**
```
web: gunicorn app:app
```

2. **Deploy via Railway dashboard**

### Render

1. **Set build command:**
```
pip install -r requirements.txt
```

2. **Set start command:**
```
gunicorn app:app
```

### Local Production Server

```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

## 🔧 Development

### Running in Development Mode

```bash
export FLASK_ENV=development
python app.py
```

### Debug Mode

Edit `app.py`:
```python
if __name__ == '__main__':
    app.run(debug=True)
```

## 📦 Dependencies

See `requirements.txt` for all dependencies:
- Flask - Web framework
- (Add gunicorn for production)

## 🎨 Features

- **Single-page design** with smooth scrolling
- **Portfolio switcher** in navbar
- **Responsive design** for all devices
- **Smooth animations** and transitions
- **Contact form** (frontend only - needs backend for functionality)
- **Welcome modal** for first-time visitors

## 🔗 Integration with JavaScript Portfolio

The Python portfolio can be accessed from the JavaScript portfolio via the portfolio switcher. Update the URL in the JavaScript portfolio's environment variables:

```env
VITE_PYTHON_PORTFOLIO_URL=https://your-python-portfolio.herokuapp.com
```

## 📱 Contact

- **Email**: itssanjaysm@gmail.com
- **LinkedIn**: [linkedin.com/in/sanjay-sm-484186271](https://www.linkedin.com/in/sanjay-sm-484186271/)
- **GitHub**: [github.com/sanjaysm25](https://github.com/sanjaysm25)

---

Part of the Multi-Portfolio Project by Sanjay S M

