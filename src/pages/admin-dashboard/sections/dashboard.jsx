import React,{ useEffect,useState}   from 'react';
// material-ui
import {
  Grid,
  Typography,
  CssBaseline,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Stack,
  Button
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AnalyticEcommerce from './../../../components/cards/statistics/AnalyticEcommerce';
import HeightBox from '../../../components/HeightBox';
import MainCard from './../../../components/cards/MainCaard';
import ProductInterest from '../../../components/DashboardCharts/ProductInterest';

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// sales report status
const status = [
  {
      value: 'today',
      label: 'Today'
  },
  {
      value: 'month',
      label: 'This Month'
  },
  {
      value: 'year',
      label: 'This Year'
  }
];
export default function Dashboard(props) {



  const [year, setYear] = useState('');
  const [yearForProduct, setYearForProduct] = useState('2022');
  const [category, setCategory] = useState('Electronic');

  const [product, setProduct] = useState('Phone');



  const handleChange = (event) => {
    console.log(event.target.value)
    setYear(event.target.value);
    
  };
  const handleChangeYear = (event) => {
  
    setYearForProduct(event.target.value);
    
  };
  const handleChangeCategory = (event) => {
   
    setCategory(event.target.value);
    
  };
  const handleChangeProduct = (event) => {
    
    setProduct(event.target.value);
    
  };
  return (
    <div style={{ padding: 20 }}>
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
<Grid item xs={12} sx={{ mb: -2.25 }}>
<CssBaseline />
<Grid container alignItems="center"  columnSpacing={2.75}>
                <Grid item>
                <Typography variant="h5">Quaterly Sales Report for </Typography>
                </Grid>
               
                    <Grid item>
                    <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Year</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={year}
                        label="Year"
                        onChange={handleChange}
                      >
                        <MenuItem value={2022}>2022</MenuItem>
                        <MenuItem value={2021}>2021</MenuItem>
                        <MenuItem value={2020}>2020</MenuItem>
                      </Select>
                    </FormControl>
                    </Box>
                    </Grid>
               
            </Grid>
      
      <HeightBox height={10} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Total Sales of January - March " count="4,42,236" percentage={59.3}  />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Total Sales of April - June" count="78,250" percentage={70.5}  />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Total Sales of July-september" count="18,800" percentage={27.4} isLoss color="warning"  />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Total Sales of October-december" count="$35,078" percentage={27.4} isLoss color="warning"  />
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
         

            <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Intereset Analysiis for  Specific Product </Typography>
                    </Grid>
                    <Grid item>
                        <Stack direction="row" alignItems="center" spacing={0}>
                        <Grid item>
                    <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Year</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={yearForProduct}
                        label="Year"
                        onChange={handleChangeYear}
                      >
                        <MenuItem value={2022}>2022</MenuItem>
                        <MenuItem value={2021}>2021</MenuItem>
                        <MenuItem value={2020}>2020</MenuItem>
                      </Select>
                    </FormControl>
                    </Box>
                    </Grid>
                    <Grid item>
                    <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Category</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        onChange={handleChangeCategory}
                      >
                        <MenuItem value={'Electronic'}>Electronic</MenuItem>
                        <MenuItem value={'Toys'}>Toys</MenuItem>
                       
                      </Select>
                    </FormControl>
                    </Box>
                    </Grid>
                    <Grid item>
                    <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Product</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={product}
                        label="Product"
                        onChange={handleChangeProduct}
                      >
                        <MenuItem value={'Phone'}>Phone</MenuItem>
                        <MenuItem value={'Lap'}>Lap</MenuItem>
                        <MenuItem value={'Rice cooker'}>Rice cooker</MenuItem>
                      </Select>
                    </FormControl>
                    </Box>
                    </Grid>
                        </Stack>
                    </Grid>
                </Grid>
                <MainCard content={false} sx={{ mt: 1.5 }}>
                    <Box sx={{ pt: 1, pr: 2 }}>
                        <ProductInterest  />
                    </Box>
                </MainCard>
            </Grid>

    </Grid>
    </div>
  );
}
