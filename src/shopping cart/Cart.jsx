import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, totalPrice, removeItem } = useCart();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              <span>{item.name} - ₹{item.price}</span>
              <button
                onClick={() => removeItem(item.id)}
                style={{ marginLeft: "10px", padding: "5px 10px" }}
              >
                Remove
              </button>
            </div>
          ))}
          <h3>Total: ₹{totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
