import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Grid container className="footerContent">
          <Grid item xs={12} md={6} className="footerLinks">
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <nav>
              <Link href="#" color="inherit" variant="body2">
                Home
              </Link>
              <Link href="#" color="inherit" variant="body2">
                Products
              </Link>
              <Link href="#" color="inherit" variant="body2">
                About Us
              </Link>
              <Link href="#" color="inherit" variant="body2">
                Contact Us
              </Link>
            </nav>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" align="center" gutterBottom>
              Connect with us:
            </Typography>
            <div className="socialIcons">
              <Facebook />
              <Twitter />
              <Instagram />
              <LinkedIn />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center" color="inherit">
              &copy; {new Date().getFullYear()} E-commerce App. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
