'use client'

import { useEffect, useRef } from 'react'

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08 }
    )

    const el = ref.current
    if (!el) return

    el.querySelectorAll('.reveal').forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return <div ref={ref}>{children}</div>
}
