import { Button, CssBaseline, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import api from '../../api';
import HeightBox from '../../components/HeightBox';
import NavBar from '../../components/NavBar';
import { addToCart } from '../../reducers/modules/cart';

export default function ProductPage(props) {
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const [variants, setVariants] = useState([]);
  const [selectedVariantId, setSelectedVariantId] = useState();
  const [selectedVariant, setSelectedVarinat] = useState();
  const [selectedImage, setSelectedImage] = useState('');
  const location = useLocation();
  const params = location.pathname.split('/');
  const productId = params[params.length - 1];

  async function getAllVariants() {
    try {
      const [code, res] = await api.variant.getVariantsForProduct(productId);
      if (res?.statusCode === 200) {
        setVariants(res?.data?.variants);
      }
    } catch (error) {}
  }

  async function getProduct() {
    try {
      const [code, res] = await api.product.getProduct(productId);
      if (res?.statusCode === 200) {
        setProduct(res?.data?.product);
        if (res?.data?.product?.images.length) {
          setSelectedImage(res?.data?.product?.images[0].image);
        }
      }
    } catch (error) {}
  }

  function addProductToCart() {
    const item = {
      unitPrice: selectedVariant?.unit_price,
      productId,
      variantId: selectedVariant?.variant_id,
      mainImage: selectedImage,
      items: 1,
      title: product?.title,
    };
    dispatch(addToCart(item));
  }

  React.useEffect(() => {
    getProduct();
    getAllVariants();
  }, [productId]);

  React.useEffect(() => {
    if (selectedVariantId) {
      const item = variants.find(
        (item) => item?.variant_id === selectedVariantId
      );
      setSelectedVarinat(item);
    } else {
      setSelectedVarinat(null);
    }
  }, [selectedVariantId]);

  return (
    <div>
      <CssBaseline />
      <NavBar />
      <HeightBox height={50} />
      <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto' }}>
        <Stack direction="row" spacing={10}>
          <div>
            <img src={selectedImage} alt="" style={{ width: 500 }} />

            <HeightBox height={10} />
            <div style={{ width: 500, overflowX: 'scroll' }}>
              <Stack direction="row">
                {product?.images.map((item) => (
                  <div>
                    <img
                      src={selectedImage}
                      alt=""
                      style={{ height: 100 }}
                      onClick={() => setSelectedImage(item?.image)}
                    />
                  </div>
                ))}
              </Stack>
            </div>
          </div>
          <div>
            <Typography variant="h4">{product?.title}</Typography>
            <HeightBox height={10} />
            <Typography color="text.secondary" variant="h6">
              Select Variant
            </Typography>
            <HeightBox height={20} />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Variant</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedVariantId}
                fullWidth
                label="Variant"
                onChange={(event) => {
                  setSelectedVariantId(event.target.value);
                }}
              >
                {variants.map((item) => (
                  <MenuItem value={item?.variant_id}>
                    {item?.variant_type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <HeightBox height={10} />
            {selectedVariant && (
              <Typography variant="p" color="red">
                {selectedVariant?.quantity_in_stock + ' in stock'}
              </Typography>
            )}
            <HeightBox height={20} />
            <Typography variant="h6" color="text.secondary" fontWeight="bold">
              Description
            </Typography>
            <HeightBox height={10} />
            <Typography variant="p">{selectedVariant?.description}</Typography>
            <HeightBox height={20} />
            {selectedVariant && (
              <Button
                variant="outlined"
                color="secondary"
                onClick={addProductToCart}
                startIcon={<AiOutlineShoppingCart />}
              >
                Add to Cart
              </Button>
            )}
            <HeightBox height={20} />
          </div>
        </Stack>
      </div>
    </div>
  );
}