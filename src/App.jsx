import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import FloatingWhatsApp from './components/FloatingWhatsApp'

// Critical components - keep static
import Hero from './components/Hero'

// Non-critical components - lazy load
const Services = lazy(() => import('./components/Services'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Process = lazy(() => import('./components/Process'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const Programs = lazy(() => import('./components/Programs'))

const LoadingFallback = () => <div className="min-h-[200px] flex items-center justify-center text-blue-600 font-medium">Loading Section...</div>

function HomePage() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <Services />
        <Programs />
        <Process />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  )
}

function ScrollToSection() {
  const { pathname, key } = useLocation()

  React.useEffect(() => {
    const path = pathname.split('/').pop()

    // If we are at the root or explicitly at /home, scroll to top
    if (!path || path === '' || path === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Otherwise, find the element by ID and scroll to it
    window.requestAnimationFrame(() => {
      const element = document.getElementById(path)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        // Fallback to top if ID not found
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })
  }, [pathname, key]) // Added key to trigger on same-path clicks

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
