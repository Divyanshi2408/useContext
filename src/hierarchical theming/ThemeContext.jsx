import React, { createContext, useContext, useState } from "react";

// Default theme
const defaultTheme = {
  background: "white",
  color: "black",
};

// Create Theme Context
const ThemesContext = createContext();

// Theme Provider Component
export const ThemesProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  // Function to override theme
  const overrideTheme = (newTheme) => {
    setTheme((prevTheme) => ({ ...prevTheme, ...newTheme }));
  };

  // Function to reset to default theme
  const resetTheme = () => {
    setTheme(defaultTheme);
  };

  return (
    <ThemesContext.Provider value={{ theme, overrideTheme, resetTheme }}>
      {children}
    </ThemesContext.Provider>
  );
};

// Custom hook to use Theme Context
export const useTheme = () => useContext(ThemesContext);
