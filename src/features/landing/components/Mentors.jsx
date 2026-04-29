import React, { useState, useRef, useEffect } from 'react';

const mentorsList = [
    {
        name: "Daniela Isabel Cheng Casas",
        currentCompany: "BCP / Intercorp / EY",
        details: [
            "Bachiller en Ing. Industrial",
            "Enfoque en Finanzas Corporativas y crecimiento profesional",
            "Perfil analítico y orientado a resultados"
        ],
        image: "/mentor2.jpeg",
        imagePosition: "center 15%" // Ajuste para alinear el rostro
    },
    {
        name: "Giovannie Escribens Ruiz",
        currentCompany: "LAIVE / APERHU",
        details: [
            "Director en APERHU - Asociación Peruana de Recursos Humanos",
            "Chief Human Resources Officer (CHRO)",
            "Gerente de Gestión Humana – LAIVE S.A.",
            "TOP HR Influencer Perú 2024–2025"
        ],
        image: "/mentor1.jpeg",
        imagePosition: "center 10%" // Ajuste para alinear el rostro
    },
    {
        name: "Andy Fernández Aldoradin",
        currentCompany: "PMI / U. de Lima",
        details: [
            "Especialista en Gestión de Proyectos",
            "Vicepresidente CIPRO – Universidad de Lima",
            "Coordinador PMO – PMI Lima Chapter"
        ],
        image: "/mentor3.jpeg",
        imagePosition: "center 15%" // Ajuste para alinear el rostro
    },
    {
        name: "Klever Anderson Quispe Caballero",
        currentCompany: "Servivet / PMI / UCSur",
        details: [
            "Especialidad en Contenido y Gestión de Comunidades",
            "Practicante de Marketing – Servivet Perú",
            "Coordinador de marketing - Student Club - PMI Lima Perú Chapter",
            "Community manager - CONEIMERA",
            "Estudiante de marketing en UCSur"
        ],
        image: "/mentor4.jpeg",
        imagePosition: "center 15%" // Ajuste para alinear el rostro
    },
    {
        name: "Romario Ismodes Munives",
        currentCompany: "UCV / CENTRIA / INABIF",
        details: [
            "Licenciado en Psicología",
            "Diplomado en Psicoterapia Cognitivo Conductual",
            "Maestría en Psicología Educativa"
        ],
        image: "/mentor5.jpeg",
        imagePosition: "center 15%" // Ajuste para alinear el rostro
    }
];

