import React, { createContext, useContext, useState } from "react";

const LanguagesContext = createContext();

const languages = {
  en: { greeting: "Hello", description: "This is a multilingual app." },
  es: { greeting: "Hola", description: "Esta es una aplicación multilingüe." },
  fr: { greeting: "Bonjour", description: "Ceci est une application multilingue." },
};

export const LanguagesProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguagesContext.Provider value={{ language, languages, switchLanguage }}>
      {children}
    </LanguagesContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguagesContext);
