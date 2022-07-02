import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import SignNavBar from '../../components/SignNavBar';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Formik } from 'formik';

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
    <Box sx={{ paddingBottom: 25, backgroundColor: '#212529' }}>
      <SignNavBar />

      <div>
        <Stack direction="row">
          <div class="col">
            <img src="./images/SignupImage.png" alt="signupImage" width={600} />
          </div>
          <Formik initialValues={initialValues} onSubmit={submitForm}>
            {(formikProps) => {
              const { values, handleChange, handleSubmit, errors, touched } =
                formikProps;
              return (
                <div class="col">
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

                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{
                        mt: 3,
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
                            className={
                              errors.name && touched.name ? 'input-error' : null
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
                              ),
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
                              ),
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
                </div>
              );
            }}
          </Formik>
        </Stack>
      </div>
    </Box>
  );
}
