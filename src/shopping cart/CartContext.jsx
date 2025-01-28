import React, { createContext, useContext, useState } from "react";

// Create the Cart Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Add item to cart
  const addItem = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setTotalPrice((prevTotal) => prevTotal + item.price);
  };

  // Remove item from cart
  const removeItem = (id) => {
    const itemToRemove = cart.find((item) => item.id === id);
    if (itemToRemove) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
      setTotalPrice((prevTotal) => prevTotal - itemToRemove.price);
    }
  };

  return (
    <CartContext.Provider value={{ cart, totalPrice, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use Cart Context
export const useCart = () => useContext(CartContext);
