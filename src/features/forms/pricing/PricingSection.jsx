import React from 'react';

export const PricingSection = () => {
  // Lista de planes (Data limpia)
 return (
    <section id="precios" style={{ width: '100%', background: 'var(--bg-light)', padding: '96px 5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Título de la sección */}
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <h2 style={{ color: 'var(--primary)', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '900', margin: 0 }}>
          Elige tu camino al <span style={{ color: 'var(--accent)' }}>Éxito</span>
        </h2>
        <p style={{ color: 'var(--primary)', opacity: 0.8, marginTop: 16 }}>Planes diseñados para cada etapa de tu formación profesional, con precios accesibles 
            para la comunidad universitaria</p>
      </div>

      {/* Grid de Tarjetas */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, width: '100%', maxWidth: 1280 }}>
        
        {/* Plan Gratuito */}
        <div style={cardStyle}>
          <h3 style={titleStyle}>Plan Gratuito</h3>
          <div style={priceContainer}>
            <span style={priceValue}>S/ 0</span>
            <span style={pricePeriod}>/mes</span>
          </div>
          <ul style={listStyle}>
            <li>✔ Acceso a artículos básicos de carrera</li>
            <li>✔ 1 Test de empleabilidad mensual</li>
            <li>✔ Vista previa de bolsa de trabajo</li>
          </ul>
          <button style={btnSecondary}>Empezar Gratis</button>
        </div>

        {/* Plan Estudiantil - EL RESALTADO */}
        <div style={{ ...cardStyle, border: '2px solid var(--accent)', transform: 'scale(1.05)', position: 'relative', zIndex: 2 }}>
          <div style={badgeStyle}>MÁS POPULAR</div>
          <h3 style={titleStyle}>Plan Estudiantil</h3>
          <div style={priceContainer}>
            <span style={priceValue}>S/ 19.90</span>
            <span style={pricePeriod}>/mes</span>
          </div>
          <ul style={listStyle}>
            <li>✔ Constructor de Portafolio Profesional</li>
            <li>✔ Optimización de CV con IA</li>
            <li>✔ Acceso Ilimitado a Bolsa de Trabajo</li>
            <li>✔ Masterclasses de Habilidades Blandas</li>
          </ul>
          <button style={btnPrimary}>Suscribirme Ahora</button>
        </div>

        {/* Plan Premium */}
        <div style={cardStyle}>
          <h3 style={titleStyle}>Plan Premium</h3>
          <div style={priceContainer}>
            <span style={priceValue}>S/ 29.90</span>
            <span style={pricePeriod}>/mes</span>
          </div>
          <ul style={listStyle}>
            <li>✔ Todo lo del plan Estudiantil</li>
            <li>✔ Mentoría 1-a-1 mensual con expertos</li>
            <li>✔ Certificados Premium variado</li>
            <li>✔ Acceso anticipado a eventos exclusivos</li>
          </ul>
          <button style={btnSecondary}>Obtener Premium</button>
        </div>
      </div>
    </section>
  );
};

// Estilos internos para no depender de archivos externos que puedan romper la carga
const cardStyle = { background: 'white', padding: 40, borderRadius: 32, display: 'flex', flexDirection: 'column', gap: 20, boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: '0.3s' };
const titleStyle = { color: 'var(--primary)', fontWeight: '900', fontSize: 24, margin: 0 };
const priceContainer = { display: 'flex', alignItems: 'baseline', gap: 4 };
const priceValue = { fontSize: 40, fontWeight: '900', color: 'var(--primary)' };
const pricePeriod = { fontSize: 16, opacity: 0.5, color: 'var(--primary)' };
const listStyle = { listStyle: 'none', padding: 0, flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, color: 'var(--primary)', opacity: 0.8 };
const badgeStyle = { position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', color: 'white', padding: '4px 16px', borderRadius: 20, fontSize: 10, fontWeight: '900', letterSpacing: 1 };
const btnPrimary = { background: 'var(--primary)', color: 'white', border: 'none', padding: '16px', borderRadius: 16, fontWeight: '700', cursor: 'pointer' };
const btnSecondary = { background: '#f1f5f9', color: 'var(--primary)', border: 'none', padding: '16px', borderRadius: 16, fontWeight: '700', cursor: 'pointer' };