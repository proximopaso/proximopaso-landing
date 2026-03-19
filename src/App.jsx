import './App.css'
import {SurveyForm} from "./features/forms/components/SurveyForm.jsx";
import { PricingSection } from "./features/forms/pricing/PricingSection.jsx";

const StrategyIcon = ()=><svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 23.75V6.25H7.5V3.75L11.25 0L15 3.75V11.25H22.5V23.75H0ZM2.5 21.25H5V18.75H2.5V21.25ZM2.5 16.25H5V13.75H2.5V16.25ZM2.5 11.25H5V8.75H2.5V11.25ZM10 21.25H12.5V18.75H10V21.25ZM10 16.25H12.5V13.75H10V16.25ZM10 11.25H12.5V8.75H10V11.25ZM10 6.25H12.5V3.75H10V6.25ZM17.5 21.25H20V18.75H17.5V21.25ZM17.5 16.25H20V13.75H17.5V16.25Z" fill="#0C6074"/>
</svg>

const TerminalIcon = ()=><svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 20C1.8125 20 1.22396 19.7552 0.734375 19.2656C0.244792 18.776 0 18.1875 0 17.5V2.5C0 1.8125 0.244792 1.22396 0.734375 0.734375C1.22396 0.244792 1.8125 0 2.5 0H22.5C23.1875 0 23.776 0.244792 24.2656 0.734375C24.7552 1.22396 25 1.8125 25 2.5V17.5C25 18.1875 24.7552 18.776 24.2656 19.2656C23.776 19.7552 23.1875 20 22.5 20H2.5ZM2.5 17.5H22.5V5H2.5V17.5ZM6.875 16.25L5.125 14.5L8.34375 11.25L5.09375 8L6.875 6.25L11.875 11.25L6.875 16.25ZM12.5 16.25V13.75H20V16.25H12.5Z" fill="#0C6074"/>
</svg>

