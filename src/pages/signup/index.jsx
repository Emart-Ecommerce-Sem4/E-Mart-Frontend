import React from 'react';
import { Formik } from 'formik';
import { Stack } from '@mui/material';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SignNavBar from '../../components/SignNavBar';
import HeightBox from '../../components/HeightBox';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(4).max(20).required().label('Name'),
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

export default function SignUp() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  async function registerUser(values) {}

  return (
    <Box
      sx={{ backgroundColor: '#212529', minHeight: '100vh', paddingLeft: 5 }}
    >
      <div>
        <SignNavBar />
        <HeightBox height={20} />
        <Stack direction="row" spacing={10}>
          <div>
            <img src="./images/SignupImage.png" alt="signupImage" width={600} />
          </div>
          <Formik>
            {(formikProps) => {
              const { values, handleChange, handleSubmit, errors, touched } =
                formikProps;
              return (
                <div>
                  <HeightBox height={20} />
                  <Container component="main" maxWidth="xs">
                    <Typography component="h1" variant="h4" color="#fff">
                      Register With Us
                    </Typography>
                    <HeightBox height={30} />
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          autoComplete="given-name"
                          name="Name"
                          required
                          fullWidth
                          sx={{ input: { color: '#fff' } }}
                          color="primary"
                          id="Name"
                          label="Name"
                          autoFocus
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="confimPassword"
                          label="Confirm Password"
                          type="password"
                          id="password"
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      color="warning"
                    >
                      Register
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link href="#" variant="body2">
                          Already have an account? LOGIN
                        </Link>
                      </Grid>
                    </Grid>
                  </Container>
                </div>
              );
            }}
          </Formik>
        </Stack>
      </div>
    </Box>
  );
}
