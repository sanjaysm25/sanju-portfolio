import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaDownload, FaMoon, FaSun } from 'react-icons/fa'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../context/ThemeContext'
import { RESUME_URL, SECTIONS } from '../constants/site'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { toggleTheme, isDark } = useTheme()

  const sectionIds = useMemo(() => SECTIONS.map((section) => section.id), [])
  const activeSection = useActiveSection(sectionIds)

  const navItems = SECTIONS.filter((section) => section.id !== 'home')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinkClass = (sectionId) => {
    const isActive = activeSection === sectionId
    return `relative px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'text-gray-900 dark:text-lime-400'
        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
    }`
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-sm border-b border-gray-100 dark:border-gray-800'
          : isDark
            ? 'bg-gray-950/80 backdrop-blur-sm'
            : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#home')
            }}
            className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white hover:text-lime-600 dark:hover:text-lime-400 transition-colors flex-shrink-0"
          >
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt=""
              className="w-8 h-8 object-contain"
            />
            Sanjay S M
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(`#${item.id}`)
                }}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                className={navLinkClass(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-lime-400 rounded-full" />
                )}
              </motion.a>
            ))}

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaDownload size={12} />
              Resume
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              className="ml-1 p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('#contact')}
              className="ml-2 px-4 py-2 text-sm font-semibold rounded-full bg-gray-900 dark:bg-lime-500 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-lime-400 transition-colors"
            >
              Hire Me
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            <button
              type="button"
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {SECTIONS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(`#${item.id}`)
                  }}
                  className={`block px-4 py-3 rounded-xl font-medium ${
                    activeSection === item.id
                      ? 'bg-lime-50 dark:bg-lime-500/10 text-lime-700 dark:text-lime-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-900'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-900 rounded-xl font-medium"
              >
                <FaDownload size={14} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