const NetworkIcon = ()=><svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 28.75C6.45833 28.75 5.57292 28.3854 4.84375 27.6562C4.11458 26.9271 3.75 26.0417 3.75 25C3.75 23.9583 4.11458 23.0729 4.84375 22.3438C5.57292 21.6146 6.45833 21.25 7.5 21.25C7.79167 21.25 8.0625 21.2812 8.3125 21.3438C8.5625 21.4062 8.80208 21.4896 9.03125 21.5938L10.8125 19.375C10.2292 18.7292 9.82292 18 9.59375 17.1875C9.36458 16.375 9.3125 15.5625 9.4375 14.75L6.90625 13.9062C6.55208 14.4271 6.10417 14.8438 5.5625 15.1562C5.02083 15.4688 4.41667 15.625 3.75 15.625C2.70833 15.625 1.82292 15.2604 1.09375 14.5312C0.364583 13.8021 0 12.9167 0 11.875C0 10.8333 0.364583 9.94792 1.09375 9.21875C1.82292 8.48958 2.70833 8.125 3.75 8.125C4.79167 8.125 5.67708 8.48958 6.40625 9.21875C7.13542 9.94792 7.5 10.8333 7.5 11.875C7.5 11.9167 7.5 11.9583 7.5 12C7.5 12.0417 7.5 12.0833 7.5 12.125L10.0312 13C10.4479 12.25 11.0052 11.6146 11.7031 11.0938C12.401 10.5729 13.1875 10.2396 14.0625 10.0938V7.375C13.25 7.14583 12.5781 6.70312 12.0469 6.04688C11.5156 5.39062 11.25 4.625 11.25 3.75C11.25 2.70833 11.6146 1.82292 12.3438 1.09375C13.0729 0.364583 13.9583 0 15 0C16.0417 0 16.9271 0.364583 17.6562 1.09375C18.3854 1.82292 18.75 2.70833 18.75 3.75C18.75 4.625 18.4792 5.39062 17.9375 6.04688C17.3958 6.70312 16.7292 7.14583 15.9375 7.375V10.0938C16.8125 10.2396 17.599 10.5729 18.2969 11.0938C18.9948 11.6146 19.5521 12.25 19.9688 13L22.5 12.125C22.5 12.0833 22.5 12.0417 22.5 12C22.5 11.9583 22.5 11.9167 22.5 11.875C22.5 10.8333 22.8646 9.94792 23.5938 9.21875C24.3229 8.48958 25.2083 8.125 26.25 8.125C27.2917 8.125 28.1771 8.48958 28.9062 9.21875C29.6354 9.94792 30 10.8333 30 11.875C30 12.9167 29.6354 13.8021 28.9062 14.5312C28.1771 15.2604 27.2917 15.625 26.25 15.625C25.5833 15.625 24.974 15.4688 24.4219 15.1562C23.8698 14.8438 23.4271 14.4271 23.0938 13.9062L20.5625 14.75C20.6875 15.5625 20.6354 16.3698 20.4062 17.1719C20.1771 17.974 19.7708 18.7083 19.1875 19.375L20.9688 21.5625C21.1979 21.4583 21.4375 21.3802 21.6875 21.3281C21.9375 21.276 22.2083 21.25 22.5 21.25C23.5417 21.25 24.4271 21.6146 25.1562 22.3438C25.8854 23.0729 26.25 23.9583 26.25 25C26.25 26.0417 25.8854 26.9271 25.1562 27.6562C24.4271 28.3854 23.5417 28.75 22.5 28.75C21.4583 28.75 20.5729 28.3854 19.8438 27.6562C19.1146 26.9271 18.75 26.0417 18.75 25C18.75 24.5833 18.8177 24.1823 18.9531 23.7969C19.0885 23.4115 19.2708 23.0625 19.5 22.75L17.7188 20.5312C16.8646 21.0104 15.9531 21.25 14.9844 21.25C14.0156 21.25 13.1042 21.0104 12.25 20.5312L10.5 22.75C10.7292 23.0625 10.9115 23.4115 11.0469 23.7969C11.1823 24.1823 11.25 24.5833 11.25 25C11.25 26.0417 10.8854 26.9271 10.1562 27.6562C9.42708 28.3854 8.54167 28.75 7.5 28.75ZM3.75 13.125C4.10417 13.125 4.40104 13.0052 4.64062 12.7656C4.88021 12.526 5 12.2292 5 11.875C5 11.5208 4.88021 11.224 4.64062 10.9844C4.40104 10.7448 4.10417 10.625 3.75 10.625C3.39583 10.625 3.09896 10.7448 2.85938 10.9844C2.61979 11.224 2.5 11.5208 2.5 11.875C2.5 12.2292 2.61979 12.526 2.85938 12.7656C3.09896 13.0052 3.39583 13.125 3.75 13.125ZM7.5 26.25C7.85417 26.25 8.15104 26.1302 8.39062 25.8906C8.63021 25.651 8.75 25.3542 8.75 25C8.75 24.6458 8.63021 24.349 8.39062 24.1094C8.15104 23.8698 7.85417 23.75 7.5 23.75C7.14583 23.75 6.84896 23.8698 6.60938 24.1094C6.36979 24.349 6.25 24.6458 6.25 25C6.25 25.3542 6.36979 25.651 6.60938 25.8906C6.84896 26.1302 7.14583 26.25 7.5 26.25ZM15 5C15.3542 5 15.651 4.88021 15.8906 4.64062C16.1302 4.40104 16.25 4.10417 16.25 3.75C16.25 3.39583 16.1302 3.09896 15.8906 2.85938C15.651 2.61979 15.3542 2.5 15 2.5C14.6458 2.5 14.349 2.61979 14.1094 2.85938C13.8698 3.09896 13.75 3.39583 13.75 3.75C13.75 4.10417 13.8698 4.40104 14.1094 4.64062C14.349 4.88021 14.6458 5 15 5ZM15 18.75C15.875 18.75 16.6146 18.4479 17.2188 17.8438C17.8229 17.2396 18.125 16.5 18.125 15.625C18.125 14.75 17.8229 14.0104 17.2188 13.4062C16.6146 12.8021 15.875 12.5 15 12.5C14.125 12.5 13.3854 12.8021 12.7812 13.4062C12.1771 14.0104 11.875 14.75 11.875 15.625C11.875 16.5 12.1771 17.2396 12.7812 17.8438C13.3854 18.4479 14.125 18.75 15 18.75ZM22.5 26.25C22.8542 26.25 23.151 26.1302 23.3906 25.8906C23.6302 25.651 23.75 25.3542 23.75 25C23.75 24.6458 23.6302 24.349 23.3906 24.1094C23.151 23.8698 22.8542 23.75 22.5 23.75C22.1458 23.75 21.849 23.8698 21.6094 24.1094C21.3698 24.349 21.25 24.6458 21.25 25C21.25 25.3542 21.3698 25.651 21.6094 25.8906C21.849 26.1302 22.1458 26.25 22.5 26.25ZM26.25 13.125C26.6042 13.125 26.901 13.0052 27.1406 12.7656C27.3802 12.526 27.5 12.2292 27.5 11.875C27.5 11.5208 27.3802 11.224 27.1406 10.9844C26.901 10.7448 26.6042 10.625 26.25 10.625C25.8958 10.625 25.599 10.7448 25.3594 10.9844C25.1198 11.224 25 11.5208 25 11.875C25 12.2292 25.1198 12.526 25.3594 12.7656C25.599 13.0052 25.8958 13.125 26.25 13.125Z" fill="#0C6074"/>
</svg>

