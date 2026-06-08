import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      name: 'Meta Front-End Developer',
      provider: 'Coursera',
      url: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
    },
    {
      name: 'Programming for Everybody: Getting Started with Python',
      provider: 'Coursera',
      url: 'https://www.coursera.org/learn/python',
    },
    {
      name: 'Supervised Machine Learning: Regression and Classification',
      provider: 'Coursera',
      url: 'https://www.coursera.org/learn/machine-learning',
    },
    {
      name: 'Principles of UX/UI Design',
      provider: 'Coursera',
      url: 'https://www.coursera.org/learn/principles-of-ux-ui-design',
    },
  ]

  return (
    <section id="certifications" ref={ref} className="section-padding section-muted">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">Certifications</span>
          <h2 className="section-heading">Continuous learning</h2>
          <p className="section-subheading">Professional certificates from Coursera in development, ML, and design.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              className="accent-card p-5 flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-lime-400/20 border border-lime-400/30 flex items-center justify-center flex-shrink-0 group-hover:bg-lime-400/30 transition-colors">
                <FaCertificate className="text-lime-700 dark:text-lime-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 dark:text-white text-sm leading-snug group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
                  {cert.name}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{cert.provider}</p>
              </div>
              <FaExternalLinkAlt className="text-gray-400 group-hover:text-lime-500 flex-shrink-0" size={12} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
