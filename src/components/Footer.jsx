import React from 'react'
import msmeLogo from '../assets/msme.png'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-8 border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">

          {/* Column 1: Company Profile */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mahion Tech Solutions
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Empowering businesses with cutting-edge digital strategy, web applications,
              and innovative mobile solutions.
            </p>
          </div>

          {/* Column 2: Contact Details */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold border-l-4 border-blue-500 pl-3 leading-none py-1">Contact</h3>
            <div className="space-y-1 text-gray-400 text-xs">
              <p className="hover:text-blue-400 transition-colors cursor-default">mahiontechsolutions@gmail.com</p>
              <p className="hover:text-blue-400 transition-colors cursor-default">+91 90528 84815</p>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold border-l-4 border-purple-500 pl-3 leading-none py-1">Quick Links</h3>
            <ul className="space-y-1 text-xs text-gray-400">
              <li><a href="/services" className="hover:text-white transition-all hover:translate-x-1 inline-block">Services</a></li>
              <li><a href="/internships" className="hover:text-white transition-all hover:translate-x-1 inline-block">Internships</a></li>
              <li><a href="/whychooseus" className="hover:text-white transition-all hover:translate-x-1 inline-block">Why Choose Us</a></li>
              <li><a href="/contact" className="hover:text-white transition-all hover:translate-x-1 inline-block">Contact</a></li>
            </ul>
          </div>

          {/* Column 4: MSME Certification Section */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold border-l-4 border-emerald-500 pl-3 leading-none py-1">
              MSME Certified
            </h3>

            <div className="relative group cursor-pointer w-fit">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white/90 p-1.5 rounded-lg shadow-sm transition-all duration-300 group-hover:bg-white max-w-[120px]">
                <img
                  src={msmeLogo}
                  alt="MSME Logo"
                  className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-[9px] text-gray-400 uppercase tracking-tighter font-bold leading-tight">
              Micro, Small & Medium Enterprises <br/> Govt. of India
            </p>
          </div>

        </div>

        {/* Bottom Bar - Centered Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-800/50 flex justify-center items-center">
          <p className="text-gray-500 text-xs font-medium tracking-wide">
            &copy; 2026 Mahion Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
