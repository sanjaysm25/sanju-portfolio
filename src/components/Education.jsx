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
      degree: 'BE – Artificial Intelligence & Machine Learning Engineering',
      institution: 'Mangalore Institute of Technology & Engineering',
      location: 'Moodbidri',
      period: '2020 - 2024',
      grade: 'CGPA: 8.2',
    },
    {
      degree: 'Senior Secondary (Pre-University)',
      institution: 'RNS PU College',
      location: 'Bengaluru, Karnataka',
      period: '2018 - 2020',
      grade: '79.68%',
    },
    {
      degree: 'Secondary School – CBSE',
      institution: 'Vishwa Venkateshwara International School',
      location: 'Bengaluru',
      period: '2006 - 2018',
      grade: '88%',
    },
  ]

  return (
    <section id="education" ref={ref} className="section-padding section-surface">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">Education</span>
          <h2 className="section-heading">Academic background</h2>
        </motion.div>

        <div className="grid gap-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="accent-card p-6 flex items-start gap-5 group"
            >
              <div className="p-3 rounded-xl bg-lime-400/20 border border-lime-400/30 group-hover:bg-lime-400/30 transition-colors flex-shrink-0">
                <FaGraduationCap className="text-lime-700 text-xl" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-lime-600 font-semibold mt-1">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{edu.location}</p>
                  </div>
                  <div className="flex items-center gap-3 text-sm flex-shrink-0">
                    <span className="text-gray-500">{edu.period}</span>
                    <span className="px-3 py-1 rounded-full bg-gray-100 font-semibold text-gray-800">{edu.grade}</span>
                  </div>
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
