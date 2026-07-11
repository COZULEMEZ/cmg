import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import en from './en.json';
import tr from './tr.json';

const translations = { en, tr };

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const location = useLocation();
  const navigate = useNavigate();

  // On mount and on location change, detect language
  useEffect(() => {
    // 1. Check if URL has language prefix (e.g. /tr/...)
    const pathParts = location.pathname.split('/');
    const urlLang = pathParts[1];
    
    if (urlLang === 'tr') {
      setLang('tr');
      document.documentElement.lang = 'tr';
    } else if (urlLang === 'en') {
      setLang('en');
      document.documentElement.lang = 'en';
    } else {
      // If no prefix, detect from browser or localStorage
      const storedLang = localStorage.getItem('cmg_lang');
      let targetLang = 'en';
      
      if (storedLang && (storedLang === 'tr' || storedLang === 'en')) {
        targetLang = storedLang;
      } else {
        // 1. Detect Timezone (Geo-IP alternative)
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const isTurkey = timeZone === 'Europe/Istanbul';
        
        // 2. Detect browser language
        const browserLang = navigator.language || navigator.userLanguage;
        const isTurkishBrowser = browserLang && browserLang.toLowerCase().startsWith('tr');
        
        if (isTurkey || isTurkishBrowser) {
          targetLang = 'tr';
        }
      }
      
      setLang(targetLang);
      document.documentElement.lang = targetLang;
    }
  }, [location]);

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('cmg_lang', newLang);
    document.documentElement.lang = newLang;
    
    // Optional: automatically redirect to the language prefixed URL if not already there
    // For now we just update state so the UI translates instantly.
    // In a fully strictly siloed routing, we'd navigate to `/tr${location.pathname}`
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
      if (value) value = value[k];
      else break;
    }
    return value || key; // fallback to key if missing
  };

  return (
    <LanguageContext.Provider value={{ lang, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
