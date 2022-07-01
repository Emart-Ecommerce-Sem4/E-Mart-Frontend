import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SIGNIN_IMAGE from '../../assets/signin.png';
import { styled } from '@mui/system';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
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
import SignNavBar from '../../components/SignNavBar';
import { Formik } from 'formik';
import HeightBox from '../../components/HeightBox';

const CustomTextField = styled(TextField)({
  width: 400,
  color: '#fff',
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
    color: '#fff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
      color: '#fff',
    },
    '&:hover fieldset': {
      borderColor: 'white',
      color: '#fff',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
      color: '#fff',
    },
  },
});

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label('Email'),
  password: Yup.string()
    .min(8)
    .max(15)
    .required()
    .label('Password')
    .matches(/\d+/, 'Password should contain at least one number')
    .matches(
      /[a-z]+/,
      'Password should contain at least one lowercase character'
    )
    .matches(
      /[A-Z]+/,
      'Passoword should contain at least one uppercase character'
    )
    .matches(
      /[!@#$%^&*()-+]+/,
      'Password should contain at least one special character'
    ),
});

export default function SignIn() {
  const [showPasswordText, setShowPasswordText] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
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
      validationSchema={validationSchema}
      onSubmit={submitForm}
    >
      {(formikProps) => {
        const { values, handleChange, handleSubmit, errors, touched } =
          formikProps;

        return (
          <div style={{ backgroundColor: '#2f3542' }}>
            <div>
              <SignNavBar />
            </div>
            <div>
              <div>
                <Stack direction="row" spacing={10} justifyContent="center">
                  <div>
                    <Container color="white" component="main" maxWidth="xs">
                      <HeightBox height={100} />
                      <h1 style={{ color: '#fff' }}>Welcome Again</h1>
                      <HeightBox height={20} />
                      <Box style={{ width: '400px' }}>
                        <CustomTextField
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange('email')}
                          helperText={
                            touched.email && errors.email ? errors.email : ''
                          }
                          error={errors.email}
                          required
                          fullWidth
                          label="Email"
                          placeholder="Email"
                        />
                        <HeightBox height={20} />
                        <CustomTextField
                          type={showPasswordText ? 'text' : 'password'}
                          value={values.password}
                          name="Password"
                          label="Password"
                          helperText={touched.password ? errors.password : ''}
                          error={errors.password}
                          onChange={handleChange('password')}
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
                          onClick={handleSubmit}
                          fullWidth
                          variant="contained"
                          sx={{ mt: 2, mb: 2 }}
                        >
                          LOGIN
                        </Button>
                        <Grid container>
                          <Grid item xs>
                            <Link
                              href="#"
                              variant="body2"
                              onClick={() => navigate('/forgot-password')}
                            >
                              Forgot password?
                            </Link>
                          </Grid>
                          <Grid item>
                            <Link
                              onClick={() => navigate('/signup')}
                              variant="body2"
                              style={{ marginLeft: '10' }}
                            >
                              {"Don't have an account? Register"}
                            </Link>
                          </Grid>
                        </Grid>
                      </Box>
                    </Container>
                  </div>
                  <div>
                    <img
                      src={SIGNIN_IMAGE}
                      alt=""
                      style={{ marginTop: 100 }}
                      width={500}
                      height={500}
                    />
                  </div>
                </Stack>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
