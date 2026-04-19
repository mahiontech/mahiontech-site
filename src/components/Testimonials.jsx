import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  { name: 'John Doe', company: 'Tech Corp', text: 'Mahion Tech delivered an outstanding website that exceeded our expectations. Their team is professional and innovative.' },
  { name: 'Jane Smith', company: 'Startup Inc', text: 'The mobile app they built for us has been a game-changer. Highly recommend their services!' },
  { name: 'Mike Johnson', company: 'E-commerce Ltd', text: 'Excellent e-commerce platform with seamless integration. Our sales have increased significantly.' },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-slate-900 mb-12 text-glow-dark"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="max-w-2xl mx-auto text-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl text-slate-700 mb-4 italic">&quot; {testimonials[current].text} &quot;</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${index === current ? 'bg-blue-500' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials