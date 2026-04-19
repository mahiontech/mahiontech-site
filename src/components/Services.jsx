import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaGlobe, FaAndroid, FaApple, FaCloud, FaPalette,
  FaShoppingCart, FaLink, FaTools, FaSearch,
  FaPenNib, FaVideo, FaLightbulb, FaPlus, FaMinus
} from 'react-icons/fa'

const services = [
  {
    name: 'Web Development',
    icon: FaGlobe,
    desc: 'We build fast, responsive, and SEO-friendly websites using modern technologies like React, Node.js.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
  },
  {
    name: 'Android App Development',
    icon: FaAndroid,
    desc: 'Develop high-performance Android applications with modern UI and backend integration.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c'
  },
  {
    name: 'iOS App Development',
    icon: FaApple,
    desc: 'Build secure and scalable iOS apps with premium UI and smooth performance.',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8'
  },
  {
    name: 'Cloud Hosting & Deployment',
    icon: FaCloud,
    desc: 'Deploy scalable applications on AWS, Azure with high availability and security.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
  },
  {
    name: 'UI/UX Design',
    icon: FaPalette,
    desc: 'Design intuitive and visually appealing user interfaces.',
    img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698'
  },
  {
    name: 'E-Commerce Development',
    icon: FaShoppingCart,
    desc: 'Create secure online stores with payment integration.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d'
  },
  {
    name: 'Logo Design',
    icon: FaLightbulb,
    desc: 'Craft unique and professional logos for strong brand identity.',
    img: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960'
  },
  {
    name: 'Content Creation',
    icon: FaPenNib,
    desc: 'Create engaging content to boost your brand presence.',
    img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a'
  },
  {
    name: 'Video Creation',
    icon: FaVideo,
    desc: 'Create professional promotional and marketing videos.',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d'
  },
  {
    name: 'API Development',
    icon: FaLink,
    desc: 'Develop secure APIs for seamless system integration.',
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c'
  },
  {
    name: 'Maintenance & Support',
    icon: FaTools,
    desc: 'Provide ongoing support to ensure smooth performance.',
    img: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e'
  },
  {
    name: 'SEO Optimization',
    icon: FaSearch,
    desc: 'Improve your website ranking with advanced SEO strategies.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
  }
]

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="services" className="relative py-20 bg-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

      {/* Glow */}
      <div className="absolute w-80 h-80 bg-purple-200 opacity-30 blur-3xl top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-blue-200 opacity-30 blur-3xl bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

        {/* Heading */}
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
          Our <span className="text-cyan-600">Services</span>
        </motion.h2>

        <motion.p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide complete digital solutions to grow your business.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md 
                         hover:shadow-xl hover:shadow-cyan-200 transition 
                         cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >

                <img
                  src={service.img}
                  alt={service.name}
                  loading="lazy"
                  className="w-full h-44 object-cover"
                />

                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <service.icon className="text-2xl text-cyan-600" />
                      <h3 className="font-semibold text-slate-900">
                        {service.name}
                      </h3>
                    </div>

                    <button
                      onClick={() => toggleCard(index)}
                      className="text-cyan-600 text-lg"
                    >
                      {openIndex === index ? <FaMinus /> : <FaPlus />}
                    </button>
                  </div>

                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-gray-600 text-sm mt-4"
                    >
                      {service.desc}
                    </motion.p>
                  )}

                </div>
              </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Services