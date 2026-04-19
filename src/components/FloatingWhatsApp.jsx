import React from 'react'
import { motion } from 'framer-motion'

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/919052884815"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50 text-lg sm:text-2xl active:scale-90"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      💬
    </motion.a>
  )
}

export default FloatingWhatsApp