import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeddComponent = ({ override, children }) => {
  const { theme, overrideTheme } = useTheme();

  // Apply override theme if provided
  if (override) {
    overrideTheme(override);
  }

  const componentStyle = {
    background: theme.background,
    color: theme.color,
    padding: "20px",
    margin: "10px",
    borderRadius: "10px",
    textAlign: "center",
  };

  return <div style={componentStyle}>{children}</div>;
};

export default ThemeddComponent;
