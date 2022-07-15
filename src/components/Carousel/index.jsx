import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import HeightBox from '../HeightBox';

var items = [
  {
    src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1635405074683-96d6921a2a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
  },
];

function Item(props) {
  return (
    <Paper
      style={{
        backgroundColor: 'transparent',
        height: 400,
        overflow: 'hidden',
      }}
    >
      <img src={props.item.src} alt="" style={{ width: 1200 }} />
    </Paper>
  );
}

export default function CaraouselSlider(props) {
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
