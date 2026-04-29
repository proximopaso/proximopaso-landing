import React from 'react';
import { SurveyForm } from './SurveyForm';

export const ContactSection = () => {
  return (
    <section id="contact-form" className="section-padding" style={{ width: '100%', background: 'var(--white)', padding: '96px 5%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: 900, paddingTop: 64, paddingBottom: 80, paddingLeft: 64, paddingRight: 64, background: 'var(--forms)', borderRadius: 48, outline: '1px rgba(12, 96, 116, 0.10) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 48, display: 'inline-flex' }}>
        {/* FORMS TITLE */}
        <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
          <div style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 4, paddingBottom: 4, background: 'var(--warning)', borderRadius: 9999, justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
            <div style={{ width: 107, height: 15, textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 10, fontWeight: '700', textTransform: 'uppercase' }}>Cuestionario</div>
          </div>
          <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
            <h2 style={{ display: 'flex', flexDirection: 'column', color: 'var(--primary)', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: '900', margin: 0 }}>Ayúdanos a conocerte mejor</h2>
          </div>
          <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
            <h3 style={{ display: 'flex', flexDirection: 'column', color: 'var(--text-gray)', fontSize: 16, fontWeight: '400' }}>Tus respuestas nos permiten personalizar tu experiencia en Próximo Paso.</h3>
          </div>
        </div>
        {/* FORMS BODY */}
        <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
          <SurveyForm />
        </div>
      </div>
    </section>
  );
};
