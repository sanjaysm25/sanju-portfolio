import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { RESUME_URL } from '../constants/site'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sanjay-sm-484186271/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/sanjaysm25', label: 'GitHub' },
    { icon: FaEnvelope, href: 'mailto:itssanjaysm@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-white font-semibold mb-1">Sanjay S M</p>
          <p className="text-sm">Full-stack Developer · AI &amp; ML Engineer</p>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-lime-400 hover:text-lime-300 mt-2 inline-block"
          >
            Download Resume
          </a>
          <p className="text-xs mt-2 text-gray-500">© {currentYear} All rights reserved.</p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-lime-400 hover:text-lime-400 transition-all"
              aria-label={social.label}
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
