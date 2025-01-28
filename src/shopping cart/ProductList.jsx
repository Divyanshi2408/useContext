import React from "react";
import { useCart } from "./CartContext";

const products = [
  { id: 1, name: "Product A", price: 100 },
  { id: 2, name: "Product B", price: 200 },
  { id: 3, name: "Product C", price: 300 },
];

const ProductList = () => {
  const { addItem } = useCart();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <span>{product.name} - ₹{product.price}</span>
          <button
            onClick={() => addItem(product)}
            style={{ marginLeft: "10px", padding: "5px 10px" }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
