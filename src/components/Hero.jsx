import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaArrowDown, FaDownload } from 'react-icons/fa'
import { RESUME_URL, TECH_STACK } from '../constants/site'

const Hero = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sanjay-sm-484186271/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/sanjaysm25', label: 'GitHub' },
    { icon: FaEnvelope, href: 'mailto:itssanjaysm@gmail.com', label: 'Email' },
    { icon: FaWhatsapp, href: 'https://wa.me/918431942404', label: 'WhatsApp' },
  ]

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-gray-950 hero-gradient-bg">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-8 left-8 z-40"
      >
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Sanjay S M Logo"
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain drop-shadow-sm"
        />
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-lime-200/30 dark:bg-lime-500/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-200/25 dark:bg-indigo-500/10 blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute left-6 lg:left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4"
      >
        <div className="h-16 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-lime-400 hover:bg-lime-50 dark:hover:bg-gray-800 shadow-sm transition-all"
            aria-label={social.label}
          >
            <social.icon size={16} />
          </motion.a>
        ))}
        <div className="h-16 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm text-sm text-gray-600 dark:text-gray-300 mb-8"
          >
            <FaMapMarkerAlt className="text-lime-500" size={12} />
            Bengaluru, India
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-500 dark:text-gray-400 text-lg font-medium mb-3 tracking-wide"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Sanjay <span className="gradient-text-lime">S M</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="space-y-2 mb-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Full-stack Developer
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 dark:text-gray-500">
              AI &amp; ML Engineer
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Building intelligent systems and scalable applications — from RAG chatbots and ML models to full-stack web products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
          >
            {TECH_STACK.map((tech) => (
              <span key={tech} className="pill-tag">{tech}</span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button type="button" onClick={() => scrollTo('projects')} className="btn-primary w-full sm:w-auto">
              View Projects
            </button>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              <FaDownload size={14} />
              Download Resume
            </a>
            <button type="button" onClick={() => scrollTo('contact')} className="btn-secondary w-full sm:w-auto">
              Get in Touch
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex items-center justify-center gap-3 lg:hidden"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-lime-400 transition-all"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors cursor-pointer group"
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Explore</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <FaArrowDown size={14} className="group-hover:text-lime-500 transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  )
}

export default Hero
