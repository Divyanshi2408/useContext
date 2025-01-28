import React from "react";
import { useLanguage } from "./LanguageContext";

const LanguageSelector = () => {
  const { language, switchLanguage, translations } = useLanguage();

  return (
    <div style={{ marginBottom: "20px" }}>
      <label>{translations[language].selectLanguage}</label>
      <select
        value={language}
        onChange={(e) => switchLanguage(e.target.value)}
        style={{ marginLeft: "10px", padding: "5px" }}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
