from flask import Flask, render_template
import os

app = Flask(__name__)

# Configuration for portfolio switcher URLs
# Set via environment variable JS_PORTFOLIO_URL or default to localhost for development
JS_PORTFOLIO_URL = os.environ.get('JS_PORTFOLIO_URL', 'http://localhost:5173')

# Portfolio data
portfolio_data = {
    'name': 'Sanjay S M',
    'title': 'Full-stack Developer & AI & ML Engineer',
    'about': 'Enthusiastic AI & Machine Learning graduate with a strong background in data analysis, machine learning algorithms, and software development. Skilled in building intelligent systems and developing software solutions that enhance efficiency and innovation. Eager to join a forward-thinking team where I can apply my expertise in AI technologies and software engineering to create impactful, real-world applications. Passionate about leveraging cutting-edge AI to solve complex problems and drive advancements in technology.',
    'email': 'itssanjaysm@gmail.com',
    'phone': '+91 84319 42404',
    'github': 'https://github.com/sanjaysm25',
    'linkedin': 'https://www.linkedin.com/in/sanjay-sm-484186271/',
    'whatsapp': 'https://wa.me/918431942404',
    'location': 'Bengaluru, Karnataka, India',
    'address': '#3B/2, 1st Main, Kengeri Satellite Town, Bengaluru, Karnataka, India, 560060',
    'years_experience': '1.5+',
    'projects_completed': '25+',
    'skills': [
        {'name': 'Python', 'level': 90},
        {'name': 'JavaScript', 'level': 85},
        {'name': 'React', 'level': 85},
        {'name': 'Node.js', 'level': 80},
        {'name': 'TensorFlow', 'level': 85},
        {'name': 'PyTorch', 'level': 80},
        {'name': 'Machine Learning', 'level': 85},
        {'name': 'Deep Learning', 'level': 80},
        {'name': 'MySQL', 'level': 85},
        {'name': 'MongoDB', 'level': 80},
        {'name': 'HTML/CSS', 'level': 90},
        {'name': 'Git', 'level': 85},
    ],
    'projects': [
        {
            'title': 'Harnessing AI for Precise Estimation of Medical Leaf Characteristics',
            'short_title': 'Medical Leaf AI',
            'description': 'Utilizing advanced AI techniques like VGG16 and Random Forest to precisely identify and analyze medical leaf characteristics, merging botany, healthcare, and AI. Seamlessly integrates geolocation data and disease detection for informed decision-making in both agricultural and medical contexts.',
            'technologies': ['Python', 'TensorFlow', 'OpenCV', 'VGG16', 'Random Forest'],
            'period': 'Sep 2023 - Jan 2024',
            'github': 'https://github.com/sanjaysm25',
            'demo': None
        },
        {
            'title': 'Driver Drowsiness Detection',
            'description': 'A computer vision-based system that detects faces, eyes, nose, and mouth in real-time images. By analyzing the eye regions and applying fuzzy logic, the system determines if the driver is drowsy. If drowsiness is detected, appropriate warnings and alerts are triggered to ensure driver safety.',
            'technologies': ['MATLAB'],
            'period': 'Jan 2023 - June 2023',
            'github': 'https://github.com/sanjaysm25',
            'demo': None
        },
        {
            'title': 'BookMyPool Application',
            'description': 'An Android application that helps people share rides and reduce their carbon footprint by connecting users who are traveling in the same direction.',
            'technologies': ['Android Studio', 'Java'],
            'period': 'Jan 2023 - June 2023',
            'github': 'https://github.com/sanjaysm25',
            'demo': None
        },
        {
            'title': 'Exam Nerd - Online Exam System',
            'description': 'A comprehensive online examination system allowing teachers to create quizzes and students to attend them. Features a ranking system that arranges students based on their performance. Very useful for both students and teachers.',
            'technologies': ['PHP', 'MySQL', 'HTML', 'CSS'],
            'period': 'Sep 2023',
            'github': 'https://github.com/sanjaysm25',
            'demo': None
        }
    ],
    'experience': [
        {
            'company': 'UPRIO',
            'position': 'Software Engineer',
            'location': 'Bengaluru, India • Onsite',
            'period': 'Jul 2025 - Present',
            'description': 'Contributing as junior AI engineer, engaged in initiatives related to artificial intelligence. Developed and implemented new software applications, enhancing company productivity and client satisfaction.'
        },
        {
            'company': 'AT&T',
            'position': 'Software Developer Level 1',
            'location': 'Bengaluru, India • Onsite',
            'period': 'Jun 2024 - Jun 2025',
            'description': 'Joined the development team and actively contributed to building and improving applications. Worked on key projects while continuously gaining technical knowledge and hands-on experience.'
        },
        {
            'company': 'Otomeyt | An Apar Entity',
            'position': 'Trainee',
            'location': 'Bengaluru, India • Onsite',
            'period': 'Sep 2023',
            'description': 'Joined Otomeyt, an AI-based company, as a Trainee within the Development Team. Actively participated in company projects, including hands-on assignments. Gained exposure to various programming languages and acquired valuable corporate world experience.'
        }
    ],
    'education': [
        {
            'institution': 'Mangalore Institute of Technology and Engineering',
            'degree': 'BE – AI & ML Engineering',
            'location': 'Moodbidri – 574225',
            'period': '2020 - 2024',
            'grade': 'CGPA: 8.2',
            'description': 'Bachelor of Engineering in Artificial Intelligence & Machine Learning'
        },
        {
            'institution': 'RNS PU College',
            'degree': 'Senior Secondary (PU)',
            'location': 'Bengaluru, Karnataka 560098',
            'period': '2018 - 2020',
            'grade': '79.68%',
            'description': 'Pre-University Education'
        },
        {
            'institution': 'Vishwa Venkateshwara international school',
            'degree': 'Secondary School (CBSE)',
            'location': 'Bengaluru, Karnataka 560060',
            'period': '2006 - 2018',
            'grade': '88%',
            'description': 'Secondary School Education'
        }
    ]
}

@app.route('/')
def index():
    return render_template('index.html', data=portfolio_data, js_portfolio_url=JS_PORTFOLIO_URL)

@app.route('/about')
def about():
    return render_template('about.html', data=portfolio_data, js_portfolio_url=JS_PORTFOLIO_URL)

@app.route('/skills')
def skills():
    return render_template('skills.html', data=portfolio_data, js_portfolio_url=JS_PORTFOLIO_URL)

@app.route('/education')
def education():
    return render_template('education.html', data=portfolio_data, js_portfolio_url=JS_PORTFOLIO_URL)

@app.route('/projects')
def projects():
    return render_template('projects.html', data=portfolio_data, js_portfolio_url=JS_PORTFOLIO_URL)

@app.route('/experience')
def experience():
    return render_template('experience.html', data=portfolio_data, js_portfolio_url=JS_PORTFOLIO_URL)

@app.route('/contact')
def contact():
    return render_template('contact.html', data=portfolio_data, js_portfolio_url=JS_PORTFOLIO_URL)

if __name__ == '__main__':
    debug_mode = os.environ.get('FLASK_ENV') == 'development'
    port = int(os.environ.get('PORT', 5000))
    print(f"Starting Flask server on http://0.0.0.0:{port}")
    print(f"JavaScript Portfolio URL: {JS_PORTFOLIO_URL}")
    app.run(debug=debug_mode, host='0.0.0.0', port=port)

