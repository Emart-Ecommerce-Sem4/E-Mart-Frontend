import { Grid, ListItem } from '@mui/material';
import React from 'react';
import SignNavBar from '../../components/SignNavBar';

export default function ShoppingCart() {
  return (
    <div class = "bg-dark text-white">
      <div>
        <SignNavBar />
      </div>
      <div style={{paddingLeft : '108px'}}>
        <h1 style={{color : 'white'}}>SHOPPING CART</h1>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ListItem>xs=6 md=8</ListItem>
          </Grid>
          <Grid item xs={6} >
            <ListItem>xs=6 md=4</ListItem>
          </Grid>
        </Grid> 
      </div>
    </div>
  );
}
