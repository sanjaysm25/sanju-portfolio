import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaDownload } from 'react-icons/fa'
import { RESUME_URL } from '../constants/site'

const CtaSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section ref={ref} className="section-padding bg-gray-900 dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient-bg opacity-20" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let's build something <span className="gradient-text-lime">intelligent</span> together
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Open to full-stack and AI engineering roles. Reach out for collaborations, internships, or freelance work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => scrollTo('contact')} className="btn-primary w-full sm:w-auto">
              <FaEnvelope size={14} />
              Start a Conversation
            </button>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <FaDownload size={14} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaSection
