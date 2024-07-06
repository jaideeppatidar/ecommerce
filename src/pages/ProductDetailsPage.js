

import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Api/productApi';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './ProductDetailsPage.css';
import { addToCart } from '../utils/AddToCart';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === parseInt(productId));

  if (!product) {
    return <h6>Product not found</h6>;
  }

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="product-details-container">
      <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <h3>Category: {product.category}</h3>
        <h6 className="product-price">Price: ${product.price}</h6>
        <div className="">
          <button
            className="add-to-cart-btn"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            onClick={() => handleAddToCart(product)}
          >
            Add To Cart <ShoppingBagIcon />
          </button>
          <span></span>
        </div>
        <div className='product-description-container'>
          <h3>Description: </h3>
          <p className="product-description"> {product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;


