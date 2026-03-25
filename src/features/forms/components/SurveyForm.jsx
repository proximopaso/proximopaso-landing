import {useSurveyForm} from "../hooks/useSurveryForm.js";
import {PillOption, QuestionLabel, RadioOption, RatingOption, SelectInput, TextInput} from "./FormsComponents.jsx";

export const SurveyForm = () => {
    const { formData, handleChange, handleCheckboxChange, submitForm, loading } = useSurveyForm();

    const handleSubmit = async () => {
        try {
            await submitForm();
            alert("¡Tus respuestas han sido registradas!");
            // Opcional: window.location.reload(); o setFormData(initialSurveyState);
        } catch (err) {
            alert("Error al enviar: " + err.message);
        }
    };


    return (
        <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
            {/* Q1, Q2, Q3 */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <TextInput label="1. Por favor bríndanos tu correo electrónico" placeholder="tu@correo.com" name="email" value={formData.email} onChange={handleChange} />

                <SelectInput label="2. ¿A qué universidad perteneces?" name="university" value={formData.university} onChange={handleChange} options={['UTP']} />

                <SelectInput label="3. ¿En qué ciclo te encuentras?" name="cycle" value={formData.cycle} onChange={handleChange} options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']} />

                {/* Q4 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)'}}>
                    <QuestionLabel text="4. Actualmente tú:" />
                    {['Solo estudias', 'Buscas prácticas', 'Buscas trabajo', 'Trabajo y estudio', 'Ya tengo prácticas'].map(opt => (
                        <RadioOption key={opt} text={opt} name="current_status" value={opt} checked={formData.current_status === opt} onChange={handleChange} />
                    ))}
                </div>
            </div>

            {/* Q5 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <QuestionLabel text="5. ¿Qué es lo más difícil al buscar prácticas o empleo?" />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
                    {['No tengo experiencia', 'No sé hacer un buen CV', 'No encuentro oportunidades', 'No paso entrevistas', 'No tengo contactos', 'No sé por dónde empezar', 'Me piden demasiada experiencia'].map(opt => (
                        <PillOption key={opt} text={opt} name="biggest_difficulty" value={opt} checked={formData.biggest_difficulty.includes(opt)} onChange={handleCheckboxChange} />
                    ))}
                </div>
            </div>

            {/* Q6 & Q7 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                    <QuestionLabel text="6. ¿Sientes que tu universidad te prepara bien?" />
                    {['Sí, definitivamente', 'Tal vez', 'No'].map(opt => (
                        <RadioOption key={opt} text={opt} name="university_preparation" value={opt} checked={formData.university_preparation === opt} onChange={handleChange} />
                    ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                    <QuestionLabel text="7. ¿Usarías esta plataforma paso a paso?" />
                    {['Sí, definitivamente', 'Tal vez', 'No'].map(opt => (
                        <RadioOption key={opt} text={opt} name="would_use_platform" value={opt} checked={formData.would_use_platform === opt} onChange={handleChange} />
                    ))}
                </div>
            </div>

            {/* Q8 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <QuestionLabel text="8. ¿Qué te gustaría encontrar en la plataforma?" />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
                    {['Guías para CV', 'Entrevistas', 'Ofertas prácticas', 'Mentorías', 'LinkedIn', 'Contacto empresas', 'Cursos cortos'].map(opt => (
                        <PillOption key={opt} text={opt} name="desired_features" value={opt} checked={formData.desired_features.includes(opt)} onChange={handleCheckboxChange} />
                    ))}
                </div>
            </div>

            {/* Q9 & Q10 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                    <QuestionLabel text="9. ¿Pagarías por mejorar?" />
                    {['Sí', 'Solo si es económico', 'Solo si es gratuito'].map(opt => (
                        <RadioOption key={opt} text={opt} name="willing_to_pay" value={opt} checked={formData.willing_to_pay === opt} onChange={handleChange} />
                    ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                    <QuestionLabel text="10. ¿Cuánto pagarías mensual?" />
                    {['S/10–15', 'S/20–25', 'S/30–40', 'No pagaría'].map(opt => (
                        <RadioOption key={opt} text={opt} name="monthly_payment_range" value={opt} checked={formData.monthly_payment_range === opt} onChange={handleChange} />
                    ))}
                </div>
            </div>

            {/* Q11 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)'}} >
                <TextInput label="11. ¿Qué debería tener Próximo Paso para que realmente la uses?" name="suggestions" placeholder="Tus sugerencias..." value={formData.suggestions} onChange={handleChange} isTextArea={true} />
            </div>

            {/* Q12 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                <QuestionLabel text="12. ¿Te gustó el prototipo?" />
                <div style={{ maxWidth: 400, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    {['No', 'Neutral', 'Sí', '¡Me encantó!'].map(opt => (
                        <RatingOption key={opt} label={opt} isActive={formData.prototype_rating === opt} onClick={() => handleChange({ target: { name: 'prototype_rating', value: opt }})} />
                    ))}
                </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
                onClick={handleSubmit}
                disabled={loading}
                style={{ width: '100%', padding: '20px', background: 'var(--primary)', borderRadius: 16, border: 'none', color: 'var(--white)', fontSize: 20, fontWeight: '900', cursor: 'pointer', boxShadow: '0px 10px 25px -5px rgba(0,0,0,0.1)', opacity: loading ? 0.7 : 1 }}
            >
                {loading ? "Enviando..." : "Enviar mis respuestas"}
            </button>

        </div>
    );
};