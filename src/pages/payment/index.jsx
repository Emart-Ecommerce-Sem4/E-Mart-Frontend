import { CssBaseline, Stack, Typography, Button, RadioGroup } from '@mui/material';
import React from 'react';
import HomeNavBar from '../../components/HomeNavBar';
import PAYMENT_IMAGE from '../../assets/payment.png';
import HeightBox from '../../components/HeightBox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

export default function Payment() {
  return (
    <div>
      <CssBaseline />
      <HomeNavBar />
      <Stack direction="row" spacing={10} justifyContent="center">
        <div style={{width : "675px"}}>
          <HeightBox height={100} />
          <Typography>
            <h1 style={{textAlign : "center"}}>PAYMENT METHOD</h1>
          </Typography>
          <HeightBox height={50} />
          <div style={{paddingLeft : 210}}>
            <FormGroup>
              <RadioGroup>
                <FormControlLabel value="a" control={<Radio />} label="Credit Card / Debit Card" />
                <FormControlLabel value="b" control={<Radio />} label="Paypal" />
                <FormControlLabel value="c" control={<Radio />} label="Cash on Delivery" />
              </RadioGroup>
            </FormGroup>  
          </div>
          <HeightBox height={50} />
          <div style={{textAlign : "center"}}>
            <Button variant="contained" color="secondary">
              Proceed Checkout
            </Button>
          </div>
        </div>
        <div>
          <img
            src={PAYMENT_IMAGE}
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
