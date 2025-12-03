import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const NameSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-100">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-9xl lg:text-[12rem] font-bold text-gray-900 leading-none"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            SANJAY
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-7xl md:text-9xl lg:text-[12rem] font-bold text-gray-900 leading-none"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            S M
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <p className="text-gray-600 text-lg md:text-xl tracking-widest">FULL STACK DEVELOPER • AI & ML ENGINEER</p>
        </motion.div>
      </div>
    </section>
  )
}

export default NameSection

