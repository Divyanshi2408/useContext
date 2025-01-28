import React from "react";
import { useLanguage } from "./LanguageContext";

const Greeting = () => {
  const { language, translations } = useLanguage();

  return (
    <h1>{translations[language].greeting}!</h1>
  );
};

export default Greeting;
