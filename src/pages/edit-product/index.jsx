import { CssBaseline, Stack, Typography, Button} from '@mui/material';
import React from 'react';
import HomeNavBar from '../../components/HomeNavBar';
import EDITPRODUCT_IMAGE from '../../assets/edit-product.png';
import HeightBox from '../../components/HeightBox';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import MenuItem from '@mui/material/MenuItem';

const Input1 = styled('input')({
  display: 'none',
});

const catagories = [
  {
    value: 'Catagory 1',
    label: 'Catagory 1',
  },
  {
    value: 'Catagory 2',
    label: 'Catagory 2',
  },
  {
    value: 'Catagory 3',
    label: 'Catagory 3',
  },
  {
    value: 'Catagory 4',
    label: 'Catagory 4',
  },
];

export default function EditProduct() {

  const [catagory, setCatagory] = React.useState('EUR');

  const handleChange = (event) => {
    setCatagory(event.target.value);
  };

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
          <TextField id="standard-basic" fullWidth label="Name of the product" variant="standard" style={{marginBottom : 10 }}/>
          <FormControl fullWidth variant="standard" style={{marginBottom : 10 }}>
            <InputLabel htmlFor="standard-adornment-amount">Price</InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </FormControl>
          <Typography style={{marginBottom : 10 , opacity :0.3}}>
            Images
          </Typography >

          <label htmlFor="icon-button-file">
            <Input1 accept="image/*" id="icon-button-file" type="file" multiple />
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>

          <TextField id="standard-basic" fullWidth label="Brand" variant="standard" style={{marginBottom : 10 }}/>
          <TextField id="standard-basic" fullWidth label="Count in Stock" variant="standard" style={{marginBottom : 20 }}/>

          <div style={{marginBottom : 10 }}>
            <TextField
              select
              label="Catagory"
              value={catagory}
              onChange={handleChange}
              variant="standard"
              fullWidth
            >
              {catagories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <TextField id="standard-basic" fullWidth label="Description" variant="standard" style={{marginBottom : 20 }}/>

          <div style={{textAlign:"center"}}>
            <Button
              color="primary"
              variant="contained"
              sx={{ mt: 2, mb: 2 , width : 200}}
            >
              Update
            </Button>
          </div>
          

          
        </div>
        <div>
          <img
            src={EDITPRODUCT_IMAGE}
            alt=""
            width={500}
          />
        </div>
      </Stack>
    </div>
  );
}
