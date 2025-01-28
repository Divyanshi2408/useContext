import React, { createContext, useContext, useState } from "react";

// Define translations for supported languages
const translations = {
  en: {
    greeting: "Hello",
    selectLanguage: "Select Language:",
  },
  es: {
    greeting: "Hola",
    selectLanguage: "Selecciona idioma:",
  },
  fr: {
    greeting: "Bonjour",
    selectLanguage: "Choisir la langue :",
  },
};

// Create the Language Context
const LanguageContext = createContext();

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  // Function to switch languages
  const switchLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, translations, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use Language Context
export const useLanguage = () => useContext(LanguageContext);
