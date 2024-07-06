
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/header/header';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductListingPage from './pages/ProductListingPage';
import ImageSlider from './common/slider';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AddToCard from './pages/AddToCard';
import Footer from './components/footer/Footer';
import Login from '../src/auth/login';
import Register from '../src/auth/register';
import { Container, Typography } from '@mui/material';
import OrderHistoryPage from './pages/OrderHistoryPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (username, password) => {
    const defaultUsername = 'admin';
    const defaultPassword = 'admin';

    if (username === defaultUsername && password === defaultPassword) {
      setIsAuthenticated(true);
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleRegister = (username, password) => {
    navigate('/login');
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductListingPage />} />
        <Route path="/addtocard" element={<AddToCard />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register handleRegister={handleRegister} />} />
        <Route path="/home" element={
          isAuthenticated ? (
            <Container>
              <Typography variant="h4">Welcome Home!</Typography>
            </Container>
          ) : (
            <Typography variant="h4">Please login</Typography>
          )
        } />
         <Route path="/orderhistory" element={
            isAuthenticated ? (
              <OrderHistoryPage />
            ) : (
              <div style={{ width:'100%' ,height:'100vh',paddingTop:'300px', display:'flex' ,justifyContent:'center'}}>
              <Typography variant="h4">Please login</Typography>
            
            </div>
            )
          } />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
