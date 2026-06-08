import { lazy, Suspense } from 'react'
import { useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollToTop from './components/ScrollToTop'
import Analytics from './components/Analytics'
import Footer from './components/Footer'

const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Education = lazy(() => import('./components/Education'))
const Certifications = lazy(() => import('./components/Certifications'))
const Contact = lazy(() => import('./components/Contact'))
const CtaSection = lazy(() => import('./components/CtaSection'))

function App() {
  const { isDark } = useTheme()

  return (
    <div className={`${isDark ? 'dark' : ''} min-h-screen bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 relative transition-colors duration-300`}>
      <a href="#home" className="skip-link">Skip to content</a>
      <Analytics />
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
        <CtaSection />
      </Suspense>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
