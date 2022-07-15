import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import { CssBaseline, Grid, Stack, Typography } from '@mui/material';
import HeightBox from '../../components/HeightBox';
import CaraouselSlider from '../../components/Carousel';
import api from '../../api';
import ProductItem from '../../components/ProductItem';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

export default function HomePage() {
  const [allProducts, setAllProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [allSubCategories, setAllSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [searchedText, setSearchedText] = useState('');

  async function getAllCategories() {
    try {
      const [code, res] = await api.category.getAllCategories();
      if (res?.statusCode === 200) {
        setAllCategories(res?.data);
      }
    } catch (error) {}
  }

  React.useEffect(() => {
    if (searchedText !== '') {
      const items = originalProducts.filter((item) =>
        item?.title.toLowerCase().includes(searchedText.toLowerCase())
      );
      setAllProducts(items);
    } else {
      setAllProducts(originalProducts);
    }
  }, [searchedText]);

  React.useEffect(() => {
    getAllCategories();
  }, []);

  async function getAllSubCategoriesForCategory() {
    try {
      const [code, res] = await api.subCategory.getSubCategoriesForCategory(
        selectedCategory
      );
      if (res?.statusCode === 200) {
        setAllSubCategories(res?.data?.subCategories);
      }
    } catch (error) {}
  }

  async function getProductsForCategory() {
    try {
      const [code, res] = await api.product.getProductsForCategory(
        selectedCategory
      );
      if (res?.statusCode === 200) {
        setAllProducts(res?.data?.products);
      }
    } catch (error) {}
  }

  async function getProductsForSubCategory() {
    try {
      const [code, res] = await api.product.getProductsForSubCategory(
        selectedSubCategory
      );
      if (res?.statusCode === 200) {
        setAllProducts(res?.data?.products);
      }
    } catch (error) {}
  }

  React.useEffect(() => {
    if (selectedSubCategory) {
      getProductsForSubCategory();
    }
  }, [selectedSubCategory]);

  React.useEffect(() => {
    if (selectedCategory) {
      getAllSubCategoriesForCategory();
      getProductsForCategory();
    }
  }, [selectedCategory]);

  async function getAllProducts() {
    try {
      const [code, res] = await api.product.getAllProducts();
      if (res?.statusCode === 200) {
        setAllProducts(res?.data?.products);
        setOriginalProducts(res?.data?.products);
      }
    } catch (error) {}
  }

  React.useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <CssBaseline />
      <NavBar searchedText={searchedText} setSearchedText={setSearchedText} />
      <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto' }}>
        <HeightBox height={10} />
        <Stack direction="row" alignItems="center">
          <Typography variant="h5">Sort By</Typography>
          <div style={{ width: 20 }} />
          <FormControl
            variant="outlined"
            sx={{ m: 1, minWidth: 175 }}
            size="small"
          >
            <InputLabel id="demo-simple-select-label">
              Shop by Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              label="Shop by Catagory"
              onChange={(event, value) => {
                if (value?.props?.value) {
                  setSelectedCategory(value?.props?.value);
                } else {
                  setSelectedCategory('');
                }
              }}
            >
              {allCategories.map((item) => (
                <MenuItem value={item?.category_id}>
                  {item?.category_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div style={{ width: 20 }} />
          {allSubCategories?.length > 0 && (
            <FormControl
              variant="outlined"
              sx={{ m: 1, minWidth: 175 }}
              size="small"
            >
              <InputLabel id="demo-simple-select-label">
                Shop by Sub Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled-2"
                label="Shop by Sub Catagory"
                onChange={(event, value) => {
                  if (value?.props?.value) {
                    setSelectedSubCategory(value?.props?.value);
                  } else {
                    setSelectedSubCategory('');
                  }
                }}
              >
                {allSubCategories.map((item) => (
                  <MenuItem value={item?.sub_category_id}>
                    {item?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Stack>
        <HeightBox height={30} />
        <CaraouselSlider />
        <HeightBox height={30} />
        <Grid container spacing={10} justifyContent="center">
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
