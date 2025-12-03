import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: 'BE – AI & ML Engineering',
      institution: 'Mangalore Institute of Technology and Engineering',
      location: 'Moodbidri – 574225',
      period: '2020 - 2024',
      grade: 'CGPA: 8.2',
    },
    {
      degree: 'Senior Secondary (PU)',
      institution: 'RNS PU College',
      location: 'Bengaluru, Karnataka 560098',
      period: '2018 - 2020',
      grade: '79.68%',
    },
    {
      degree: 'Secondary School (CBSE)',
      institution: 'Vishwa Venkateshwara international school',
      location: 'Bengaluru, Karnataka 560060',
      period: '2006 - 2018',
      grade: '88%',
    },
  ]

  return (
    <section id="education" ref={ref} className="section-padding-compact relative min-h-screen flex items-center bg-gray-100">
      <div className="max-w-7xl mx-auto w-full px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Education
          </motion.h2>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              whileHover={{ x: 10 }}
              className="flex items-start gap-6 p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-lime-400 transition-all group"
            >
              <div className="p-3 bg-lime-400 rounded-lg group-hover:scale-110 transition-transform">
                <FaGraduationCap className="text-gray-900 text-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                <p className="text-lime-600 font-semibold mb-2">{edu.institution}</p>
                <p className="text-gray-600 text-sm mb-2">{edu.location}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-500">{edu.period}</span>
                  <span className="text-gray-700 font-semibold">{edu.grade}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
