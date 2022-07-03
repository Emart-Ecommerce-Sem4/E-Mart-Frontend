import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function EditUser() {

  return (
    <div>
        
        <Box 
            sx={{
                height: "100vh",
                backgroundColor: "#212529",
                color: "#fff",
                textAlign: "center",
                paddingTop: 10,
             }} 
            >

        <h2>Edit User</h2>
        <Container
                color="white"
                component="main"
                maxWidth="xs"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CssBaseline />
                <Box
                  sx={{
                    mt: 10,
                    textAlign: "center",
                  }}
                >
                  

                  <Box
                    component="form"
                    // onSubmit={handleSubmit}
                    noValidate
                    style={{ width: '400px' }}
                  >
                    <div class="form-row" maxWidth="xs">
                    <Input
                        sx={{ mt: 2, color: '#fff', mb: 3 }}
                        type="text"
                        name="name"
                        id="name"
                        // value={values.email}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        
                        variant="standard"
                        // required
                        fullWidth
                        label="Name"
                        placeholder="Name"
                        // autoComplete="email"
                        autoFocus
                    />
                  
                </div>
                    <div class="form-row" maxWidth="xs">
                      <Input
                        sx={{ mt: 2, color: '#fff', mb: 3 }}
                        type="email"
                        name="email"
                        id="email"
                        // value={values.email}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        
                        variant="standard"
                        // required
                        fullWidth
                        label="Email"
                        placeholder="Email"
                        // autoComplete="email"
                        autoFocus
                      />
                      
                    </div>
                    <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Is Admin?" />
                    </FormGroup>
                    <Button
                      style={{
                        backgroundColor: '#f57c00',
                      }}
                      type="submit"
                      
                      fullWidth
                      variant="contained"
                      sx={{ mt: 2, mb: 2 }}
                    >
                      UPDATE
                    </Button>
                  </Box>
                </Box>
                </Container>
        </Box>

    </div>
  );
}
