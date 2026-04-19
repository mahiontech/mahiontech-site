import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left mb-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Mahion Tech Solutions</h3>
            <p className="text-gray-300">Digital strategy, web apps, mobile development, and cloud solutions for ambitious businesses.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
            <p className="text-gray-300">Email: mahiontechsolutions@gmail.com</p>
            <p className="text-gray-300">Phone: +91 90528 84815</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
            <div className="space-y-2">
              <a href="/services" className="text-gray-300 hover:text-blue-400 transition duration-300 block">Services</a>
              <a href="/programs" className="text-gray-300 hover:text-blue-400 transition duration-300 block">Programs</a>
              <a href="/whychooseus" className="text-gray-300 hover:text-blue-400 transition duration-300 block">Why Choose Us</a>
              <a href="/contact" className="text-gray-300 hover:text-blue-400 transition duration-300 block">Contact</a>
            </div>
          </div>
        </div>
        <div className="text-center border-t border-gray-700 pt-6">
          <p className="text-gray-400">&copy; 2026 Mahion Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer