import React from "react";
import { useTheme } from "./ThemeeContext";
import { useLanguage } from "./LanguagesContext";

const NestedComponent = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, languages, switchLanguage } = useLanguage();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h1>{languages[language].greeting}</h1>
      <p>{languages[language].description}</p>
      <div>
        <button onClick={toggleTheme} style={{ margin: "5px" }}>
          Toggle Theme
        </button>
        <select
          onChange={(e) => switchLanguage(e.target.value)}
          value={language}
          style={{ margin: "5px" }}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>
    </div>
  );
};

export default NestedComponent;
