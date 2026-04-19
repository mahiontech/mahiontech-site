import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import FloatingWhatsApp from './components/FloatingWhatsApp'

// --- PERFORMANCE FIX: LOAD CORE SECTIONS IMMEDIATELY ---
// Moving these out of lazy load prevents the "stuck" feeling when navigating
import Hero from './components/Hero'
import Services from './components/Services'
import Programs from './components/Programs'

// Keep heavy/deep sections lazy loaded
const Portfolio = lazy(() => import('./components/Portfolio'))
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Process = lazy(() => import('./components/Process'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

const LoadingFallback = () => <div className="h-24 flex items-center justify-center text-blue-600 font-medium">Loading Section...</div>

function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <Programs />
      <Suspense fallback={<LoadingFallback />}>
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

    if (!path || path === '' || path === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Advanced Scroll Logic: Retries if section is still lazy-loading
    const attemptScroll = (retries = 0) => {
      const element = document.getElementById(path)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else if (retries < 15) {
        // Retry every 100ms for 1.5s to wait for lazy components
        setTimeout(() => attemptScroll(retries + 1), 100)
      }
    }

    attemptScroll()
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
