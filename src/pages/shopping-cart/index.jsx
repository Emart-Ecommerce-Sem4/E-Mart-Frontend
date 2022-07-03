import { Grid, FormControl, InputLabel , MenuItem , Box , Select  } from '@mui/material';
import React from 'react';
import HomeNavBar from '../../components/HomeNavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#ED6C02"),
  backgroundColor: "#ED6C02",
  '&:hover': {
    backgroundColor: "#ED6C02[900]",
  },
}));

export default function ShoppingCart() {

  const [quentity, setQuentity] = React.useState('');

  const handleChange = (event) => {
    setQuentity(event.target.value);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div class = "bg-dark text-white" style={{minHeight : '1080px'}}>
        <div>
          <HomeNavBar />
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

                <Grid item xs={2} alignItems = "center">
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
                <Grid item xs={1}>
                  <DeleteIcon></DeleteIcon>
                </Grid>
              </Grid>
              <br />
              <Divider />
              <br />
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
                <Grid item xs={1}>
                  <DeleteIcon></DeleteIcon>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} >
            </Grid>
            <Grid item xs = {4}>
              <Grid item xs = {12}>
                <Box
                  sx={{
                    width: "375px",
                    height: "140px",
                    backgroundColor: 'rgba(255,255,255,0.25)',
                    borderRadius : 10,
                    border : 3,
                    borderColor : '#fff',
                  }} 
                  textAlign={"center"}
                >
                  <h5 align = "center"> SUBTOTAL (3) ITEMS </h5>
                  <h1 align = "center" style={{color:"#ED6C02"}}> $25.30</h1>
                  <ColorButton style={{textAlign : "center"}} align = "center" variant="contained" >Custom CSS</ColorButton>
                </Box>
              </Grid>
            </Grid>
          </Grid> 
        </div>
      </div>
    </ThemeProvider>
  );
}
