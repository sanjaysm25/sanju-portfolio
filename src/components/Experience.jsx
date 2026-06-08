import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'AI Engineer',
      company: 'UPRIO',
      location: 'Bengaluru, India',
      period: 'Jul 2025 - Present',
      description: 'Contribute as a junior AI engineer engaged in AI initiatives, driving product innovation. Developed and implemented software applications, enhancing company productivity and client satisfaction.',
      current: true,
    },
    {
      title: 'AI Developer Level 1',
      company: 'AT&T',
      location: 'Bengaluru, India',
      period: 'Jun 2024 - Jun 2025',
      description: 'Actively contributed to building and improving enterprise-grade applications. Collaborated on key projects while continuously expanding technical knowledge and hands-on engineering experience.',
    },
    {
      title: 'Trainee – Development Team',
      company: 'Otomeyt | An Apar Entity',
      location: 'Singapore-based AI company',
      period: 'Sep 2023',
      description: 'Contributed to active development projects at a Singapore-based AI company. Gained cross-functional exposure to multiple programming languages and corporate engineering practices.',
    },
  ]

  return (
    <section id="experience" ref={ref} className="section-padding section-surface">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">Experience</span>
          <h2 className="section-heading">Where I've worked</h2>
          <p className="section-subheading">Growing from trainee to AI engineer across product and enterprise teams.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-lime-400 via-gray-200 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.12 }}
                className="relative sm:pl-16 md:pl-20"
              >
                <div className="absolute left-2.5 md:left-6 top-8 w-3 h-3 rounded-full bg-lime-400 border-4 border-white shadow hidden sm:block" />

                <div className="accent-card p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-lime-100 text-lime-700 border border-lime-200">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-lime-600 font-semibold">{exp.title}</p>
                      <p className="text-gray-500 text-sm mt-1">{exp.location}</p>
                    </div>
                    <span className="text-sm text-gray-500 font-medium whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
