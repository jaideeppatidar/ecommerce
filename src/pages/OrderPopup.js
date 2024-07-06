// src/components/OrderPopup.jsx
import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const OrderPopup = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    address: '',
    address1: '',
    pincode: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('orderData', JSON.stringify(formData));
        console.log(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Order Details</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="email"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="number"
          label="Number"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.number}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="address"
          label="Address"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.address}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="address1"
          label="Address 1"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.address1}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="pincode"
          label="Pincode"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.pincode}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderPopup;
