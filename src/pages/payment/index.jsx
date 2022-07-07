import {
  CssBaseline,
  Stack,
  Typography,
  Button,
  RadioGroup,
} from '@mui/material';
import React, { useState } from 'react';
import HomeNavBar from '../../components/HomeNavBar';
import PAYMENT_IMAGE from '../../assets/payment.png';
import HeightBox from '../../components/HeightBox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('card');

  function proceedToCheckOut() {
    // Check the payment method and route to corresponding page
  }

  return (
    <div>
      <CssBaseline />
      <HomeNavBar />
      <Stack direction="row" spacing={10} justifyContent="center">
        <div style={{ width: '675px' }}>
          <HeightBox height={100} />
          <Typography variant="h4" textAlign="center">
            Select Payment Method
          </Typography>
          <HeightBox height={50} />
          <div style={{ paddingLeft: 210 }}>
            <FormGroup
              onChange={(event) => {
                setPaymentMethod(event.target.value);
              }}
            >
              <RadioGroup defaultValue="card">
                <FormControlLabel
                  value="card"
                  control={<Radio />}
                  label="Credit Card / Debit Card"
                />
                <FormControlLabel
                  value="paypal"
                  control={<Radio />}
                  label="Paypal"
                />
                <FormControlLabel
                  value="cash-on-delivery"
                  control={<Radio />}
                  label="Cash on Delivery"
                />
              </RadioGroup>
            </FormGroup>
          </div>
          <HeightBox height={50} />
          <div style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={proceedToCheckOut}
            >
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
