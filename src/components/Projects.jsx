import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBrain, FaCode } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Harnessing AI for Precise Estimation of Medical Leaf Characteristics',
      shortTitle: 'Medical Leaf AI',
      description: 'Utilizing advanced AI techniques like VGG16 and Random Forest to precisely identify and analyze medical leaf characteristics, merging botany, healthcare, and AI. Seamlessly integrates geolocation data and disease detection for informed decision-making in both agricultural and medical contexts.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'VGG16', 'Random Forest'],
      period: 'Sep 2023 - Jan 2024',
    },
    {
      title: 'Driver Drowsiness Detection',
      description: 'A computer vision-based system that detects faces, eyes, nose, and mouth in real-time images. By analyzing the eye regions and applying fuzzy logic, the system determines if the driver is drowsy. If drowsiness is detected, appropriate warnings and alerts are triggered to ensure driver safety.',
      technologies: ['MATLAB'],
      period: 'Jan 2023 - June 2023',
    },
    {
      title: 'BookMyPool Application',
      description: 'An Android application that helps people share rides and reduce their carbon footprint by connecting users who are traveling in the same direction.',
      technologies: ['Android Studio', 'Java'],
      period: 'Jan 2023 - June 2023',
    },
    {
      title: 'Exam Nerd - Online Exam System',
      description: 'A comprehensive online examination system allowing teachers to create quizzes and students to attend them. Features a ranking system that arranges students based on their performance. Very useful for both students and teachers.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
      period: 'Sep 2023',
    },
  ]

  return (
    <section id="projects" ref={ref} className="section-padding-compact relative min-h-screen flex items-center bg-gray-100">
      <div className="max-w-7xl mx-auto w-full px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Featured Projects
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-lime-400 transition-all group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-lime-600 transition-colors">
                {project.shortTitle || project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white border border-gray-200 rounded text-xs text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-xs">{project.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
