// --- COMPONENTES DEL FORMULARIO ---

// Etiqueta de la pregunta (Cambiado a un <label> por semántica y accesibilidad)
export const QuestionLabel = ({ text }) => (
    <label style={{ display: 'block', color: 'var(--primary)', fontSize: 13, fontWeight: '700', marginBottom: 'var(--space-xs)' }}>
        {text}
    </label>
);

// Input de Texto
export const TextInput = ({ label, placeholder, isTextArea = false, value, onChange, name }) => {
    const baseStyles = {
        width: '100%',
        padding: 'var(--space-md) var(--space-lg)',
        background: 'var(--white)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--primary-10)',
        color: 'var(--text-gray)',
        fontSize: 13,
        fontFamily: 'inherit', // Hereda la fuente Lexend
        boxSizing: 'border-box',
        outline: 'none',
        resize: isTextArea ? 'vertical' : 'none' // Permite agrandar el textarea solo hacia abajo
    };

    return (
        <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', marginBottom: 'var(--space-xl)' }}>
            <QuestionLabel text={label} />
            {isTextArea ? (
                <textarea
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    style={{ ...baseStyles, minHeight: 100 }}
                />
            ) : (
                <input
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    style={baseStyles}
                />
            )}
        </div>
    );
};

// Select / Dropdown
export const SelectInput = ({ label, value, onChange, name, options = [] }) => (
    <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: "var(--space-sm)", marginBottom: 'var(--space-xl)' }}>
        <QuestionLabel text={label} />
        <div style={{ position: 'relative', height: 46 }}>
            <select
                name={name}
                value={value}
                onChange={onChange}
                style={{
                    width: '100%', height: '100%', padding: '0 var(--space-lg)', background: 'var(--white)',
                    borderRadius: 'var(--radius-md)', border: '1px solid var(--primary-10)', color: 'var(--text-gray)',
                    fontSize: 13, fontFamily: 'inherit', outline: 'none', appearance: 'none', cursor: 'pointer'
                }}
            >
                <option value="" disabled>Selecciona una opción</option>
                {options.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                ))}
            </select>
            {/* Icono de flecha posicionado sobre el select nativo */}
            <div style={{ position: 'absolute', right: 16, top: '50%', width: 8, height: 8, borderRight: '1.5px solid var(--text-gray)', borderBottom: '1.5px solid var(--text-gray)', transform: 'translateY(-70%) rotate(45deg)', pointerEvents: 'none' }} />
        </div>
    </div>
);

// Opciones de Radio Button
export const RadioOption = ({ text, checked, onChange, value, name }) => (
    /* Usamos <label> para que hacer clic en el texto también seleccione el radio */
    <label style={{ cursor: 'pointer', alignSelf: 'stretch', padding: 'var(--space-md)', background: checked ? 'var(--primary-10)' : 'var(--white)', borderRadius: 'var(--radius-md)', border: `1px solid ${checked ? 'var(--primary)' : 'var(--primary-10)'}`, display: 'flex', alignItems: 'center', gap: 'var(--space-md)', transition: 'all 0.2s' }}>
        <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            style={{ display: 'none' }} // Ocultamos el input feo del navegador
        />
        {/* Nuestro radio button custom */}
        <div style={{ width: 16, height: 16, borderRadius: '50%', border: `1.5px solid ${checked ? 'var(--primary)' : 'var(--text-gray)'}`, background: 'var(--white)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {checked && <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)' }} />}
        </div>
        <span style={{ color: checked ? 'var(--primary)' : 'var(--text-gray)', fontSize: 13, fontWeight: checked ? '600' : '400' }}>{text}</span>
    </label>
);

// Opciones tipo "Píldora" o Checkbox (Multiselección)
export const PillOption = ({ text, checked, onChange, value, name }) => (
    <label style={{ cursor: 'pointer', height: 42, padding: '0 var(--space-md)', background: checked ? 'var(--primary)' : 'var(--white)', borderRadius: 'var(--radius-md)', border: '1px solid var(--primary-10)', display: 'flex', alignItems: 'center', gap: 'var(--space-md)', transition: 'all 0.2s' }}>
        <input
            type="checkbox"
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            style={{ display: 'none' }}
        />
        {/* Nuestro checkbox custom */}
        <div style={{ width: 16, height: 16, borderRadius: 4, border: `1.5px solid ${checked ? 'var(--white)' : 'var(--text-gray)'}`, background: checked ? 'var(--primary)' : 'var(--white)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {checked && <div style={{ width: 8, height: 4, borderLeft: '2px solid white', borderBottom: '2px solid white', transform: 'rotate(-45deg) translateY(-1px)' }} />}
        </div>
        <span style={{ color: checked ? 'var(--white)' : 'var(--text-gray)', fontSize: 13, fontWeight: checked ? '600' : '400' }}>{text}</span>
    </label>
);

// Opciones de Calificación
export const RatingOption = ({ label, isActive, onClick }) => (
    <div onClick={onClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-xs)', cursor: 'pointer', transition: 'all 0.2s' }}>
        <div style={{ width: isActive ? 30 : 25, height: isActive ? 27.5 : 25, background: isActive ? 'var(--accent)' : 'var(--bg-light-80)', borderRadius: 4, transition: 'all 0.2s' }} />
        <span style={{ color: isActive ? 'var(--accent)' : 'var(--text-gray)', fontSize: 12, fontWeight: '700', textTransform: 'uppercase' }}>{label}</span>
    </div>
);