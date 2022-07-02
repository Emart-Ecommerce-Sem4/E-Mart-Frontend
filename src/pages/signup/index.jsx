import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SignNavBar from "../../components/SignNavBar";
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Formik } from 'formik';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function SignUp() {

  const [showPasswordText, setShowPasswordText] = useState(false);

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex = /(?=.*[0-9])/;

    if (!values.name) {
      errors.name = 'Name is required';
    } 
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!regex.test(values.email)) {
      errors.email = 'Invalid Email';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 characters long';
    }else if (!passwordRegex.test(values.password)) {
      errors.password = "Invalid password. Must contain a number.";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (values.confirmPassword != values.password) {
      errors.confirmPassword = 'Password does not match';
    }
    
    return errors;
  };


  const submitForm = (values) => {
    console.log(values);
  };

  const handleClickShowPassword = () => {
    setShowPasswordText(!showPasswordText);
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  


  

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
          isSubmitting,
        } = formik;

        return (

    
    <ThemeProvider theme={darkTheme}>
    <Box sx={{paddingBottom: 25, backgroundColor: "#212529", }}>
    
      <SignNavBar />

      <div class="container">
        <div class="row align-items-start">
          <div class="col">

            <img src='./images/SignupImage.png' alt='signupImage' width={600} />
          </div>

          <div class="col">
            <Container component="main" maxWidth="xs" >
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  
                }}
              >
                
                <Typography component="h1" variant="h4">
                  Register With Us!
                </Typography>
               
                {Object.keys(errors).length === 0 && isSubmitting && (

                  <span className="success-msg">
                    <Typography
                    role= 'alert'
                    sx={{
                      fontSize: 15,
                      color: '#A8DF65',
                      paddingTop: 2,
                    }}
                    >
                      Registered Successfully!

                    </Typography>
                    
                  </span>
                )}
                <Box 
                  component="form" 
                  noValidate 
                  onSubmit={handleSubmit} 
                  sx={{ 
                    mt: 3 
                  }}
                >
                  
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="name"
                        name="name"
                        required
                        fullWidth
                        id="standard-required"
                        label="Name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.name && touched.name
                            ? 'input-error'
                            : null
                        }
                        autoFocus
                        variant="standard"
                      />
                      {errors.name && touched.name && (
                            <span
                              className="error"
                              style={{ color: '#ff0000', fontSize: 12 }}
                            >
                              {errors.name}
                            </span>
                          )}
                    </Grid>
                    
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="standard-required"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.email && touched.email
                            ? 'input-error'
                            : null
                        }
                        variant="standard"
                      />
                      {errors.email && touched.email && (
                            <span
                              className="error"
                              style={{ color: '#ff0000', fontSize: 12 }}
                            >
                              {errors.email}
                            </span>
                          )}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={showPasswordText ? 'text' : 'password'}
                        id="standard-required"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.password && touched.password
                            ? 'input-error'
                            : null
                        }
                        autoComplete="new-password"
                        variant="standard"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showPasswordText ? (
                                  <VisibilityIcon />
                                ) : (
                                  <VisibilityOffIcon />
                                )}
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                        
                      />
                      {errors.password && touched.password && (
                            <span
                              className="error"
                              style={{ color: '#ff0000', fontSize: 12 }}
                            >
                              {errors.password}
                            </span>
                          )}
                    </Grid>
                    <Grid item xs={12}>
                    
                      <TextField 
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type={showPasswordText ? 'text' : 'password'}
                        id="standard-required"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.confirmPassword && touched.confirmPassword
                            ? 'input-error'
                            : null
                        }
                        autoComplete="password"
                        variant="standard"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showPasswordText ? (
                                  <VisibilityIcon />
                                ) : (
                                  <VisibilityOffIcon />
                                )}
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                      />
                      {errors.confirmPassword && touched.confirmPassword && (
                            <span
                              className="error"
                              style={{ color: '#ff0000', fontSize: 12 }}
                            >
                              {errors.confirmPassword}
                            </span>
                          )}
                    </Grid>
                    
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    className={dirty && isValid ? '' : 'disabled-btn'}
                    disabled={!(dirty && isValid)}
                    variant="contained"
                    sx={{ mt: 3, mb: 2, color: '#fff' }}
                    color="warning"
                    style={{
                      backgroundColor: '#f57c00',
                    }}
                  >
                    Register
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      Already have an account? &nbsp;
                      <Link href="/signin" variant="body2">
                         LOGIN
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              
            </Container>

            
          </div>
        </div>

      </div>
    
    </Box>
    </ThemeProvider>
    );
  }}
    </Formik>
  );
}
