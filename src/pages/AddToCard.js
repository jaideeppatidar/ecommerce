
import React, { useState } from 'react';
import { getCart, removeFromCart } from '../utils/AddToCart';
import './AddToCard.css';
import OrderPopup from './OrderPopup';

const AddToCard = () => {
  const [isOrderPopupOpen, setOrderPopupOpen] = useState(false);
  const handleOrderClick = () => {
    saveOrderToHistory();
    setOrderPopupOpen(true);
  };

  const handleClosePopup = () => {
    setOrderPopupOpen(false);
  };

  const cart = getCart();

  const handleRemove = (productId) => {
    removeFromCart(productId);
    window.location.reload();
  };

  const saveOrderToHistory = () => {
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    const newOrder = {
      id: Date.now(),
      items: cart,
      date: new Date().toLocaleDateString(),
    };
    orderHistory.push(newOrder);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
  };

  return (
    <div className="cart-containers">
      <div className="cart-container">
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="cart-items">
            {cart.map((product) => (
              <div className="cart-item" key={product.id}>
                <img src={product.image} alt={product.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{product.name}</h3>
                  <p>Quantity: {product.quantity}</p>
                  <p>Price: ${product.price}</p>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <button onClick={() => handleRemove(product.id)} className="remove-button">
                      Remove
                    </button>
                    <button onClick={handleOrderClick} className="remove-button">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <OrderPopup open={isOrderPopupOpen} onClose={handleClosePopup} />
      </div>
    </div>
  );
};

export default AddToCard;


