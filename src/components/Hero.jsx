import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const Hero = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sanjay-sm-484186271/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/sanjaysm25', label: 'GitHub' },
    { icon: FaEnvelope, href: 'mailto:itssanjaysm@gmail.com', label: 'Email' },
    { icon: FaWhatsapp, href: 'https://wa.me/918431942404', label: 'WhatsApp' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-100">
      {/* Logo Symbol - Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-8 left-8 z-40"
      >
        <img 
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Sanjay S M Logo" 
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
        />
      </motion.div>

      {/* Animated Blob Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '60% 40% 30% 70% / 60% 30% 70% 40%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
          style={{
            background: 'linear-gradient(45deg, #dbeafe, #e0e7ff, #f3e8ff, #fce7f3, #e0f2fe)',
            filter: 'blur(80px)',
            opacity: 0.6,
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      {/* Left Sidebar - Social Links */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6"
      >
        <div className="h-24 w-px bg-gray-400"></div>
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-700 hover:text-gray-900 transition-colors"
            aria-label={social.label}
          >
            <social.icon size={20} />
          </motion.a>
        ))}
        <div className="h-24 w-px bg-gray-400"></div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center relative"
        >
          {/* Blob Container with Text */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative inline-block mb-8"
          >
            <motion.div
              animate={{
                borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '60% 40% 30% 70% / 60% 30% 70% 40%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative bg-white/80 backdrop-blur-xl border border-gray-200 px-12 py-8 rounded-[40%] shadow-2xl"
              style={{
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-gray-900 text-lg font-medium mb-4"
              >
                Hi! I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2"
              >
                Sanjay S M
              </motion.h1>
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4"
          >
            Full-stack Developer
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-12"
          >
            AI & ML Engineer
          </motion.h3>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gray-600 text-sm tracking-wider cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          scroll down
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
