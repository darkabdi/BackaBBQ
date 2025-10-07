'use client'

import { useEffect, useRef } from 'react'

interface ParallaxSectionProps {
  image: string
  title?: string
  subtitle?: string
  height?: string // e.g. "80vh" or "100vh"
}

export default function Parallax({
  image,
  title,
  subtitle,
  height = '80vh',
}: ParallaxSectionProps) {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return
      const offset = window.scrollY * 0.2 // adjust for effect strength
      bgRef.current.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className="relative overflow-hidden"
      style={{ height }}
    >
      {/* Background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform transition-transform duration-75 ease-out"
      >
        <img
          src={image}
          alt={title || 'Parallax background'}
          className="w-full h-[120%] object-cover"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-5"></div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {title && (
          <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="max-w-xl text-lg md:text-xl text-gray-200 drop-shadow-md">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
