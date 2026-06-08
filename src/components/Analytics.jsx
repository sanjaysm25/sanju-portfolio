import { useEffect } from 'react'

const Analytics = () => {
  const analyticsId = import.meta.env.VITE_ANALYTICS_ID

  useEffect(() => {
    if (!analyticsId || typeof window === 'undefined') return undefined

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag(...args) {
      window.dataLayer.push(args)
    }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', analyticsId)

    return () => {
      document.head.removeChild(script)
      delete window.gtag
    }
  }, [analyticsId])

  return null
}

export default Analytics
