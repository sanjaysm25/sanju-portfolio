import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const interests = [
    'Personal coding & open-source',
    'Gaming',
    'Manga & anime',
    'Tech volunteering',
  ]

  const stats = [
    { label: 'Years of Experience', value: '2+' },
    { label: 'Key Projects', value: '7+' },
    { label: 'Companies', value: '3' },
  ]

  return (
    <section id="about" ref={ref} className="section-padding section-surface">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">About</span>
          <h2 className="section-heading max-w-3xl">
            Building intelligent systems and robust software solutions.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              Enthusiastic Artificial Intelligence & Machine Learning graduate with a strong foundation in data analysis, machine learning algorithms, and software development. Adept at building intelligent systems and robust software solutions that drive efficiency and innovation.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Seeking to contribute expertise in AI technologies and software engineering within a forward-thinking organisation to deliver impactful, real-world applications.
            </p>

            <div className="mt-8">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Interests</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span key={index} className="pill-tag">{interest}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="stat-card group"
              >
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-4xl font-bold text-gray-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
