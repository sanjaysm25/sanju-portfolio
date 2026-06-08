import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? 'home')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}
