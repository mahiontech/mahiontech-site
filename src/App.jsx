import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import FloatingWhatsApp from './components/FloatingWhatsApp'

// This ensures that when any link is clicked, the scroll happens immediately without UI sticking.
import Hero from './components/Hero'
import Services from './components/Services'
import Programs from './components/Programs'
import Portfolio from './components/Portfolio'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <Programs />
      <Process />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

function ScrollToSection() {
  const { pathname, key } = useLocation()

  React.useEffect(() => {
    const path = pathname.split('/').pop()

    if (!path || path === '' || path === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Since components are no longer lazy-loaded, they exist in the DOM immediately.
    // We use requestAnimationFrame to ensure the DOM is painted before scrolling.
    window.requestAnimationFrame(() => {
      const element = document.getElementById(path)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })
  }, [pathname, key])

  return null
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Navbar />
          <ScrollToSection />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/services" element={<HomePage />} />
            <Route path="/programs" element={<HomePage />} />
            <Route path="/portfolio" element={<HomePage />} />
            <Route path="/whychooseus" element={<HomePage />} />
            <Route path="/contact" element={<HomePage />} />
          </Routes>
          <FloatingWhatsApp />
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
