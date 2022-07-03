import React, { useState } from 'react';
import { Typography, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import DeleteIcon from '@mui/icons-material/Delete';
import HeightBox from '../HeightBox';

export default function CartItem(props) {
  const { item, remove } = props;
  const [itemCount, setItemCount] = useState(item.quantity);
  return (
    <Stack direction="row" spacing={5} alignItems="center" sx={{ mb: 5 }}>
      <div style={{ width: 150, height: 150, overflow: 'hidden' }}>
        <img src={item.image} alt="" style={{ width: 150 }} />
      </div>
      <div>
        <Typography variant="h5">{item.productName}</Typography>
        <HeightBox height={10} />
        <Stack direction="column">
          {item.specifications.map((text) => (
            <Typography variant="p">{text}</Typography>
          ))}
        </Stack>
      </div>
      <div>
        <Typography variant="h5">{'$ ' + item.price}</Typography>
      </div>
      <Stack direction="row" spacing={2}>
        <IconButton
          style={{ height: 50, width: 50 }}
          color="error"
          onClick={() => setItemCount(itemCount - 1)}
        >
          <RemoveIcon />
        </IconButton>
        <div>
          <HeightBox height={10} />
          <Typography variant="h6" fontWeight="bold">
            {itemCount}
          </Typography>
        </div>
        <IconButton
          style={{ height: 50, width: 50 }}
          color="success"
          onClick={() => setItemCount(itemCount + 1)}
        >
          <AddIcon />
        </IconButton>
      </Stack>
      <IconButton
        style={{ height: 50, width: 50 }}
        color="error"
        onClick={() => remove()}
      >
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
}
