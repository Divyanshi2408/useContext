import React, { createContext, useContext, useState } from "react";

// Create Authentication Context
const AuthContext = createContext();

// AuthProvider: Provides authentication state and functions
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // `user` will be null when logged out

  // Simulated login function
  const login = (username, password) => {
    // Replace this with actual authentication logic
    if (username === "test" && password === "password") {
      setUser({ username });
      return true;
    }
    return false;
  };

  // Simulated logout function
  const logout = () => {
    setUser(null);
  };

  // Simulated registration function
  const register = (username, password) => {
    // Implement registration logic here
    console.log(`Registered user: ${username}, Password: ${password}`);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for consuming AuthContext
export const useAuth = () => useContext(AuthContext);
