import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        background: theme === "light" ? "#333" : "#fff",
        color: theme === "light" ? "#fff" : "#333",
        border: "none",
        borderRadius: "5px",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggler;