export const Mentors = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setSelectedIndex(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <section
            id="mentors"
            style={{
                width: '100%',
                background: '#041E26', // Deep, rich background
                padding: '120px 0 0 0',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflow: 'hidden',
                minHeight: '100vh',
            }}
        >
            {/* Background Dynamic Layer (Blurred Photo) */}
            {mentorsList.map((mentor, index) => (
                <div
                    key={`bg-${index}`}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${mentor.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: mentor.imagePosition,
                        filter: 'blur(100px) brightness(0.25)',
                        opacity: selectedIndex === index ? 1 : 0,
                        transition: 'opacity 0.8s ease',
                        zIndex: 0
                    }}
                />
            ))}

            <div style={{ maxWidth: 1280, width: '100%', display: 'flex', flexDirection: 'column', gap: 48, position: 'relative', zIndex: 1, padding: '0 5%' }}>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                    <span style={{ color: 'var(--accent)', fontSize: 14, fontWeight: '800', letterSpacing: 4, textTransform: 'uppercase' }}>Expertos Activos del Mercado</span>
                    <h2 style={{ color: 'var(--white)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '900', margin: 0, letterSpacing: '-1.5px' }}>Validados por la Industria</h2>
                    <p style={{ color: 'var(--white-60)', fontSize: 18, maxWidth: 650, margin: 0, lineHeight: 1.6 }}>
                        Aprende directamente de los profesionales que hoy lideran las empresas más importantes del país y potencia tu perfil.
                    </p>
                </div>
            </div>

            {/* Seamless Expanding Row */}
            <div
                ref={containerRef}
                style={{
                    display: 'flex',
                    width: '100%',
                    height: 'clamp(500px, 80vh, 850px)', // Slightly taller to accommodate lists
                    marginTop: 64,
                    flexDirection: window.innerWidth < 1024 ? 'column' : 'row',
                    background: 'rgba(0,0,0,0.4)',
                    position: 'relative',
                    zIndex: 2,
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                }}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                {mentorsList.map((mentor, index) => {
                    const isSelected = selectedIndex === index;
                    const isHovered = hoveredIndex === index && selectedIndex === null;
                    const isAnythingSelected = selectedIndex !== null;

                    let flexValue = 1;
                    if (isAnythingSelected) {
                        flexValue = isSelected ? 12 : 1;
                    } else if (hoveredIndex !== null) {
                        flexValue = isHovered ? 3 : 0.7;
                    }

                    return (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onClick={() => setSelectedIndex(isSelected ? null : index)}
                            style={{
                                flex: flexValue,
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
                                cursor: 'pointer',
                                borderRight: index < mentorsList.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                                borderBottom: window.innerWidth < 1024 && index < mentorsList.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                transition: 'transform 0.8s ease'
                            }}>
                                <img
                                    src={mentor.image}
                                    alt={mentor.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: mentor.imagePosition, // Used for alignment
                                        transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
                                        filter: (isSelected || isHovered) ? 'grayscale(0%) brightness(0.9)' : 'grayscale(100%) brightness(0.4)',
                                        transform: isSelected ? 'scale(1.05)' : (isHovered ? 'scale(1.02)' : 'scale(1)')
                                    }}
                                />
                            </div>

                            {/* Premium Dark Gradient Overlay */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: isSelected
                                    ? 'linear-gradient(to right, rgba(4,30,38,0.98) 0%, rgba(4,30,38,0.3) 50%, rgba(4,30,38,0.98) 100%)'
                                    : 'linear-gradient(to top, rgba(4,30,38,0.9) 0%, transparent 60%)',
                                transition: 'background 0.8s ease'
                            }} />

                            {/* Text Label (Vertical when collapsed) */}
                            {(!isSelected && !isAnythingSelected) && (
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%) rotate(-90deg)',
                                    whiteSpace: 'nowrap',
                                    color: isHovered ? 'var(--white)' : 'rgba(255,255,255,0.5)',
                                    fontSize: 14,
                                    fontWeight: '800',
                                    textTransform: 'uppercase',
                                    letterSpacing: 4,
                                    pointerEvents: 'none',
                                    opacity: 1,
                                    transition: 'all 0.3s ease'
                                }}>
                                    {mentor.name.split(' ')[0]} {mentor.name.split(' ')[1]}
                                </div>
                            )}

                            {/* Expanded Content Interface */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                padding: isSelected ? '64px' : '40px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                pointerEvents: 'none',
                                opacity: (isHovered || isSelected) ? 1 : 0,
                                transition: 'all 0.6s ease'
                            }}>
                                <div style={{
                                    maxWidth: isSelected ? '700px' : '100%',
                                    transform: isSelected ? 'translateY(0)' : 'translateY(20px)',
                                    transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
                                }}>
                                    <div style={{ color: 'var(--accent)', fontSize: 13, fontWeight: '900', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>
                                        {mentor.currentCompany}
                                    </div>
                                    <h3 style={{
                                        color: 'var(--white)',
                                        fontSize: isSelected ? 'clamp(36px, 4vw, 56px)' : 28,
                                        fontWeight: '900',
                                        margin: 0,
                                        lineHeight: 0.9,
                                        letterSpacing: '-2px'
                                    }}>
                                        {mentor.name.split(' ')[0]}<br />
                                        <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.6)' }}>
                                            {mentor.name.split(' ').slice(1).join(' ')}
                                        </span>
                                    </h3>

                                    {isSelected && (
                                        <div style={{ marginTop: 32, animation: 'slideUp 0.8s ease forwards' }}>

                                            {/* Bullet Points Rendering */}
                                            <ul style={{
                                                listStyle: 'none',
                                                padding: 0,
                                                margin: '0 0 40px 0',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 16
                                            }}>
                                                {mentor.details.map((detail, idx) => (
                                                    <li key={idx} style={{
                                                        color: 'var(--white-80)',
                                                        fontSize: 16,
                                                        lineHeight: 1.5,
                                                        display: 'flex',
                                                        alignItems: 'flex-start',
                                                        gap: 12,
                                                        fontWeight: '500'
                                                    }}>
                                                        <div style={{ color: 'var(--accent)', marginTop: 2 }}>
                                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                        </div>
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>

                                            <button style={{
                                                padding: '16px 32px',
                                                background: 'var(--accent)',
                                                color: 'var(--primary)',
                                                border: 'none',
                                                borderRadius: '16px',
                                                fontWeight: '900',
                                                fontSize: 16,
                                                cursor: 'pointer',
                                                pointerEvents: 'auto',
                                                boxShadow: '0 10px 30px rgba(249, 169, 72, 0.3)',
                                                transition: 'transform 0.2s ease'
                                            }}
                                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                            >
                                                Agendar Mentoría
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {isSelected && (
                                <div
                                    onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
                                    style={{
                                        position: 'absolute',
                                        top: 32,
                                        right: 32,
                                        width: 48,
                                        height: 48,
                                        borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: 'white',
                                        cursor: 'pointer',
                                        zIndex: 100,
                                        transition: 'background 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </div>
                            )}

                        </div>
                    );
                })}
            </div>

            <style>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
};
