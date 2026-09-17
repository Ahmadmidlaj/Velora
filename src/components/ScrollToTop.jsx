import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateScrollState = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = scrollableHeight > 0
        ? Math.min((window.scrollY / scrollableHeight) * 100, 100)
        : 0

      setProgress(nextProgress)
      setIsVisible(window.scrollY > 480)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)

    return () => {
      window.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 12 }}
          transition={{ type: 'spring', stiffness: 360, damping: 24 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group fixed bottom-4 left-4 z-40 grid h-12 w-12 place-items-center rounded-full border border-gold-300/80 bg-ivory/95 text-obsidian shadow-luxury backdrop-blur-md transition hover:-translate-y-1 hover:border-gold-500 hover:bg-gold-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 sm:bottom-7 sm:left-7"
          aria-label="Back to top"
          title="Back to top"
        >
          <svg className="absolute inset-1.5 h-9 w-9 -rotate-90" viewBox="0 0 36 36" aria-hidden="true">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="currentColor" strokeOpacity=".12" strokeWidth="1.5" />
            <circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              pathLength="100"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
              strokeDasharray="100"
              strokeDashoffset={100 - progress}
              className="text-gold-600 transition-[stroke-dashoffset] duration-150"
            />
          </svg>
          <ArrowUp size={17} strokeWidth={1.8} className="relative transition-transform duration-300 group-hover:-translate-y-0.5" />
          <span className="sr-only">Back to top</span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
