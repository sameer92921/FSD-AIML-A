import React from "react";
import "./Book.css";

function Book({ image, title, price }) {
  return (
    <div className="book-card">
      <img src={image} alt={title} className="book-image" />
      <h3 className="book-title">{title}</h3>
      <p className="book-price">₹{price}/-</p>
      <button className="book-button" onClick={() => alert("Item added to cart")}>Add to Cart</button>
    </div>
  );
}

export default Book;
