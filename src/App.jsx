import './App.css'
import {
  PillOption,
  QuestionLabel,
  RadioOption, RatingOption,
  SelectInput,
  TextInput
} from "./features/forms/components/FormsComponents.jsx";
import {useState} from "react";


export const SurveyForm = () => {
  // Estado completo para las 12 preguntas
  const [formData, setFormData] = useState({
    email: '',
    universidad: '',
    ciclo: '',
    situacion: '',
    dificultades: [], // Array porque son checkboxes
    preparacion: '',
    usarias: '',
    encontrar: [], // Array porque son checkboxes
    pagarias: '',
    cuantoPagarias: '',
    sugerencias: '',
    prototipo: ''
  });

  // Handler para inputs de texto, selects y radios
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handler especial para los Checkboxes (Píldoras)
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prev => {
      const currentList = prev[name];
      if (checked) {
        return { ...prev, [name]: [...currentList, value] }; // Añade a la lista
      } else {
        return { ...prev, [name]: currentList.filter(item => item !== value) }; // Quita de la lista
      }
    });
  };

  // Imprimir en consola para que veas cómo se guarda la data al enviar
  const handleSubmit = () => {
    console.log("Datos listos para enviar al backend:", formData);
    alert("¡Respuestas registradas! Revisa la consola.");
  };

  return (
      <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>

        {/* Q1, Q2, Q3 */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TextInput label="1. Por favor bríndanos tu correo electrónico" placeholder="tu@correo.com" name="email" value={formData.email} onChange={handleChange} />

          <SelectInput label="2. ¿A qué universidad perteneces?" name="universidad" value={formData.universidad} onChange={handleChange} options={['UTP', 'UPN', 'UCV', 'Otras']} />

          <SelectInput label="3. ¿En qué ciclo te encuentras?" name="ciclo" value={formData.ciclo} onChange={handleChange} options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']} />

          {/* Q4 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)'}}>
            <QuestionLabel text="4. Actualmente tú:" />
            {['Solo estudias', 'Buscas prácticas', 'Buscas trabajo', 'Trabajo y estudio', 'Ya tengo prácticas'].map(opt => (
                <RadioOption key={opt} text={opt} name="situacion" value={opt} checked={formData.situacion === opt} onChange={handleChange} />
            ))}
          </div>
        </div>

        {/* Q5 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <QuestionLabel text="5. ¿Qué es lo más difícil al buscar prácticas o empleo?" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
            {['No tengo experiencia', 'No sé hacer un buen CV', 'No encuentro oportunidades', 'No paso entrevistas', 'No tengo contactos', 'No sé por dónde empezar', 'Me piden demasiada experiencia'].map(opt => (
                <PillOption key={opt} text={opt} name="dificultades" value={opt} checked={formData.dificultades.includes(opt)} onChange={handleCheckboxChange} />
            ))}
          </div>
        </div>

        {/* Q6 & Q7 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            <QuestionLabel text="6. ¿Sientes que tu universidad te prepara bien?" />
            {['Sí, definitivamente', 'Tal vez', 'No'].map(opt => (
                <RadioOption key={opt} text={opt} name="preparacion" value={opt} checked={formData.preparacion === opt} onChange={handleChange} />
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            <QuestionLabel text="7. ¿Usarías esta plataforma paso a paso?" />
            {['Sí, definitivamente', 'Tal vez', 'No'].map(opt => (
                <RadioOption key={opt} text={opt} name="usarias" value={opt} checked={formData.usarias === opt} onChange={handleChange} />
            ))}
          </div>
        </div>

        {/* Q8 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <QuestionLabel text="8. ¿Qué te gustaría encontrar en la plataforma?" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
            {['Guías para CV', 'Entrevistas', 'Ofertas prácticas', 'Mentorías', 'LinkedIn', 'Contacto empresas', 'Cursos cortos'].map(opt => (
                <PillOption key={opt} text={opt} name="encontrar" value={opt} checked={formData.encontrar.includes(opt)} onChange={handleCheckboxChange} />
            ))}
          </div>
        </div>

        {/* Q9 & Q10 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            <QuestionLabel text="9. ¿Pagarías por mejorar?" />
            {['Sí', 'Solo si es económico', 'Solo si es gratuito'].map(opt => (
                <RadioOption key={opt} text={opt} name="pagarias" value={opt} checked={formData.pagarias === opt} onChange={handleChange} />
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            <QuestionLabel text="10. ¿Cuánto pagarías mensual?" />
            {['S/10–15', 'S/20–25', 'S/30–40', 'No pagaría'].map(opt => (
                <RadioOption key={opt} text={opt} name="cuantoPagarias" value={opt} checked={formData.cuantoPagarias === opt} onChange={handleChange} />
            ))}
          </div>
        </div>

        {/* Q11 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)'}} >
          <TextInput label="11. ¿Qué debería tener Próximo Paso para que realmente la uses?" name="sugerencias" placeholder="Tus sugerencias..." value={formData.sugerencias} onChange={handleChange} isTextArea={true} />
        </div>

        {/* Q12 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
          <QuestionLabel text="12. ¿Te gustó el prototipo?" />
          <div style={{ maxWidth: 400, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            {['No', 'Neutral', 'Sí', '¡Me encantó!'].map(opt => (
                <RatingOption key={opt} label={opt} isActive={formData.prototipo === opt} onClick={() => handleChange({ target: { name: 'prototipo', value: opt }})} />
            ))}
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button onClick={handleSubmit} style={{ width: '100%', padding: '20px', background: 'var(--primary)', borderRadius: 16, border: 'none', color: 'var(--white)', fontSize: 20, fontWeight: '900', cursor: 'pointer', boxShadow: '0px 10px 25px -5px rgba(0,0,0,0.1)' }}>
          Enviar mis respuestas
        </button>

      </div>
  );
};

function App() {
  return (
      <div style={{ width: '100%', minHeight: '100vh', background: 'var(--bg-light)', overflowX: 'hidden', fontFamily: 'Lexend, sans-serif' }}>
        {/* NAVBAR */}
        <nav style={{ width: '100%', padding: '16px 5%', background: 'var(--primary)', borderBottom: '1px var(--white-10) solid', display: 'flex', justifyContent: 'center', position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(6px)' }}>
          <div style={{ width: '100%', maxWidth: 1280, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ color: 'var(--bg-light)', fontSize: 20, fontWeight: '800' }}>Próximo Paso</div>
            <div className="nav-links">
              <span style={{ color: 'var(--bg-light-80)', fontSize: 14, fontWeight: '600', cursor: 'pointer' }}>¿Por qué nosotros?</span>
              <span style={{ color: 'var(--bg-light-80)', fontSize: 14, fontWeight: '600', cursor: 'pointer' }}>Método</span>
              <span style={{ color: 'var(--bg-light-80)', fontSize: 14, fontWeight: '600', cursor: 'pointer' }}>Precios</span>
            </div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <div style={{ padding: '6px 12px', background: 'var(--white-10)', borderRadius: 8, color: 'var(--bg-light)', fontSize: 12, fontWeight: '700' }}>ES</div>
              <div style={{ padding: '8px 20px', background: 'var(--white)', borderRadius: 8, color: 'var(--primary)', fontSize: 14, fontWeight: '700', cursor: 'pointer' }}>Comunícate con nosotros</div>
            </div>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section className="section-padding" style={{ width: '100%', background: 'var(--primary)', padding: '96px 5%', position: 'relative', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
          <img style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }} src="https://placehold.co/1280x820" alt="bg" />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', background: 'linear-gradient(90deg, var(--primary) 0%, var(--primary-60) 50%, transparent 100%)', zIndex: 1 }} />

          <div className="hero-container" style={{ width: '100%', maxWidth: 1280, position: 'relative', zIndex: 2 }}>
            {/* Hero Text */}
            <div className="hero-text" style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
              <div style={{ padding: '4px 16px', background: 'var(--accent)', borderRadius: 999, color: 'var(--white)', fontSize: 12, fontWeight: '700', letterSpacing: 1.2 }}>IMPACTO NACIONAL</div>
              <h1 style={{ color: 'var(--white)', fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: '900', lineHeight: '1.1', margin: 0 }}>
                Erradicando el <br/><span style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Desempleo</span><br/>Juvenil en el Perú
              </h1>
              <p style={{ color: 'var(--bg-light-90)', fontSize: 20, maxWidth: 600, margin: 0 }}>Transformamos el talento de la universidad UTP en carreras profesionales de éxito desde el primer día.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginTop: 16 }}>
                <button style={{ padding: '16px 32px', background: 'var(--accent)', borderRadius: 12, border: 'none', color: 'var(--white)', fontSize: 18, fontWeight: '900', cursor: 'pointer' }}>Únete por S/ 19.90</button>
                <span style={{ color: 'var(--bg-light-70)', fontSize: 14 }}>*Inversión para tu futuro</span>
              </div>
            </div>

            {/* Hero Card Testimonial */}
            <div className="hero-card" style={{ padding: 32, background: 'var(--white-10)', borderRadius: 24, backdropFilter: 'blur(12px)', border: '1px solid var(--white-20)' }}>
              <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                {[1,2,3,4,5].map(i => <div key={i} style={{ width: 12, height: 12, background: 'var(--accent)', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}/>)}
              </div>
              <p style={{ color: 'var(--white)', fontSize: 18, fontWeight: '500', lineHeight: 1.5, margin: '0 0 24px 0' }}>"Gracias a Próximo Paso conseguí mi primer empleo en el 4to ciclo. La mentoría fue clave."</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <img style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid var(--accent)' }} src="https://placehold.co/48x48" alt="Maria" />
                <div>
                  <div style={{ color: 'var(--white)', fontSize: 14, fontWeight: '700' }}>María P.</div>
                  <div style={{ color: 'var(--accent)', fontSize: 10, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5 }}>Estudiante UTP</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="section-padding" style={{ width: '100%', background: 'var(--primary)', padding: '48px 5%', display: 'flex', justifyContent: 'center', borderTop: '1px solid var(--white-10)' }}>
          <div className="grid-3" style={{ maxWidth: 1280 }}>
            {[
              { label: 'Tasa de Empleabilidad', val: '94%' },
              { label: 'Empresas Aliadas', val: '450+' },
              { label: 'Sueldo Inicial Promedio', val: 'S/ 2,400' },
              { label: 'Sedes Universitarias', val: '3 Labs' }
            ].map((stat, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--white-90)', fontSize: 36, fontWeight: '900' }}>{stat.val}</div>
                  <div style={{ color: 'var(--white-60)', fontSize: 12, fontWeight: '500', textTransform: 'uppercase', letterSpacing: 1.2 }}>{stat.label}</div>
                </div>
            ))}
          </div>
        </section>

        {/* WHY US SECTION */}
        <section className="section-padding" style={{ width: '100%', background: 'var(--white)', padding: '96px 5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ maxWidth: 1280, width: '100%', display: 'flex', flexDirection: 'column', gap: 64 }}>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <h2 style={{ color: 'var(--primary)', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: '900', margin: 0 }}>¿Por qué Próximo Paso?</h2>
              <p style={{ color: 'var(--text-gray)', fontSize: 18, maxWidth: 600, margin: 0 }}>Construye tu empleabilidad desde el primer ciclo, no esperes a graduarte</p>
            </div>

            <div className="grid-3">
              {[
                { title: 'Estrategia desde el 1°Ciclo', desc: 'Olvida la presión del último año. Construye una ventaja real mientras otros solo estudian. Sé el perfil que las empresas buscan antes de que recibas tu diploma.' },
                { title: 'Habilidades Prácticas', desc: 'Enfoque en crear un portafolio real. Ve más allá del CV genérico y muestra proyectos tangibles realizados en nuestros sprints.' },
                { title: 'Networking Directo', desc: 'Acceso directo a reclutadores a través de nuestra bolsa exclusiva. Olvídate de los agujeros negros en las aplicaciones de LinkedIn.' }
              ].map((card, i) => (
                  <div key={i} style={{ background: 'var(--bg-light-30)', padding: 32, borderRadius: 16, border: '1px solid var(--primary-10)', display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ width: 56, height: 56, background: 'var(--primary-10)', borderRadius: 12, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div style={{ width: 24, height: 24, background: 'var(--primary)', borderRadius: 4 }} />
                    </div>
                    <h3 style={{ color: 'var(--primary)', fontSize: 20, fontWeight: '700', margin: 0 }}>{card.title}</h3>
                    <p style={{ color: 'var(--text-gray)', fontSize: 16, lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* METHOD SECTION */}
        <section className="section-padding" style={{ width: '100%', background: 'var(--bg-light)', padding: '96px 5%', display: 'flex', justifyContent: 'center' }}>
          <div className="flex-col-mobile" style={{ maxWidth: 1280, width: '100%', background: 'var(--primary)', padding: 'clamp(32px, 5vw, 80px)', borderRadius: 32, position: 'relative', overflow: 'hidden' }}>

            <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: 32, zIndex: 2 }}>
              <h2 style={{ color: 'var(--white)', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '900', lineHeight: 1.1, margin: 0 }}>Nuestro Método:<br/>Construir, <span style={{ color: 'var(--accent)' }}>no solo Buscar</span></h2>
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
                  <div style={{ width: 40, height: 40, background: 'var(--accent)', borderRadius: 8 }} />
                  <div>
                    <div style={{ color: 'var(--white)', fontSize: 14, fontWeight: '700' }}>Analista de Datos</div>
                    <div style={{ color: 'var(--white-40)', fontSize: 10, fontWeight: '700', textTransform: 'uppercase' }}>BCP - Postula ahora</div>
                  </div>
                </div>
                <button style={{ padding: '4px 12px', background: 'var(--white)', borderRadius: 8, border: 'none', color: 'var(--primary)', fontSize: 12, fontWeight: '700', cursor: 'pointer' }}>Postular</button>
              </div>
              <div style={{ padding: 16, background: 'var(--white-05)', borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <div style={{ width: 40, height: 40, background: 'var(--accent-blue)', borderRadius: 8 }} />
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

        {/* FORMS SECTION */}
        <section className="section-padding" style={{width: '100%', background: 'var(--white)', padding: '96px 5%', display: 'flex', justifyContent: 'center' }}>
          <div style={{width: 900, paddingTop: 64, paddingBottom: 80, paddingLeft: 64, paddingRight: 64, background: 'var(--forms)', borderRadius: 48, outline: '1px rgba(12, 96, 116, 0.10) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 48, display: 'inline-flex'}}>
            {/* FORMS TITLE */}
            <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
              <div style={{paddingLeft: 16, paddingRight: 16, paddingTop: 4, paddingBottom: 4, background: 'var(--warning)', borderRadius: 9999, justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{width: 107, height: 15, textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 10,fontWeight: '700', textTransform: 'uppercase'}}>Cuestionario</div>
              </div>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                <h2 style={{display: 'flex', flexDirection: 'column', color: 'var(--primary)', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: '900', margin: 0}}>Ayúdanos a conocerte mejor</h2>
              </div>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                <h3 style={{display: 'flex', flexDirection: 'column', color: 'var(--text-gray)', fontSize: 16, fontWeight: '400'}}>Tus respuestas nos permiten personalizar tu experiencia en Próximo Paso.</h3>
              </div>
            </div>
            {/* FORMS BODY */}
            <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
              <SurveyForm></SurveyForm>
            </div>
          </div>
        </section>

        {/* FOOTER */}
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
      </div>
  )
}

export default App
