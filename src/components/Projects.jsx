import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'AI Document Search — Retrieval-Augmented Generation (RAG) Chatbot',
      shortTitle: 'AI Document Search',
      description: 'Architected an intelligent document search system enabling users to converse with PDF documents using LLMs and semantic search. Leveraged Google Gemini API with RAG pipelines for context-aware responses. Deployed on Vercel and Docker.',
      technologies: ['React', 'FastAPI', 'Python', 'Google Gemini', 'LangChain', 'Pinecone / FAISS'],
      featured: true,
      github: 'https://github.com/sanjaysm25/AI-Document-Search-RAG-Chatbot-',
    },
    {
      title: 'Suicide Rate Prediction using Machine Learning',
      shortTitle: 'Suicide Rate Prediction',
      description: 'ML-based predictive system with ethical AI practices. Integrated demographic, socioeconomic, and mental health datasets to identify at-risk patterns and support early intervention.',
      technologies: ['Python', 'Scikit-learn', 'Machine Learning'],
      github: 'https://github.com/sanjaysm25/Suicide-Rate-Prediction-with-Machine-Learning-',
    },
    {
      title: 'AI-Driven Estimation of Medical Leaf Characteristics',
      shortTitle: 'Medical Leaf AI',
      description: 'Advanced AI to identify medicinal leaf characteristics with geolocation data and disease detection for agricultural and medical decision-making.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'VGG16', 'Random Forest'],
      period: 'Sep 2023 - Jan 2024',
      github: 'https://github.com/sanjaysm25/HARNESSING-AI-FOR-PRECISE-ESTIMATION-OF-MEDICINAL-LEAF-CHARACTERISTICS',
    },
    {
      title: 'Driver Drowsiness Detection System',
      shortTitle: 'Driver Drowsiness Detection',
      description: 'Real-time computer vision system detecting facial landmarks and applying fuzzy logic to trigger safety warnings for drowsy drivers.',
      technologies: ['MATLAB', 'Computer Vision', 'Fuzzy Logic'],
      period: 'Jun 2023',
      github: 'https://github.com/sanjaysm25/Sanjay-SM-Driver-Drowisness-Detection-',
    },
    {
      title: 'Exam Nerd — Online Examination Platform',
      shortTitle: 'Exam Nerd',
      description: 'Online examination system with auto-evaluation and student ranking for educators and students.',
      technologies: ['MySQL', 'PHP', 'HTML', 'CSS'],
      period: 'Sep 2023',
      github: 'https://github.com/sanjaysm25/EXAM-NERD',
    },
    {
      title: 'BookMyPool — Ride-Sharing Android Application',
      shortTitle: 'BookMyPool',
      description: 'Android ride-sharing app matching commuters in the same direction to reduce carbon footprint.',
      technologies: ['Android Studio', 'Java'],
      period: 'Jan - Jun 2023',
      github: 'https://github.com/sanjaysm25/BooKMyPool',
    },
  ]

  return (
    <section id="projects" ref={ref} className="section-padding section-muted">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">Projects</span>
          <h2 className="section-heading">Key projects</h2>
          <p className="section-subheading">From RAG chatbots and ML models to full-stack platforms and mobile apps.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
              whileHover={{ y: -4 }}
              className={`accent-card p-6 md:p-7 group ${project.featured ? 'md:col-span-2 md:p-8 bg-gradient-to-br from-white to-lime-50/50 dark:from-gray-900 dark:to-lime-500/5' : ''}`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className={`font-bold text-gray-900 dark:text-white group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors ${project.featured ? 'text-2xl' : 'text-xl'}`}>
                  {project.shortTitle || project.title}
                </h3>
                {project.featured && (
                  <span className="flex-shrink-0 px-3 py-1 text-xs font-semibold rounded-full bg-lime-400 text-gray-900">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="pill-tag">{tech}</span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                  >
                    <FaGithub size={14} />
                    View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                  >
                    <FaExternalLinkAlt size={12} />
                    Live Demo
                  </a>
                )}
                {project.period && (
                  <span className="text-gray-400 text-xs ml-auto">{project.period}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
