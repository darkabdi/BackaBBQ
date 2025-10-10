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
  className="relative overflow-hidden h-[80vh] sm:h-[90vh] flex items-center justify-center"
>
  {/* Background image */}
  <div
    ref={bgRef}
    className="absolute inset-0 will-change-transform transition-transform duration-100 ease-out"
  >
    <img
      src={image}
      alt={title || 'Parallax background'}
      className="w-full h-full object-cover object-center"
    />
  </div>

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

  {/* Overlay content */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
    {title && (
      <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
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
