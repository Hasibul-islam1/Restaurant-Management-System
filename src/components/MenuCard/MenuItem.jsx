import { Card, Rating, Typography, Button, Stack } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <Card 
      variant="outlined" 
      sx={{ 
        borderRadius: '15px', 
        p: 2, 
        textAlign: 'center', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        width: '260px', // Ensures a good card size
        height: '320px', // Adjusted for better spacing
      }} 
      className="MenuSingleCard"
    >
      {/* Image */}
      <img 
        src={item.image} 
        alt={item.name} 
        loading="lazy" 
        style={{ 
          width: '60%',  // Increased image width 
          height: '170px',  // Increased image height
          borderRadius: '10px', 
          objectFit: 'cover' 
        }} 
      />

      {/* Item Name */}
      <Typography component="div" variant="h6" sx={{ mt: 1 }}>
        {item.name}
      </Typography>

      {/* Rating */}
      <Rating value={4.5} precision={0.5} size="small" sx={{ my: 1 }} />

      {/* Description */}
      <Typography component="p" sx={{ color: '#666', fontSize: '14px' }}>
        {item.description}
      </Typography>

      {/* Price */}
      <Typography 
        className="card-price" 
        variant="h6" 
        component="div" 
        sx={{ mt: 1, fontWeight: 'bold', color: '#e52b34' }}
      >
        $ {item.price}
      </Typography>

      {/* Buttons */}
      <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2, width: '100%' }}>
  <Button 
    variant="contained" 
    color="primary" 
    startIcon={<ShoppingBagIcon sx={{ fontSize: '18px' }} />} 
    sx={{ 
      borderRadius: '18px', 
      height: '35px',  
      fontSize: '15px',  
      minWidth: '90px',  
      display: 'flex', 
      alignItems: 'center', // Ensures vertical alignment
      justifyContent: 'center', // Ensures text & icon are centered
      px: 1 // Adds padding to prevent cutting off text
    }}
  >
    Buy
  </Button>
  
  <Button 
    variant="outlined" 
    color="secondary" 
    startIcon={<ShoppingCartIcon sx={{ fontSize: '18px' }} />} 
    sx={{ 
      borderRadius: '18px', 
      height: '35px',  
      fontSize: '15px',  
      minWidth: '90px',
      display: 'flex', 
      alignItems: 'center', // Ensures vertical alignment
      justifyContent: 'center', // Ensures text & icon are centered
      px: 1 // Adds padding
    }}
  >
    Cart
  </Button>
</Stack>

    </Card>
  );
};

export default MenuItem;
