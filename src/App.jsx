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
    </>
  )
}

export default App