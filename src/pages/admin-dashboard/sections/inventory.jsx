import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import api from '../../../api';
import HeightBox from '../../../components/HeightBox';
import ProductAddEditForm from '../../../components/ProductEditAddForm';

export default function Inventory(props) {
  const [products, setProducts] = useState([]);
  const [openProductAddEditForm, setOpenProductAddEditForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();

  async function refreshTables() {}

  async function getAllProducts() {
    try {
      const [code, res] = await api.product.getAllProducts();
      if (res?.statusCode === 200) {
        setProducts(res?.data?.products);
      }
    } catch (error) {}
  }

  React.useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div style={{ padding: 20 }}>
      <ProductAddEditForm
        open={openProductAddEditForm}
        setOpen={setOpenProductAddEditForm}
        item={selectedProduct}
        refreshTables={refreshTables}
      />
      <Typography variant="h5">Inventory</Typography>
      <HeightBox height={20} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="center">In Stock</TableCell>
              <TableCell align="center">Unit Price</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow
                key={row.product_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.quantity_in_stock}</TableCell>
                <TableCell align="center">{'$ ' + row.unit_price}</TableCell>
                <TableCell align="center">{row.description}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      setSelectedProduct(row);
                      setOpenProductAddEditForm(true);
                    }}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
