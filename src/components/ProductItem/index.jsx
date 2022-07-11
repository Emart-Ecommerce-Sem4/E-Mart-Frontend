import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Button, Typography } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import api from '../../api';
import HeightBox from '../HeightBox';

export default function ProductItem(props) {
  const { product } = props;
  const [productImages, setProductImages] = useState();
  console.log(product);

  async function getProductImages(productId) {
    try {
      const [code, res] = await api.product.getImages(productId);
      if (res?.statusCode === 200) {
        setProductImages(res?.data?.images);
      }
    } catch (error) {}
  }

  React.useEffect(() => {
    if (product?.product_id) {
      getProductImages(product?.product_id);
    }
  }, product);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        sx={{ width: 345, height: 300, overflow: 'hidden' }}
        image={productImages[0]?.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" color="text.primary">
          {product?.title}
        </Typography>
        <HeightBox height={5} />
        <Typography variant="p" color="text.secondary">
          {`Weight: ${product?.weight}g`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button>See more</Button>
      </CardActions>
    </Card>
  );
}
