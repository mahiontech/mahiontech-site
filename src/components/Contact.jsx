import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [feedback, setFeedback] = useState({ type: '', message: '' })

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Phone validation (Indian format - 10 digits)
  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/
    return phoneRegex.test(phone.replace(/\D/g, ''))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}

    // Validate email
    if (!form.email) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    // Validate phone if provided
    if (form.phone && !validatePhone(form.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number'
    }

    // Validate name
    if (!form.name.trim()) {
      newErrors.name = 'Name is required'
    }

    // Validate message
    if (!form.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)

    // If there are errors, stop
    if (Object.keys(newErrors).length > 0) {
      return
    }

    setLoading(true)

    try {
      const response = await fetch('https://formspree.io/f/maqaokdg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      if (response.ok) {
        setFeedback({ type: 'success', message: 'Message sent successfully! We\'ll contact you soon 🚀' })
        setForm({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        setErrors({})
        setTimeout(() => setFeedback({ type: '', message: '' }), 5000)
      } else {
        setFeedback({ type: 'error', message: 'Error sending message. Please try again.' })
      }
    } catch (error) {
      setFeedback({ type: 'error', message: 'Error sending message. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-white">

      {/* 🔥 SAME BACKGROUND AS WHY CHOOSE */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">

        {/* Heading */}
        <motion.h2
          className="text-5xl font-bold text-center mb-3 text-slate-900"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
        </motion.h2>

        {/* Subtitle */}
        <p className="text-center text-gray-600 mb-12 text-lg">
          Have a project in mind? Let’s build something amazing 🚀
        </p>

        {/* Contact Methods Grid */}
        <motion.div
          className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md p-5 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >

          <form onSubmit={handleSubmit}>

            {feedback.message && (
              <div className={`p-4 rounded-lg mb-6 text-sm font-medium ${
                feedback.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {feedback.message}
              </div>
            )}

            <div className="mb-5">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full p-4 rounded-lg border outline-none transition ${
                  errors.name
                    ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                    : 'border-gray-300 focus:ring-2 focus:ring-blue-400'
                }`}
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value })
                  if (errors.name) setErrors({ ...errors, name: '' })
                }}
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="mb-5">
              <input
                type="email"
                placeholder="Your Email"
                className={`w-full p-4 rounded-lg border outline-none transition ${
                  errors.email
                    ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                    : 'border-gray-300 focus:ring-2 focus:ring-blue-400'
                }`}
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value })
                  if (errors.email) setErrors({ ...errors, email: '' })
                }}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-5">
              <input
                type="tel"
                placeholder="Phone Number (10 digits)"
                maxLength="10"
                className={`w-full p-4 rounded-lg border outline-none transition ${
                  errors.phone
                    ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                    : 'border-gray-300 focus:ring-2 focus:ring-blue-400'
                }`}
                value={form.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 10)
                  setForm({ ...form, phone: value })
                  if (errors.phone) setErrors({ ...errors, phone: '' })
                }}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div className="mb-6">
              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className={`w-full p-4 rounded-lg border outline-none transition ${
                  errors.message
                    ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                    : 'border-gray-300 focus:ring-2 focus:ring-blue-400'
                }`}
                value={form.message}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value })
                  if (errors.message) setErrors({ ...errors, message: '' })
                }}
                required
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:scale-105 active:scale-95 transition duration-300 disabled:opacity-50 touch-manipulation"
            >
              {loading ? 'Sending your request...' : 'Get Free Consultation'}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              We will contact you within 24 hours 📞
            </p>

          </form>

        </motion.div>
      </div>
    </section>
  )
}

export default Contact