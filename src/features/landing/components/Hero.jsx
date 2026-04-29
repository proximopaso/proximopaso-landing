import React, { useState, useEffect, useRef } from 'react';

const heroImages = [
  '/hero-bg2.jpeg',
  '/hero-bg3.png',
  '/hero-bg4.png'
];

const testimonials = [
  {
    text: "Gracias a Próximo Paso potencié mi CV y me conecté con empresas desde el 4to ciclo universitario. ¡La mentoría es clave ganar experiencia real!",
    name: "María P.",
    role: "ESTUDIANTE UTP",
    image: "/chica-circulo.jpeg",
    fallback: "/chica-circulo.jpg",
    stars: 5
  },
  {
    text: "Como estudiante de mitad de carrera, veía lejos el trabajo. Con Próximo Paso pude entender mejor lo que buscaban las empresas en mí",
    name: "Carlos R.",
    role: "ESTUDIANTE UTP",
    image: "/chico-circulo.png",
    fallback: "/chico-circulo.jpg",
    stars: 4.5
  },
  {
    text: "Las mentorías personalizadas y las entrevistas simuladas en Próximo Paso aceleraron mi ingreso al mundo profesional antes de graduarme.",
    name: "Lucía F.",
    role: "ESTUDIANTE UTP",
    image: "/chica-circulo2.png",
    fallback: "/chica-circulo2.jpg",
    stars: 5
  }
];

export const Hero = () => {
  const [heroBgIndex, setHeroBgIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroBgIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 250);
  };

  const prevTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 250);
  };

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation (-15 to +15 degrees depending on cursor position)
    const rotateY = ((x / rect.width) - 0.5) * 15;
    const rotateX = ((y / rect.height) - 0.5) * -15;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section className="section-padding" style={{ width: '100%', background: 'var(--primary)', padding: '120px 5% 80px', position: 'relative', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Background Slideshow Overlay */}
      {heroImages.map((src, index) => (
        <img
          key={src}
          style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            opacity: index === heroBgIndex ? 1 : 0,
            transition: 'opacity 2s ease-in-out',
            filter: 'grayscale(50%) brightness(1)'
          }}
          src={src}
          alt={`Hero background ${index + 1}`}
        />
      ))}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 30% 50%, rgba(8, 57, 68, 0.9) 0%, rgba(12, 88, 105, 0.85) 100%)', zIndex: 1 }} />

      <div className="hero-container" style={{ width: '100%', maxWidth: 1280, position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: 64 }}>

        {/* Left Column: Value Proposition */}
        <div className="hero-text" style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span style={{ color: 'var(--accent)', fontSize: 14, fontWeight: '800', letterSpacing: 2, textTransform: 'uppercase' }}>¿Eres Alumno UTP?</span>
            <h1 style={{ color: 'var(--white)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: '900', lineHeight: '1.1', margin: 0 }}>
              Consigue el empleo de tus sueños <span style={{ color: 'var(--accent)' }}>antes</span> de graduarte.
            </h1>
            <p style={{ color: 'var(--bg-light-80)', fontSize: 20, maxWidth: 540, margin: 0, lineHeight: 1.6, fontStyle: 'italic' }}>
              "Deja de enviar CVs sin respuesta | Olvida el miedo a la falta de experiencia | Próximo Paso te conecta con el éxito real."
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="cta-button"
              style={{ padding: '20px 48px', background: 'var(--accent)', borderRadius: 16, border: 'none', color: 'var(--primary)', fontSize: 20, fontWeight: '900', cursor: 'pointer', width: 'fit-content', boxShadow: '0 10px 30px rgba(249, 169, 72, 0.3)' }}
            >
              Mejora tu Futuro Profesional Hoy
            </button>
            <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--white-60)', fontSize: 14 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Mentoría 1-a-1
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--white-60)', fontSize: 14 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Proyectos Reales
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--white-60)', fontSize: 14 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Sin Compromisos
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Striking Visual & Dimensions */}
        <div className="hero-visual" style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1200px' }}>
          <div
            className="hero-image-wrapper"
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: rotation.x === 0 && rotation.y === 0 ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'transform 0.1s linear',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="hero-main-image" style={{ transform: 'translateZ(20px)', transition: 'transform 0.3s ease' }}>
              <img
                src="/hero-success.png"
                alt="Professional Success"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Navigable Testimonial Overlay (Replaces Dimensión Social) */}
            <div className="hero-overlay-social" style={{ width: 340, padding: '24px 28px', transform: 'translateZ(60px)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <div style={{ color: 'var(--accent)', fontSize: 11, fontWeight: '900', textTransform: 'uppercase', letterSpacing: 1.5 }}>Testimonios de Éxito</div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button onClick={prevTestimonial} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 24, height: 24, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', color: 'white', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </button>
                  <button onClick={nextTestimonial} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 24, height: 24, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', color: 'white', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                </div>
              </div>

              <div style={{ opacity: isTransitioning ? 0 : 1, transition: 'opacity 0.2s ease' }}>
                <p style={{ color: 'var(--white)', fontSize: 14, margin: '0 0 16px 0', lineHeight: 1.5, fontWeight: '500', fontStyle: 'italic' }}>
                  "{testimonials[testimonialIndex].text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <img src={testimonials[testimonialIndex].image} style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--accent)' }} onError={(e) => e.target.src = testimonials[testimonialIndex].fallback} />
                  <div>
                    <div style={{ color: 'var(--white)', fontSize: 13, fontWeight: '800' }}>{testimonials[testimonialIndex].name}</div>
                    <div style={{ color: 'var(--accent)', fontSize: 10, fontWeight: '700' }}>{testimonials[testimonialIndex].role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emotional Dimension Overlay */}
            <div className="hero-overlay-emotional" style={{ transform: 'translateZ(40px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--accent)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div>
                  <div style={{ color: 'white', fontSize: 13, fontWeight: '700' }}>Seguridad Total</div>
                  <div style={{ color: 'var(--white-60)', fontSize: 11 }}>Dimensión Emocional</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
