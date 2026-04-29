import React, { useState, useEffect } from 'react';
import { LogoIcon, GlobeIcon } from '../../shared/components/Icons';

export const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      <nav
        style={{
          width: '100%',
          padding: '20px 5%',
          background: '#0c5c70ff',
          borderBottom: '1px rgba(255, 255, 255, 0.1) solid',
          display: 'flex',
          justifyContent: 'center',
          position: 'fixed',
          top: 0,
          zIndex: 1000,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease',
        }}
      >
        <div style={{ width: '100%', maxWidth: 1280, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--white)', fontSize: 26, fontWeight: '900', cursor: 'pointer', transition: 'all 0.3s ease' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.textShadow = '0 0 20px rgba(249, 169, 72, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.textShadow = 'none';
            }}
          >
            <LogoIcon />
            <span style={{ letterSpacing: '-0.5px' }}>Próximo Paso</span>
          </div>

          <div className="nav-links" style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
            {['Mentores', '¿Por qué nosotros?', 'Método', 'Precios'].map((item, idx) => {
              const ids = ['mentors', 'why-us', 'method', 'pricing'];
              return (
                <span
                  key={item}
                  onClick={() => document.getElementById(ids[idx])?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    color: 'var(--white)',
                    fontSize: 15,
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    padding: '8px 0'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--accent)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'var(--white)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {item}
                </span>
              );
            })}
          </div>

          <div className="nav-buttons" style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <div
              style={{
                padding: '10px 18px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 12,
                color: 'var(--white)',
                fontSize: 14,
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >
              <GlobeIcon /> ES
            </div>
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="cta-button"
              style={{
                padding: '12px 28px',
                background: 'var(--white)',
                borderRadius: 12,
                border: 'none',
                color: 'var(--primary)',
                fontSize: 14,
                fontWeight: '800',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px) scale(1.02)';
                e.target.style.boxShadow = '0 8px 25px rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
              }}
            >
              Comunícate con nosotros
            </button>
          </div>

          {/* Hamburger Icon */}
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <span onClick={() => { document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' }); setIsMobileMenuOpen(false); }} style={{ color: 'var(--bg-light-80)', fontSize: 18, fontWeight: '600', cursor: 'pointer' }}>¿Por qué nosotros?</span>
        <span onClick={() => { document.getElementById('method')?.scrollIntoView({ behavior: 'smooth' }); setIsMobileMenuOpen(false); }} style={{ color: 'var(--bg-light-80)', fontSize: 18, fontWeight: '600', cursor: 'pointer' }}>Método</span>
        <span onClick={() => { document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); setIsMobileMenuOpen(false); }} style={{ color: 'var(--bg-light-80)', fontSize: 18, fontWeight: '600', cursor: 'pointer' }}>Precios</span>
        <hr style={{ borderColor: 'var(--white-10)', margin: '16px 0' }} />
        <div style={{ padding: '8px 16px', background: 'var(--white-10)', borderRadius: 8, color: 'var(--bg-light)', fontSize: 14, fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer', width: 'fit-content' }}>
          <GlobeIcon /> ES
        </div>
        <div onClick={() => { document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }); setIsMobileMenuOpen(false); }} style={{ padding: '10px 24px', background: 'var(--white)', borderRadius: 8, color: 'var(--primary)', fontSize: 14, fontWeight: '700', cursor: 'pointer', textAlign: 'center' }}>Comunícate con nosotros</div>
      </div>
    </>
  );
};
