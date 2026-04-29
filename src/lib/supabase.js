import {createClient} from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// Mock para evitar errores si no hay credenciales de Supabase configuradas
export const supabase = (supabaseUrl && supabaseUrl !== 'your_supabase_project_url') 
    ? createClient(supabaseUrl, supabaseKey)
    : {
        from: () => ({
            insert: async (data) => {
                console.log("DEBUG: Supabase Mock Insert:", data);
                await new Promise(resolve => setTimeout(resolve, 800)); // Simular latencia
                return { error: null };
            },
            select: () => ({
                data: [],
                error: null
            })
        })
    };