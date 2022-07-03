import {
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Box,
  Select,
  Typography,
  CssBaseline,
  Stack,
} from '@mui/material';
import React, { useState } from 'react';
import HomeNavBar from '../../components/HomeNavBar';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import { TransitionGroup } from 'react-transition-group';
import Button from '@mui/material/Button';
import HeightBox from '../../components/HeightBox';
import CartItem from '../../components/CartItem';

const dummyData = [
  {
    id: '1',
    productName: 'Laptop',
    image: './images/test.jpg',
    specifications: ['Small', '15.6 inch', 'Apple product'],
    price: 1200,
    quantity: 1,
  },
  {
    id: '2',
    productName: 'Laptop',
    image: './images/test.jpg',
    specifications: ['Small', '15.6 inch', 'Apple product'],
    price: 1200,
    quantity: 1,
  },
];

export default function ShoppingCart() {
  const [selectedProducts, setSelectedProducts] = useState(dummyData);
  const [totalAmount, setTotalAmount] = useState(25);

  const removeProduct = (item) => {
    setSelectedProducts((prev) => [...prev.filter((i) => i.id !== item)]);
  };

  return (
    <div>
      <CssBaseline />
      <HomeNavBar />
      <HeightBox height={50} />
      <div style={{ paddingLeft: '108px' }}>
        <Typography variant="h5">Shopping Cart</Typography>
        <HeightBox height={30} />
        {selectedProducts.length === 0 && (
          <Typography variant="h5" color="secondary">
            Your cart is empty add items to cart to proceed
          </Typography>
        )}
        <Stack direction="row" spacing={15}>
          <List>
            <TransitionGroup>
              {selectedProducts.map((item) => (
                <Collapse key={item.id}>
                  <CartItem
                    item={item}
                    remove={() => {
                      // Remove this item
                      removeProduct(item.id);
                    }}
                  />
                </Collapse>
              ))}
            </TransitionGroup>
          </List>

          {selectedProducts.length > 0 && (
            <Box textAlign={'center'}>
              <Typography variant="h5">Total Amount</Typography>
              <HeightBox height={5} />
              <Typography variant="h3" color="primary" fontWeight="bold">
                {`$ ${totalAmount}`}
              </Typography>
              <HeightBox height={20} />
              <Button variant="contained" color="secondary">
                Go to Checkout
              </Button>
            </Box>
          )}
        </Stack>
      </div>
    </div>
  );
}