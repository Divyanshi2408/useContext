import React from "react";
import { useTheme } from "./ThemeContext";

const ThemedComponent = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
        color: theme === "light" ? "#333" : "#f0f0f0",
        minHeight: "100vh",
      }}
    >
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <p>This is a {theme === "light" ? "bright and clear" : "dark and cozy"} theme!</p>
    </div>
  );
};

export default ThemedComponent;
