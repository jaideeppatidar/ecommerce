import React from 'react';
import './OrderHistoryPage.css';
const OrderHistoryPage = () => {
  const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
  return (
    <div className="container">
      <h1>Order History</h1>
      {orderHistory.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="grid-container">
          {orderHistory.map((order) => (
            <div className="card" key={order.id}>
                <h3>Order Date: {order.date}</h3>
                <p>Name: {order.name}</p>
                <p>Email: {order.email}</p>
                <p>Number: {order.number}</p>
                <p>Address: {order.address}</p>
                <p>Address 1: {order.address1}</p>
                <p>Pincode: {order.pincode}</p>
                <ul className="order-list">
                  {order.items ? (
                    order.items.map((item) => (
                      <li key={item.id} className="order-list-item">
                        <img src={item.image} alt={item.name} className="order-image" />
                        <div className="order-details">
                          <h4>{item.name}</h4>
                          <p>Quantity: {item.quantity}</p>
                          <p>Price: ${item.price}</p>
                        </div>
                      </li>
                    ))
                  ) : (
                    <li>No items found for this order.</li>
                  )}
                </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default OrderHistoryPage;
