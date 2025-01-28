import React from 'react'
import ThemedComponent from "./Theme Toggle/ThemedComponent";
import { ThemeProvider } from "./Theme Toggle/ThemeContext";
import ThemeToggle from "./Theme Toggle/ThemeToggle";
import Login from './Global Authentication/Login';
import Register from './Global Authentication/Register';
import Logout from './Global Authentication/Logout';
import { AuthProvider } from './Global Authentication/AuthContext';
import { LanguageProvider } from "./Multilingual/LanguageContext";
import LanguageSelector from "./Multilingual/LanguageSelector";
import Greeting from "./Multilingual/Greeting";
import { CartProvider } from "./shopping cart/CartContext";
import ProductList from "./shopping cart/ProductList";
import Cart from "./shopping cart/Cart";
import { ThemesProvider } from "./hierarchical theming/ThemeContext";
import ThemeddComponent from "./hierarchical theming/ThemedComponent";
import { RoleProvider } from "./RBAC/RoleContext";
import Dashboard from "./RBAC/Dashboard";
import { ThemeeProvider } from "./nested context/ThemeeContext";
import { LanguagesProvider } from "./nested context/LanguagesContext";
import NestedComponent from "./nested context/NestedComponent";

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
      </AuthProvider>
      <LanguageProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <LanguageSelector />
        <Greeting />
      </div>
    </LanguageProvider>
    <CartProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
    <ThemesProvider>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Multi-Level Theming System</h1>
        <ThemeddComponent>
          <p>This is the default theme inherited from the provider.</p>

          <ThemeddComponent override={{ background: "lightblue", color: "darkblue" }}>
            <p>This component overrides the parent theme.</p>

            <ThemeddComponent override={{ background: "lightgreen", color: "darkgreen" }}>
              <p>This is a nested component with its own overridden theme.</p>
            </ThemeddComponent>
          </ThemeddComponent>
        </ThemeddComponent>
      </div>
    </ThemesProvider>
    <RoleProvider>
      <Dashboard />
    </RoleProvider>
    <ThemeeProvider>
      <LanguagesProvider>
        <div style={{ padding: "20px" }}>
          <h1>Multilingual & Theme-Aware App</h1>
          <NestedComponent />
        </div>
      </LanguagesProvider>
    </ThemeeProvider>
    </>
  )
}

export default App