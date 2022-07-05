import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Button, Stack } from '@mui/material';

export default function SignNavBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ width: '100%', maxWidth: 1200, mx: 'auto' }}>
          <Typography
            variant="h4"
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            Ecommerce
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Stack spacing={2} direction="row">
            <Button color="inherit" onClick={() => navigate('/contact-us')}>
              Contact Us
            </Button>
            <Button color="inherit" onClick={() => navigate('/signin')}>
              Sign in
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => navigate('/signup')}
            >
              Sign up
            </Button>
          </Stack>
          {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}></Box> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
