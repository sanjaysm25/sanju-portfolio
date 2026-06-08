import { createContext, useContext, useLayoutEffect, useState } from 'react'

const ThemeContext = createContext(null)
const STORAGE_KEY = 'portfolio-theme'

function applyTheme(theme) {
  const root = document.documentElement
  const isDark = theme === 'dark'
  root.classList.toggle('dark', isDark)
  root.setAttribute('data-theme', theme)
  root.style.colorScheme = isDark ? 'dark' : 'light'
}

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useLayoutEffect(() => {
    applyTheme(theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
