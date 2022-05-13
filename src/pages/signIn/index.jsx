import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import SignNavBar from '../../components/SignNavBar';
import { Formik } from 'formik';

export default function SignIn() {
  const [showPasswordText, setShowPasswordText] = useState(false);
  const initialValues = {
    email: '',
    password: '',
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!regex.test(values.email)) {
      errors.email = 'Invalid Email';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 4) {
      errors.password = 'Password too short';
    }
    return errors;
  };

  const submitForm = (values) => {
    console.log(values);
  };

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

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
          <div
            class="p-3 mb-2 bg-dark text-white"
            style={{ height: '100vH', overflowY: 'hidden' }}
          >
            <div>
              <SignNavBar />
            </div>
            <div class="container">
              <div class="row">
                <div class="col">
                  <Container
                    color="white"
                    component="main"
                    maxWidth="xs"
                    sx={{
                      mt: 10,
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
                      }}
                    >
                      <h1>Welcome Again</h1>
                      {Object.keys(errors).length === 0 && isSubmitting && (
                        <span className="success-msg">
                          <div
                            class="alert alert-success"
                            role="alert"
                            style={{ marginTop: '20px' }}
                          >
                            Signed in Successfully!
                          </div>
                        </span>
                      )}

                      <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        style={{ width: '400px' }}
                      >
                        <div class="form-row" maxWidth="xs">
                          <Input
                            sx={{ mt: 2, color: '#fff' }}
                            type="email"
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.email && touched.email
                                ? 'input-error'
                                : null
                            }
                            variant="standard"
                            required
                            fullWidth
                            label="Email Address"
                            placeholder="Email Address"
                            autoComplete="email"
                            autoFocus
                          />
                          {errors.email && touched.email && (
                            <span
                              className="error"
                              style={{ color: '#ff0000' }}
                            >
                              {errors.email}
                            </span>
                          )}
                        </div>
                        <div className="form-row">
                          <Input
                            sx={{ mt: 2, color: '#fff' }}
                            type={showPasswordText ? 'text' : 'password'}
                            name="password"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.password && touched.password
                                ? 'input-error'
                                : null
                            }
                            placeholder="Password"
                            fullWidth
                            endAdornment={
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
                            }
                          />
                          {errors.password && touched.password && (
                            <span
                              className="error"
                              style={{ color: '#ff0000' }}
                            >
                              {errors.password}
                            </span>
                          )}
                        </div>
                        <FormControlLabel
                          sx={{ mt: 2 }}
                          control={
                            <Checkbox value="remember" color="primary" />
                          }
                          label="Remember me"
                        />
                        <Button
                          style={{
                            backgroundColor: '#f57c00',
                          }}
                          type="submit"
                          className={dirty && isValid ? '' : 'disabled-btn'}
                          disabled={!(dirty && isValid)}
                          fullWidth
                          variant="contained"
                          sx={{ mt: 2, mb: 2 }}
                        >
                          LOGIN
                        </Button>
                        <Grid container>
                          <Grid item xs>
                            <Link href="#" variant="body2">
                              Forgot password?
                            </Link>
                          </Grid>
                          <Grid item>
                            <Link
                              href="../signup/"
                              variant="body2"
                              style={{ marginLeft: '10' }}
                            >
                              {"Don't have an account? Register"}
                            </Link>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Container>
                </div>
                <div class="col">
                  <img
                    src="../Mask group.png"
                    style={{ marginTop: 100, marginLeft: 250 }}
                    direction="column"
                    alt=""
                    width={500}
                    height={500}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
