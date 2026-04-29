import React from 'react';
import { AnalistIcon, MarketingIcon } from '../../shared/components/Icons';

export const Method = () => {
  return (
    <section id="method" className="section-padding" style={{ width: '100%', background: 'var(--bg-light)', padding: '96px 5%', display: 'flex', justifyContent: 'center' }}>
      <div className="flex-col-mobile" style={{ maxWidth: 1280, width: '100%', background: 'var(--primary)', padding: 'clamp(32px, 5vw, 80px)', borderRadius: 32, position: 'relative', overflow: 'hidden' }}>

        <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: 32, zIndex: 2 }}>
          <h2 style={{ color: 'var(--white)', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '900', lineHeight: 1.1, margin: 0 }}>Nuestro Método:<br />Construir, <span style={{ color: 'var(--accent)' }}>no solo Buscar</span></h2>
          <p style={{ color: 'var(--white-80)', fontSize: 18, maxWidth: 500, margin: 0 }}>Las bolsas de trabajo tradicionales son pasivas. Próximo Paso es activo. Te ponemos en un entorno de simulación profesional de alta intensidad.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { num: '1', title: 'Portfolio Sprint', desc: 'Construye 3 proyectos reales que resuelven problemas actuales de empresas.' },
              { num: '2', title: 'Optimización con IA', desc: 'Nuestra IA optimiza tu perfil para los sistemas de seguimiento de candidatos (ATS).' },
              { num: '3', title: 'Simulacros de Entrevista', desc: 'Sesiones en vivo con expertos en RRHH de las principales firmas peruanas.' }
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', textAlign: 'left' }}>
                <div style={{ minWidth: 40, height: 40, borderRadius: '50%', border: '1px solid var(--white-30)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--white)', fontWeight: '700' }}>{step.num}</div>
                <div>
                  <div style={{ color: 'var(--white)', fontSize: 20, fontWeight: '700', marginBottom: 4 }}>{step.title}</div>
                  <div style={{ color: 'var(--white-60)', fontSize: 14 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: '1 1 400px', background: 'var(--white-10)', padding: 32, borderRadius: 24, backdropFilter: 'blur(12px)', border: '1px solid var(--white-10)', display: 'flex', flexDirection: 'column', gap: 16, zIndex: 2 }}>
          <div style={{ padding: 16, background: 'var(--white-05)', borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <AnalistIcon />
              <div>
                <div style={{ color: 'var(--white)', fontSize: 14, fontWeight: '700' }}>Analista de Datos</div>
                <div style={{ color: 'var(--white-40)', fontSize: 10, fontWeight: '700', textTransform: 'uppercase' }}>BCP - Postula ahora</div>
              </div>
            </div>
            <button style={{ padding: '4px 12px', background: 'var(--white)', borderRadius: 8, border: 'none', color: 'var(--primary)', fontSize: 12, fontWeight: '700', cursor: 'pointer' }}>Postular</button>
          </div>
          <div style={{ padding: 16, background: 'var(--white-05)', borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <MarketingIcon />
              <div>
                <div style={{ color: 'var(--white)', fontSize: 14, fontWeight: '700' }}>Marketing Digital</div>
                <div style={{ color: 'var(--white-40)', fontSize: 10, fontWeight: '700', textTransform: 'uppercase' }}>Alicorp - Postula ahora</div>
              </div>
            </div>
            <button style={{ padding: '4px 12px', background: 'var(--white)', borderRadius: 8, border: 'none', color: 'var(--primary)', fontSize: 12, fontWeight: '700', cursor: 'pointer' }}>Postular</button>
          </div>
          <div style={{ marginTop: 16, paddingTop: 32, borderTop: '1px solid var(--white-10)', textAlign: 'center' }}>
            <div style={{ color: 'var(--accent)', fontSize: 30, fontWeight: '900' }}>S/ 19.90</div>
            <div style={{ color: 'var(--white-60)', fontSize: 12, fontWeight: '700', textTransform: 'uppercase' }}>Suscripción Mensual</div>
          </div>
        </div>
      </div>
    </section>
  );
};
