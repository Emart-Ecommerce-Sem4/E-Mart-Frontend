import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import api from '../../api';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 50,
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.75),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '70ch',
    },
  },
}));

export default function NavBar() {
  const [allCategories, setAllCategories] = useState([]);

  async function getAllCategories() {
    try {
      const [code, res] = await api.category.getAllCategories();

      if (res?.statusCode === 200) {
        setAllCategories(res?.data);
      }
    } catch (error) {}
  }

  React.useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#212529',
        color: '#fff',
      }}
    >
      <AppBar
        position="static"
        color="transparent"
        sx={{
          paddingLeft: 6,
          paddingRight: 6,
          borderBottom: 1,
          borderColor: '#413F42',
        }}
      >
        <Toolbar>
          <Typography variant="h5">Logo</Typography>
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
                console.log('Value is: ', value?.props);
              }}
            >
              {allCategories.map((item) => (
                <MenuItem value={item?.category_id}>
                  {item?.category_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search what you want"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="p">$100</Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button>
              <AiOutlineShoppingCart color="#dc3545" size={25} />
            </Button>
            <Button>
              <Avatar alt="Travis Howard" src="#" size={25} />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
