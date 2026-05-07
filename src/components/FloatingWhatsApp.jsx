import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
      {/* Pulse Effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></div>

      <motion.a
        href="https://wa.me/919052884815"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center bg-[#25D366] text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 active:scale-90"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-3xl sm:text-4xl" />
      </motion.a>
    </div>
  )
}

export default FloatingWhatsApp
