import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import { CssBaseline, Grid } from '@mui/material';
import HeightBox from '../../components/HeightBox';
import CaraouselSlider from '../../components/Carousel';
import api from '../../api';
import ProductItem from '../../components/ProductItem';

export default function HomePage() {
  const [allProducts, setAllProducts] = useState([]);
  async function getAllProducts() {
    try {
      const [code, res] = await api.product.getAllProducts();
      if (res?.statusCode === 200) {
        setAllProducts(res?.data?.products);
      }
    } catch (error) {}
  }

  React.useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <CssBaseline />
      <NavBar />
      <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto' }}>
        <HeightBox height={30} />
        <CaraouselSlider />
        <HeightBox height={30} />
        <Grid container spacing={5}>
          {allProducts.map((item, i) => (
            <Grid item>
              <ProductItem key={i} product={item} />
            </Grid>
          ))}
        </Grid>
      </div>
      <HeightBox height={30} />
    </div>
  );
}
