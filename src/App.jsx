import React from 'react'
import ThemedComponent from "./Theme Toggle/ThemedComponent";
import { ThemeProvider } from "./Theme Toggle/ThemeContext";
import ThemeToggle from "./Theme Toggle/ThemeToggle";
import Login from './Global Authentication/Login';
import Register from './Global Authentication/Register';
import Logout from './Global Authentication/Logout';
import { AuthProvider } from './Global Authentication/AuthContext';

const App = () => {
  return (
    <><ThemeProvider>
      <ThemedComponent />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <ThemeToggle />
      </div>
    </ThemeProvider>
    <AuthProvider>
        <div>
          <Login />
          <Register />
          <Logout />
        </div>
      </AuthProvider></>
  )
}

export default App