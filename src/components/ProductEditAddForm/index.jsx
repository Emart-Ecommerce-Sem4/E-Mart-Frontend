import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import api from '../../api';
import { Stack, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import HeightBox from '../HeightBox';
import moment from 'moment';
import { Formik } from 'formik';

const Input = styled('input')({
  display: 'none',
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ProductAddEditForm(props) {
  const { open, setOpen, item, refreshTables } = props;
  const [imageFiles, setImageFiles] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(item?.category_id);
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    '82d76078-7a70-4f81-9978-feb4f8eeefb6'
  );
  const [allCategories, setAllCategories] = useState([]);
  const [allSubCategories, setAllSubCategories] = useState([]);

  async function getSubCategoriesForCategory(categoryId) {
    try {
      const [code, res] = await api.subCategory.getSubCategoriesForCategory(
        categoryId
      );

      if (res?.statusCode === 200) {
        setAllSubCategories(res?.data?.subCategories);
      }
    } catch (error) {}
  }

  async function getAllCategories() {
    try {
      const [code, res] = await api.category.getAllCategories();

      setAllCategories(res?.data);
    } catch (error) {}
  }

  async function getCategory() {
    try {
      const [code, res] = await api.category.getCategoryDetails(
        item?.category_id
      );
    } catch (error) {}
  }

  React.useEffect(() => {
    if (item) {
      getCategory();
      getAllCategories();
      setSelectedCategory(item.category_id);
      getSubCategoriesForCategory(item.category_id);
    }
  }, [item]);

  const initialValues = {
    name: item?.name,
    unitPrice: item?.unit_price,
    inStock: item?.quantity_in_stock,
    description: item?.description,
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeImage = (event) => {
    const files = Array.from(event.target.files);
    console.log('Files are:', files);
    setImageFiles(files);
    // setSelectedFile(value[0]?.blobFile);
  };

  return (
    <div>
      <BootstrapDialog
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Details
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography variant="h6" color="text.secondary">
            Product Details
          </Typography>
          <HeightBox height={20} />
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              console.log('Values are: ', values);
            }}
          >
            {(formikProps) => {
              const { values, handleChange, handleSubmit, touched, errors } =
                formikProps;
              return (
                <React.Fragment>
                  <Stack direction="row">
                    <Stack direction="column" spacing={5}>
                      <TextField
                        label="Name"
                        variant="outlined"
                        style={{ width: 400 }}
                        value={values.name}
                        onChange={handleChange('name')}
                        InputLabelProps={{ shrink: true }}
                      />

                      <TextField
                        label="Unit Price"
                        variant="outlined"
                        style={{ width: 400 }}
                        value={values.unitPrice}
                        onChange={handleChange('unitPrice')}
                        InputLabelProps={{ shrink: true }}
                      />

                      <TextField
                        label="Qunatity in Stock"
                        variant="outlined"
                        style={{ width: 400 }}
                        value={values.inStock}
                        onChange={handleChange('inStock')}
                        InputLabelProps={{ shrink: true }}
                      />

                      <TextField
                        label="Description"
                        variant="outlined"
                        style={{ width: 400 }}
                        value={values.description}
                        onChange={handleChange('description')}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Stack>
                    <Stack direction="column" spacing={5}>
                      {allCategories.length > 0 && (
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Select Category
                          </InputLabel>
                          <Select
                            style={{ width: 400 }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue={selectedCategory}
                            value={selectedCategory}
                            label="Select Category"
                            onChange={(event) => {
                              getSubCategoriesForCategory(event.target.value);
                              setSelectedCategory(event.target.value);
                            }}
                          >
                            {allCategories.map((item) => (
                              <MenuItem
                                value={item.category_id}
                                key={item.category_id}
                              >
                                {item?.category_name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                      {allSubCategories.length > 0 && (
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Select Sub Category
                          </InputLabel>
                          <Select
                            style={{ width: 400 }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue={selectedSubCategory}
                            value={selectedSubCategory}
                            label="Select Sub Category"
                            onChange={(event) => {
                              console.log(event.target.value);
                              setSelectedSubCategory(event.target.value);
                            }}
                          >
                            {allSubCategories.map((item) => (
                              <MenuItem
                                value={item.sub_category_id}
                                key={item.sub_category_id}
                              >
                                {item.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                      <React.Fragment>
                        <label htmlFor="contained-button-file">
                          <Input
                            accept="image/*"
                            id="contained-button-file"
                            multiple
                            type="file"
                            onChange={handleChangeImage}
                          />
                          <Button variant="contained" component="span">
                            Upload Images
                          </Button>
                        </label>
                      </React.Fragment>
                    </Stack>
                  </Stack>
                </React.Fragment>
              );
            }}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            variant="outlined"
            color="secondary"
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress /> : 'Add'}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
