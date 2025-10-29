import React from "react";
function Card({ productName, price, description }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      margin: "16px",
      width: "250px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      backgroundColor: "#007BFF", 
    }}>
      <h2>{productName}</h2>
      <p><strong>Price:</strong> ${price}</p> 
      <p>{description}</p>
    </div>
  );
}

export default Card;

