import React from 'react';
import NavBar from '../../components/NavBar';
import { CssBaseline, Stack, Typography } from '@mui/material';
import HeightBox from '../../components/HeightBox';
import HOME_MAIN from '../../assets/Home_main.png';
import LINE from '../../assets/Line.png'
import DealItem from '../../components/DealItem';

export default function HomePage() {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <div style={{paddingLeft : "85px"}}>
        <HeightBox height = {30} />
        <div>
          <img
            src={HOME_MAIN}
            alt=""
            width={1375}
          /> 
        </div>
        <HeightBox height = {30} />
        <Stack direction="row" spacing={3} alignItems="center"> 
          <div>
            <h1>DEALS</h1>
          </div>
          <div>
            <img
              src={LINE}
              alt=""
              width={1225}
            /> 
          </div>
        </Stack>
        <HeightBox height = {30} />
        <Stack direction="row" spacing={8}>
          <div>
            <DealItem item = {{productName:'Laptop' , image : './images/test.jpg' , dealPrice : 1200.99 , beforePrice : 1800.00 , rating : 4.7 , ratingCount : 45}} />
          </div>

          <div>
            <DealItem item = {{productName:'Laptop' , image : './images/test.jpg' , dealPrice : 1200.99 , beforePrice : 1800.00 , rating : 4.7 , ratingCount : 45}} />
          </div>

          <div>
            <DealItem item = {{productName:'Laptop' , image : './images/test.jpg' , dealPrice : 1200.99 , beforePrice : 1800.00 , rating : 4.7 , ratingCount : 45}} />
          </div>

          <div>
            <DealItem item = {{productName:'Laptop' , image : './images/test.jpg' , dealPrice : 1200.99 , beforePrice : 1800.00 , rating : 4.7 , ratingCount : 45}} />
          </div>

          <div>
            <DealItem item = {{productName:'Laptop' , image : './images/test.jpg' , dealPrice : 1200.99 , beforePrice : 1800.00 , rating : 4.7 , ratingCount : 45}} />
          </div>

          <div>
            <DealItem item = {{productName:'Laptop' , image : './images/test.jpg' , dealPrice : 1200.99 , beforePrice : 1800.00 , rating : 4.7 , ratingCount : 45}} />
          </div>
        </Stack>

      </div>
    </div>
  );
}
