// src/utils/AddToCart.js
export const addToCart = (product) => {
    let cart = localStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];
  
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  export const getCart = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  };
  
  export const removeFromCart = (productId) => {
    let cart = localStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];
  
    const updatedCart = cart.filter((item) => item.id !== productId);
  
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  