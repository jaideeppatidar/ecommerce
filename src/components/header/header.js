import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <AppBar position="fixed" sx={{ height: 70 , }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{display:"flex" , justifyContent:"center",gap:"80px" }}  >
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <Box
            component="img"
            sx={{
              height: 70,
              marginRight: 2,
            }}
            alt="Logo"
            src={`${process.env.PUBLIC_URL}/assets/images/logo1-removebg-preview.png`}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'center',  }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', marginRight: '1rem' }}>
            <Typography variant="body1" style={{ fontSize:"20px"}} >Home</Typography>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit', marginRight: '1rem' }}>
            <Typography variant="body1" style={{ fontSize:"20px"}} >About</Typography>
          </Link>
          <Link to="/addtocard" style={{ textDecoration: 'none', color: 'inherit', marginRight: '1rem' }}>
            <Typography variant="body1" style={{ fontSize:"20px"}} >AddToCard</Typography>
          </Link>
          <Link to="/product" style={{ textDecoration: 'none', color: 'inherit', marginRight: '1rem' }}>
            <Typography variant="body1" style={{ fontSize:"20px"}} >Products</Typography>
          </Link>
        </Box>
        </div>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/login" style={{ textDecoration: 'none', color: 'inherit', marginRight: '1rem' }}>
            <Typography variant="body1" style={{ fontSize:"20px"}}>Login</Typography>
          </Link>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
