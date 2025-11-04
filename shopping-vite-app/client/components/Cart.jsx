import React from 'react';
import './Cart.css';

const Cart = ({ title, price, image, quantity, onRemove, onIncrement, onDecrement }) => {
  const totalPrice = price * quantity;

  return (
    <div className="card">
      <img src={image} width={200} height={200} alt="img" />
      <h2>{title}</h2>
      <h3>Price: ${price.toFixed(2)}</h3>
      <div className="quantity-controls">
        <button onClick={onDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrement}>+</button>
      </div>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button className="remove-btn" onClick={onRemove}>Remove</button>
    </div>
  );
};

export default Cart;
