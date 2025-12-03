import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="section-padding-compact relative min-h-screen flex items-center bg-gray-100">
      <div className="max-w-7xl mx-auto w-full px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Driving measurable growth and engagement through thoughtful design and engineering.
            </motion.h2>
            
            <div className="h-px w-full bg-gray-300 my-8"></div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">YEARS OF EXPERIENCE</p>
              <p className="text-6xl font-bold text-gray-900">1.5+</p>
            </motion.div>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              Enthusiastic AI & Machine Learning graduate with a strong background in data analysis, machine learning algorithms, and software development. Skilled in building intelligent systems and developing software solutions that enhance efficiency and innovation. Eager to join a forward-thinking team where I can apply my expertise in AI technologies and software engineering to create impactful, real-world applications. Passionate about leveraging cutting-edge AI to solve complex problems and drive advancements in technology.
            </motion.p>
            
            <div className="h-px w-full bg-gray-300 my-8 relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute left-1/4 w-3 h-3 rounded-full border-2 border-gray-900 bg-gray-100"
              ></motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">PROJECTS COMPLETED</p>
              <p className="text-6xl font-bold text-gray-900">25+</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
