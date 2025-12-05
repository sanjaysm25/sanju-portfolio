import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaCode, FaHtml5, FaJava } from 'react-icons/fa'
import { SiPython, SiJavascript } from 'react-icons/si'

const PortfolioSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const portfolios = [
    { 
      name: 'Python', 
      icon: SiPython, 
      url: import.meta.env.VITE_PYTHON_PORTFOLIO_URL || 'http://localhost:5000',
      color: 'text-blue-600'
    },
    { 
      name: 'JavaScript', 
      icon: SiJavascript, 
      url: '/',
      color: 'text-yellow-500'
    },
    { 
      name: 'HTML/CSS', 
      icon: FaHtml5, 
      url: '/',
      color: 'text-orange-500'
    },
    { 
      name: 'Java', 
      icon: FaJava, 
      url: '/',
      color: 'text-red-600'
    },
  ]

  // Determine current portfolio based on URL
  const getCurrentPortfolio = () => {
    if (typeof window === 'undefined') return 1 // Default to JavaScript during SSR
    const path = window.location.pathname
    if (path.includes('python')) return 0
    if (path.includes('html') || path.includes('css')) return 2
    if (path.includes('java')) return 3
    return 1 // Default to JavaScript
  }

  const [currentIndex, setCurrentIndex] = useState(() => getCurrentPortfolio())
  const currentPortfolio = portfolios[currentIndex] || portfolios[1]

  useEffect(() => {
    // Update current portfolio after mount
    setCurrentIndex(getCurrentPortfolio())
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (typeof document !== 'undefined') {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handlePortfolioChange = (portfolio) => {
    if (portfolio.url && typeof window !== 'undefined') {
      if (portfolio.url.startsWith('http')) {
        window.location.href = portfolio.url
      } else {
        window.location.pathname = portfolio.url
      }
    }
    setIsOpen(false)
  }

  if (!currentPortfolio || !currentPortfolio.icon) {
    return null
  }

  const CurrentIcon = currentPortfolio.icon

  return (
    <div className="relative z-50 group" ref={dropdownRef}>
      {/* Tooltip Hint */}
      <div className="absolute top-full left-0 mt-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg z-[100]">
        Click to switch portfolio
        <div className="absolute bottom-full left-4 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setIsOpen(!isOpen)
        }}
        className="relative flex items-center gap-2 px-4 py-2.5 bg-white backdrop-blur-xl border-2 border-gray-300 rounded-lg shadow-xl hover:shadow-2xl hover:border-blue-400 transition-all duration-300 text-gray-800 font-semibold cursor-pointer pointer-events-auto min-w-[140px] justify-between animate-pulse-subtle"
        type="button"
        title="Click to switch between portfolios"
      >
        <div className="flex items-center gap-2">
          <CurrentIcon className={`${currentPortfolio.color} text-xl`} />
          <span className="font-semibold text-sm sm:text-base">{currentPortfolio.name}</span>
        </div>
        <motion.div
          animate={{ 
            rotate: isOpen ? 180 : 0,
            y: [0, -2, 0]
          }}
          transition={{ 
            rotate: { duration: 0.3 },
            y: { 
              duration: 1.5, 
              repeat: Infinity, 
              repeatDelay: 2,
              ease: "easeInOut"
            }
          }}
        >
          <FaChevronDown className="text-gray-500" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-0 w-48 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-lg shadow-2xl overflow-hidden z-[100] pointer-events-auto"
          >
            {portfolios.map((portfolio, index) => {
              const PortfolioIcon = portfolio.icon
              return (
                <motion.button
                  key={portfolio.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', x: 5 }}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handlePortfolioChange(portfolio)
                  }}
                  type="button"
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors cursor-pointer ${
                    currentPortfolio.name === portfolio.name 
                      ? 'bg-blue-50 border-l-4 border-blue-500' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <PortfolioIcon className={`${portfolio.color} text-lg`} />
                  <span className="font-medium text-gray-700">{portfolio.name}</span>
                </motion.button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PortfolioSwitcher

