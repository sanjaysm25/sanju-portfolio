import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaMousePointer, FaChevronDown } from 'react-icons/fa'

const PortfolioIntro = () => {
  const [showIntro, setShowIntro] = useState(false)

  useEffect(() => {
    // Check if user has seen the intro before
    const hasSeenIntro = localStorage.getItem('portfolio-intro-seen')
    if (!hasSeenIntro) {
      // Show intro after a short delay
      setTimeout(() => {
        setShowIntro(true)
      }, 1000)
    }
  }, [])

  const handleClose = () => {
    setShowIntro(false)
    localStorage.setItem('portfolio-intro-seen', 'true')
  }

  return (
    <AnimatePresence>
      {showIntro && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            onClick={handleClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-md mx-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <FaTimes size={20} />
                </button>
                <h2 className="text-2xl font-bold mb-2">Welcome! 👋</h2>
                <p className="text-blue-100">Discover a new feature</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center border-2 border-blue-300">
                        <FaMousePointer className="text-blue-600" size={20} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Portfolio Switcher</h3>
                      <p className="text-sm text-gray-600">
                        Click the button in the top-left corner to switch between different portfolio versions!
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs mt-0.5">
                        1
                      </div>
                      <p>Look for the <span className="font-semibold text-blue-600">"JavaScript"</span> button in the navbar (top-left)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs mt-0.5">
                        2
                      </div>
                      <p>Click it to see available portfolios: <span className="font-semibold">Python</span>, <span className="font-semibold">JavaScript</span>, <span className="font-semibold">HTML/CSS</span>, <span className="font-semibold">Java</span></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs mt-0.5">
                        3
                      </div>
                      <p>Select any portfolio to explore different implementations!</p>
                    </div>
                  </div>
                </div>

                {/* Visual Indicator */}
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <FaChevronDown className="text-blue-600 animate-bounce" />
                    <span className="font-medium">The switcher has a subtle animation to catch your attention!</span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={handleClose}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Got it! Let's explore
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default PortfolioIntro

