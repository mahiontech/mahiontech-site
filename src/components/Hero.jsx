import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  // Memoize particles to prevent re-calculation on every render
  const particles = useMemo(() => {
    const colors = ['bg-blue-400', 'bg-purple-400', 'bg-pink-400', 'bg-cyan-400']
    const sizes = ['w-1 h-1', 'w-2 h-2', 'w-1.5 h-1.5']
    return [...Array(40)].map((_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: sizes[Math.floor(Math.random() * sizes.length)],
      x: Math.random() * 100, // percentage for better responsiveness
      y: Math.random() * 100, // percentage
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 5
    }))
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden pt-20 pb-10 md:pt-0">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={`absolute ${p.color} ${p.size} rounded-full opacity-40`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, 1.2, 0],
              y: [0, -40, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 text-glow-dark leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transforming Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Powerful Digital Products</span>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 mb-8 max-w-2xl mx-auto px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Mahion Tech Solutions builds cutting-edge websites, mobile apps, and digital platforms that drive business growth and innovation.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-3 rounded-full font-semibold btn-glow transform hover:scale-105 active:scale-95 transition text-sm sm:text-base whitespace-nowrap">
            Get Started
          </a>
          <a href="/services" className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition duration-300 hover:shadow-lg hover:shadow-blue-600/30 transform hover:scale-105 active:scale-95 text-sm sm:text-base whitespace-nowrap">
            View Our Services
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
