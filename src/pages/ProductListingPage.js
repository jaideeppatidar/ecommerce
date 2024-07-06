
import React, { useState, useEffect } from 'react';
import { products as initialProducts } from '../Api/productApi';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './ProductListingPage.css';
import { useNavigate } from 'react-router-dom';

const ProductListingPage = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState(initialProducts.slice(0, 5)); // Initially show only 5 products
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
  });
  const [sortOption, setSortOption] = useState('');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let filteredProducts = initialProducts;

    if (filters.category) {
      filteredProducts = filteredProducts.filter(product => product.category === filters.category);
    }

    if (filters.priceRange) {
      const priceRangeMap = {
        '$': [0, 50],
        '$$': [51, 100],
        '$$$': [101, 1000],
      };
      const [minPrice, maxPrice] = priceRangeMap[filters.priceRange];
      filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }

    if (sortOption) {
      filteredProducts.sort((a, b) => {
        if (sortOption === 'priceAsc') return a.price - b.price;
        if (sortOption === 'priceDesc') return b.price - a.price;
        return 0;
      });
    }

    setProducts(showAll ? filteredProducts : filteredProducts.slice(0, 5));
  }, [filters, sortOption, showAll]);

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const addToCart = (productId) => {
    // Implement your addToCart logic here
    console.log(`Product ${productId} added to cart`);
  };

  const viewDetails = (productId) => {
    navigate(`/product/${productId}`)
    console.log(`View details of product ${productId}`);
  };

  return (
    <div className="product-listing-page">
      <div className="sidebar">
        <div className="filters">
          <h3>Filters</h3>
          <div>
            <label>Category:</label>
            <select value={filters.category} onChange={(e) => handleFilterChange({ category: e.target.value })}>
              <option value="">All</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="furniture">Furniture</option>
              <option value="home appliances">Home Appliances</option>
              <option value="accessories">Accessories</option>
              <option value="home decor">Home Decor</option>
              <option value="lighting">Lighting</option>
              <option value="kitchen">Kitchen</option>
              <option value="office supplies">Office Supplies</option>
              <option value="books">Books</option>
              <option value="stationery">Stationery</option>
            </select>
          </div>
          <div>
            <label>Price Range:</label>
            <select value={filters.priceRange} onChange={(e) => handleFilterChange({ priceRange: e.target.value })}>
              <option value="">Any</option>
              <option value="$">$ (0-50)</option>
              <option value="$$">$$ (51-100)</option>
              <option value="$$$">$$$ (101-1000)</option>
            </select>
          </div>
        </div>
        <div className="sort">
          <h3>Sort By</h3>
          <select value={sortOption} onChange={(e) => handleSortChange(e.target.value)}>
            <option value="">None</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
          </select>
        </div>
        <button className="show-all-btn" onClick={handleShowAll}>
          {showAll ? 'Show Less' : 'Show All'}
        </button>
      </div>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img className='product-image' src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <div className="button-container">
              <button className="add-to-cart-btn" style={{ display:'flex' ,justifyContent:'center', alignItems:"center"}} onClick={() => viewDetails(product.id)}>
               View <RemoveRedEyeIcon/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;


