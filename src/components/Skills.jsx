import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBrain, FaCode, FaDatabase } from 'react-icons/fa'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      number: '01',
      title: 'Software Development',
      description: 'Building applications with Python and JavaScript, web technologies, and foundational MERN stack development.',
      icon: FaCode,
      technologies: ['Python', 'JavaScript', 'HTML', 'CSS', 'MERN Stack', 'VS Code', 'MATLAB'],
    },
    {
      number: '02',
      title: 'AI / Machine Learning',
      description: 'Developing intelligent systems with ML, deep learning, neural networks, NLP, TensorFlow, and PyTorch.',
      icon: FaBrain,
      technologies: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'TensorFlow', 'PyTorch', 'NLP'],
    },
    {
      number: '03',
      title: 'Databases & Soft Skills',
      description: 'Relational and NoSQL data solutions paired with teamwork, problem-solving, and analytical thinking.',
      icon: FaDatabase,
      technologies: ['SQL', 'MySQL', 'MongoDB', 'Problem-Solving', 'Analytical Thinking', 'Time Management'],
    },
  ]

  return (
    <section id="skills" ref={ref} className="section-padding section-muted">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">Skills</span>
          <h2 className="section-heading">What I bring to the table</h2>
          <p className="section-subheading">
            Full-stack development meets AI engineering — from web apps to intelligent systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -6 }}
              className="accent-card p-8 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-lime-100 rounded-bl-[4rem] -mr-4 -mt-4 opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 right-6 text-5xl font-bold text-gray-100 group-hover:text-lime-100 transition-colors">
                {category.number}
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-lime-400/20 border border-lime-400/30 flex items-center justify-center mb-5">
                  <category.icon className="text-lime-700 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="pill-tag">{tech}</span>
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
