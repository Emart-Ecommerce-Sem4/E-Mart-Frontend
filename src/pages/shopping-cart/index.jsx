import { Grid, ListItem,  FormControl, InputLabel , MenuItem , Box , Select  } from '@mui/material';
import React from 'react';
import SignNavBar from '../../components/SignNavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function ShoppingCart() {

  const [quentity, setQuentity] = React.useState('');

  const handleChange = (event) => {
    setQuentity(event.target.value);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div class = "bg-dark text-white">
        <div>
          <SignNavBar />
        </div>
        <div style={{paddingLeft : '108px'}}>
          <h1>SHOPPING CART</h1>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={3}>
                  <img src= "../ShoppingCart_1.png" />
                </Grid>
                <Grid item xs={4}>
                  <h3> Lovely Teady </h3> 
                  <p> medium size </p> 
                </Grid>

                <Grid item xs={2} >
                  $12.50
                </Grid>

                <Grid item xs={2} >
                  <Box sx={{ minWidth: 20 }}>
                    <FormControl fullWidth >
                      <InputLabel id="demo-simple-select-label">Quentity</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={quentity}
                        label="Quentity"
                        onChange={handleChange}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>                            
                </Grid>
                
              </Grid>
            </Grid>
            <Grid item xs={6} >
              <ListItem>xs=6 md=4</ListItem>
            </Grid>
          </Grid> 
        </div>
      </div>
    </ThemeProvider>
  );
}