const AnalistIcon = ()=><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 19C1.45 19 0.979167 18.8042 0.5875 18.4125C0.195833 18.0208 0 17.55 0 17V6C0 5.45 0.195833 4.97917 0.5875 4.5875C0.979167 4.19583 1.45 4 2 4H6V2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0H12C12.55 0 13.0208 0.195833 13.4125 0.5875C13.8042 0.979167 14 1.45 14 2V4H18C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6V17C20 17.55 19.8042 18.0208 19.4125 18.4125C19.0208 18.8042 18.55 19 18 19H2ZM2 17H18V6H2V17ZM8 4H12V2H8V4ZM2 17V6V17Z" fill="white"/>
</svg>

const MarketingIcon = ()=><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9V7H20V9H16ZM17.2 16L14 13.6L15.2 12L18.4 14.4L17.2 16ZM15.2 4L14 2.4L17.2 0L18.4 1.6L15.2 4ZM3 15V11H2C1.45 11 0.979167 10.8042 0.5875 10.4125C0.195833 10.0208 0 9.55 0 9V7C0 6.45 0.195833 5.97917 0.5875 5.5875C0.979167 5.19583 1.45 5 2 5H6L11 2V14L6 11H5V15H3ZM9 10.45V5.55L6.55 7H2V9H6.55L9 10.45ZM12 11.35V4.65C12.45 5.05 12.8125 5.5375 13.0875 6.1125C13.3625 6.6875 13.5 7.31667 13.5 8C13.5 8.68333 13.3625 9.3125 13.0875 9.8875C12.8125 10.4625 12.45 10.95 12 11.35Z" fill="white"/>
</svg>

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
              <p style={{ color: 'var(--bg-light-90)', fontSize: 20, maxWidth: 600, margin: 0 }}>Transformamos el talento de la university UTP en carreras profesionales de éxito desde el primer día.</p>
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
              <p style={{ color: 'var(--white)', fontSize: 18, fontWeight: '500', lineHeight: 1.5, margin: '0 0 24px 0' }}>"Gracias a Próximo Paso conseguí mi primer empleo en el 4to cycle. La mentoría fue clave."</p>
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

        <PricingSection />

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
