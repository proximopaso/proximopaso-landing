import { useState } from 'react';
import { initialSurveyState } from '../models/SurveyEntity';
import {supabase} from "../../../lib/supabase.js";

export const useSurveyForm = () => {
    const [formData, setFormData] = useState(initialSurveyState);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        setFormData(prev => {
            const currentList = prev[name];
            return checked
                ? { ...prev, [name]: [...currentList, value] }
                : { ...prev, [name]: currentList.filter(item => item !== value) };
        });
    };
    const submitForm = async () => {
        setLoading(true);

        const { error } = await supabase.from('leads').insert([formData]);
        setLoading(false);

        if (error) throw error;
        return true;
    };
    return { formData, handleChange, handleCheckboxChange, submitForm, loading };
};