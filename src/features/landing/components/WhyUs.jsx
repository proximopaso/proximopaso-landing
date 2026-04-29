import React from 'react';
import { StrategyIcon, TerminalIcon, NetworkIcon } from '../../shared/components/Icons';

export const WhyUs = () => {
  return (
    <section id="why-us" className="section-padding" style={{ width: '100%', background: 'var(--white)', padding: '96px 5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ maxWidth: 1280, width: '100%', display: 'flex', flexDirection: 'column', gap: 64 }}>
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <h2 style={{ color: 'var(--primary)', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: '900', margin: 0 }}>¿Por qué Próximo Paso?</h2>
          <p style={{ color: 'var(--text-gray)', fontSize: 18, maxWidth: 600, margin: 0 }}>Construye tu empleabilidad desde el primer cycle, no esperes a graduarte</p>
        </div>

        <div className="grid-3">
          {[
            { logo: <StrategyIcon />, title: 'Estrategia desde el 1°Ciclo', desc: 'Olvida la presión del último año. Construye una ventaja real mientras otros solo estudian. Sé el perfil que las empresas buscan antes de que recibas tu diploma.' },
            { logo: <TerminalIcon />, title: 'Habilidades Prácticas', desc: 'Enfoque en crear un portafolio real. Ve más allá del CV genérico y muestra proyectos tangibles realizados en nuestros sprints.' },
            { logo: <NetworkIcon />, title: 'Networking Directo', desc: 'Acceso directo a reclutadores a través de nuestra bolsa exclusiva. Olvídate de los agujeros negros en las aplicaciones de LinkedIn.' }
          ].map((card, i) => (
            <div key={i} style={{ background: 'var(--bg-light-30)', padding: 32, borderRadius: 16, border: '1px solid var(--primary-10)', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ width: 56, height: 56, background: 'var(--primary-10)', borderRadius: 12, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {card.logo}
              </div>
              <h3 style={{ color: 'var(--primary)', fontSize: 20, fontWeight: '700', margin: 0 }}>{card.title}</h3>
              <p style={{ color: 'var(--text-gray)', fontSize: 16, lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
