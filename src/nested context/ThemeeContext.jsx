import React, { createContext, useContext, useState } from "react";

const ThemeeContext = createContext();

export const ThemeeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeeContext);
