import { useState, useCallback } from 'react';
import { LanguageContext } from './LanguageContext';
import translations from '../translations'; // Adjust path if necessary

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = useCallback(() => {
        setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
    }, []);

    const t = (key) => translations[language]?.[key] || key;

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}