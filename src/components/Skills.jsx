import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiTensorflow,
  SiPytorch,
  SiVisualstudiocode,
} from 'react-icons/si'
import { FaBrain, FaCode, FaCalculator, FaDatabase } from 'react-icons/fa'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      number: '01',
      title: 'Full Stack Development',
      description: 'Building scalable and high-performance web applications using React, Node.js, and Python, with robust backend architectures, secure RESTful APIs, and clean code practices.',
      icon: FaCode,
      technologies: ['Python', 'JavaScript', 'React', 'Node.js'],
    },
    {
      number: '02',
      title: 'AI/ML Engineering',
      description: 'Developing intelligent systems with TensorFlow, PyTorch, and advanced machine learning algorithms. Creating AI-driven products with neural networks and deep learning.',
      icon: FaBrain,
      technologies: ['TensorFlow', 'PyTorch', 'Machine Learning', 'Deep Learning'],
    },
    {
      number: '03',
      title: 'Database Systems',
      description: 'Designing and managing database architectures with MySQL and MongoDB. Ensuring data integrity, performance optimization, and scalable database solutions.',
      icon: FaDatabase,
      technologies: ['MySQL', 'MongoDB', 'SQL'],
    },
  ]

  return (
    <section id="skills" ref={ref} className="section-padding-compact relative min-h-screen flex items-center bg-gray-100">
      <div className="max-w-7xl mx-auto w-full px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 relative"
          >
            Transforming ideas into exceptional digital experiences through expertise and innovation
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute top-1/2 left-0 w-full h-3 bg-lime-400 -z-10"
              style={{ transform: 'skewY(-1deg)' }}
            />
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-50 border border-gray-200 p-8 rounded-xl hover:border-lime-400 transition-all relative group"
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-gray-200">{category.number}</div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full border-2 border-lime-400 bg-white flex items-center justify-center mb-6 group-hover:bg-lime-50 transition-colors">
                  <category.icon className="text-gray-900 text-2xl" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{category.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white border border-gray-200 rounded text-xs text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
