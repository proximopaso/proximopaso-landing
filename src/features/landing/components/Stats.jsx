import React, { useState, useRef } from 'react';

const statsData = [
  { val: '+20', label: 'Empresas Aliadas', desc: 'Confían en nuestros egresados y brindan mentores de élite.' },
  { val: '90%', label: 'Tasa de Empleabilidad', desc: 'Métrica clave que demuestra el impacto real de nuestra mentoría.' },
  { val: '15', label: 'Convenios Académicos', desc: 'Alianzas estratégicas para certificar y potenciar el aprendizaje.' },
  { val: '+10', label: 'Hubs de Innovación', desc: 'Espacios exclusivos de networking donde tenemos presencia activa.' }
];

const StatCard = ({ stat }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 50;
    const rotateX = ((y / rect.height) - 0.5) * -50;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div style={{ perspective: '1200px' }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          alignItems: 'flex-start',
          padding: '32px 24px',
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.05)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: rotation.x === 0 && rotation.y === 0 ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'transform 0.1s linear',
          transformStyle: 'preserve-3d',
          cursor: 'default',
          height: '100%'
        }}
      >
        <div style={{ transform: 'translateZ(40px)', width: '100%' }}>
          <div style={{
            fontSize: 'clamp(48px, 5vw, 64px)',
            fontWeight: '900',
            background: 'linear-gradient(to right, var(--accent), #FFD166)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1,
            marginBottom: 8
          }}>
            {stat.val}
          </div>

          <div style={{
            color: 'var(--white)',
            fontSize: 14,
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: 1.5,
            borderBottom: '2px solid rgba(249, 169, 72, 0.5)',
            paddingBottom: 12,
            marginBottom: 16
          }}>
            {stat.label}
          </div>

          <p style={{
            color: 'var(--white-60)',
            fontSize: 14,
            lineHeight: 1.6,
            margin: 0,
            fontWeight: '500'
          }}>
            {stat.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Stats = () => {
  return (
    <section className="section-padding" style={{
      width: '100%',
      background: 'linear-gradient(135deg, #083E4A 0%, #0C6074 100%)',
      padding: '80px 5%',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* Patrón de Pisadas (Fondo) */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.04 }}>
        {[...Array(6)].map((_, i) => {
          const top = `${Math.random() * 80}%`;
          const left = `${Math.random() * 90}%`;
          const rotation = Math.random() * 360;
          return (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                position: 'absolute',
                top: top,
                left: left,
                transform: `rotate(${rotation}deg)`
              }}
            >
              <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
              <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
              <path d="M16 17h4" />
              <path d="M4 13h4" />
            </svg>
          );
        })}
      </div>

      <div className="stats-grid" style={{ maxWidth: 1280, position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
        {statsData.map((stat, i) => (
          <StatCard key={i} stat={stat} />
        ))}
      </div>
    </section>
  );
};
