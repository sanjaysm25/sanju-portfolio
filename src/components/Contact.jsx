import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

const CONTACT_EMAIL = 'itssanjaysm@gmail.com'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: CONTACT_EMAIL,
      link: `mailto:${CONTACT_EMAIL}`,
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 84319 42404',
      link: 'tel:+918431942404',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Bengaluru, Karnataka, India',
      link: null,
    },
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/sanjay-sm-484186271/',
      label: 'LinkedIn',
    },
    {
      icon: FaGithub,
      href: 'https://github.com/sanjaysm25',
      label: 'GitHub',
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio message from ${formData.name}`,
          _template: 'table',
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="section-padding section-surface">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="section-label">Contact</span>
          <h2 className="section-heading">Let's connect</h2>
          <p className="section-subheading mx-auto">
            Open to full-stack and AI engineering roles, collaborations, and interesting projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactInfo.map((info, index) => {
              const Wrapper = info.link ? 'a' : 'div'
              return (
                <Wrapper
                  key={index}
                  href={info.link || undefined}
                  className="accent-card p-5 flex items-center gap-4 group block"
                >
                  <div className="w-11 h-11 rounded-xl bg-lime-400/20 border border-lime-400/30 flex items-center justify-center group-hover:bg-lime-400/30 transition-colors">
                    <info.icon className="text-lime-700" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{info.label}</p>
                    <p className="text-gray-900 dark:text-white font-semibold">{info.value}</p>
                  </div>
                </Wrapper>
              )
            })}

            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full accent-card flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-lime-400 transition-all"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="accent-card p-6 md:p-8 space-y-5"
          >
            {status === 'success' && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-lime-50 border border-lime-200 text-lime-800 text-sm">
                <FaCheckCircle className="flex-shrink-0 mt-0.5" />
                <p>Message sent! I'll get back to you at the email you provided.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                <FaExclamationCircle className="flex-shrink-0 mt-0.5" />
                <p>
                  Something went wrong. Please email me directly at{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="underline font-medium">
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            )}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 bg-slate-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 bg-slate-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <FaPaperPlane size={14} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
