import { useState, useEffect } from 'react'
import './App.css'
import { Navbar } from './features/layout/components/Navbar';
import { Footer } from './features/layout/components/Footer';
import { Hero } from './features/landing/components/Hero';
import { Stats } from './features/landing/components/Stats';
import { WhyUs } from './features/landing/components/WhyUs';
import { Mentors } from './features/landing/components/Mentors';
import { Method } from './features/landing/components/Method';
import { PricingSection } from "./features/forms/pricing/PricingSection.jsx";
import { ContactSection } from './features/forms/components/ContactSection';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrolled > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    document.addEventListener('scroll', checkScrollTop, true);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
      document.removeEventListener('scroll', checkScrollTop, true);
    };
  }, []);

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: 'var(--bg-light)', fontFamily: 'Lexend, sans-serif' }}>
      <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      <Hero />
      <Stats />
      <Mentors />
      <WhyUs />
      <Method />

      <div id="pricing">
        <PricingSection />
      </div>

      {/*
      <ContactSection />
      */}

      <Footer />

      {/* Scroll to Top Button */}
      <button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ opacity: showScroll ? 1 : 0, pointerEvents: showScroll ? 'auto' : 'none' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
      </button>
    </div>
  )
}

export default App
