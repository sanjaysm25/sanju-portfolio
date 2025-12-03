import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'UPRIO',
      location: 'Bengaluru, India • Onsite',
      period: 'Jul 2025 - Present',
      description: 'Contributing as junior AI engineer, engaged in initiatives related to artificial intelligence. Developed and implemented new software applications, enhancing company productivity and client satisfaction.',
    },
    {
      title: 'Software Developer Level 1',
      company: 'AT&T',
      location: 'Bengaluru, India • Onsite',
      period: 'Jun 2024 - Jun 2025',
      description: 'Joined the development team and actively contributed to building and improving applications. Worked on key projects while continuously gaining technical knowledge and hands-on experience.',
    },
    {
      title: 'Trainee',
      company: 'Otomeyt | An Apar Entity',
      location: 'Bengaluru, India • Onsite',
      period: 'Sep 2023',
      description: 'Joined Otomeyt, an AI-based company, as a Trainee within the Development Team. Actively participated in company projects, including hands-on assignments. Gained exposure to various programming languages and acquired valuable corporate world experience.',
    },
  ]

  return (
    <section id="experience" ref={ref} className="section-padding-compact relative min-h-screen flex items-center bg-gray-100">
      <div className="max-w-7xl mx-auto w-full px-8 relative">
        {/* Curved Line on Left */}
        <motion.div
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute left-0 top-0 bottom-0 w-0.5 bg-lime-500 hidden md:block"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)',
          }}
        />

        {/* Vertical Timeline Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute right-1/3 top-0 bottom-0 w-0.5 bg-lime-500 hidden md:block"
          style={{ transformOrigin: 'top' }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-black border-2 border-lime-500"
          />
        </motion.div>

        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              className="relative"
            >
              <div className="max-w-2xl">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className="text-5xl md:text-6xl font-bold text-gray-900 mb-2"
                >
                  {exp.company}
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                  className="text-xl text-gray-600 mb-6"
                >
                  {exp.title}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="text-gray-700 leading-relaxed mb-4"
                >
                  {exp.description}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                  className="text-gray-500 text-sm"
                >
                  {exp.period}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
