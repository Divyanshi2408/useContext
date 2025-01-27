import React from 'react'
import ThemedComponent from "./Theme Toggle/ThemedComponent";
import { ThemeProvider } from "./Theme Toggle/ThemeContext";
import ThemeToggle from "./Theme Toggle/ThemeToggle";

const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <ThemeToggle/>
      </div>
    </ThemeProvider>
  )
}

export default App