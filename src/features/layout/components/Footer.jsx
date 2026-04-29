import React from 'react';

export const Footer = () => {
  return (
    <footer className="section-padding" style={{ width: '100%', background: 'var(--primary)', padding: '80px 5% 40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ maxWidth: 1280, width: '100%', display: 'flex', flexDirection: 'column', gap: 64 }}>

        <div className="footer-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3 style={{ color: 'var(--bg-light)', fontSize: 20, fontWeight: '800', margin: 0 }}>Próximo Paso</h3>
            <p style={{ color: 'var(--white-60)', fontSize: 14, margin: 0 }}>El puente definitivo entre tu vida universitaria peruana y tu primer rol profesional de éxito.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ color: 'var(--accent)', fontSize: 12, fontWeight: '700', textTransform: 'uppercase' }}>Plataforma</div>
            {['Cómo funciona', 'Casos de Éxito', 'Para Empresas', 'Nuestros Labs'].map((link, i) => (
              <a key={i} href="#" style={{ color: 'var(--white-60)', fontSize: 14, textDecoration: 'none' }}>{link}</a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ color: 'var(--accent)', fontSize: 12, fontWeight: '700', textTransform: 'uppercase' }}>Soporte</div>
            {['Centro de Ayuda', 'Privacidad', 'Términos', 'Legal'].map((link, i) => (
              <a key={i} href="#" style={{ color: 'var(--white-60)', fontSize: 14, textDecoration: 'none' }}>{link}</a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ color: 'var(--accent)', fontSize: 12, fontWeight: '700', textTransform: 'uppercase' }}>Mantente al día</div>
            <p style={{ color: 'var(--white-60)', fontSize: 12, margin: 0 }}>Recibe consejos de carrera y alertas de empleo.</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <input type="email" placeholder="Correo" style={{ flex: 1, padding: '12px', background: 'var(--white-05)', border: '1px solid var(--white-10)', borderRadius: 8, color: 'var(--white)' }} />
              <button style={{ padding: '0 20px', background: 'var(--accent)', border: 'none', borderRadius: 8, color: 'var(--white)', fontWeight: 'bold', cursor: 'pointer' }}>→</button>
            </div>
          </div>
        </div>

        <div className="flex-col-mobile" style={{ paddingTop: 32, borderTop: '1px solid var(--white-10)', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: 'var(--white-40)', fontSize: 10, fontWeight: '700', textTransform: 'uppercase' }}>© 2026 Próximo Paso. Construido con pasión en Lima, Perú.</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <span style={{ color: 'var(--white-40)', fontSize: 10, fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer' }}>English</span>
            <span style={{ color: 'var(--accent)', fontSize: 10, fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer' }}>Español</span>
            <span style={{ color: 'var(--white-40)', fontSize: 10, fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer' }}>Quechua</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
