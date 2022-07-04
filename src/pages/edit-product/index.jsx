import { CssBaseline, Stack, Typography, Button, RadioGroup } from '@mui/material';
import React from 'react';
import HomeNavBar from '../../components/HomeNavBar';
import EDITPRODUCT_IMAGE from '../../assets/edit-product.png';
import HeightBox from '../../components/HeightBox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export default function EditProduct() {
  return (
    <div>
      <CssBaseline />
      <HomeNavBar />
      <Stack direction="row" spacing={10} justifyContent="center">
        <div style={{width : "675px"}}>
          <HeightBox height = {50} />
          <Typography>
            <h1> Edit Product</h1>
          </Typography>
          <HeightBox height = {15} />
          <TextField id="standard-basic" fullWidth label="Name of the product" variant="standard" />
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Price</InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </FormControl>
        </div>
        <div>
          <img
            src={EDITPRODUCT_IMAGE}
            alt=""
            width={400}
            align="right"
            // height={500}
          />
        </div>
      </Stack>
    </div>
  );
}
