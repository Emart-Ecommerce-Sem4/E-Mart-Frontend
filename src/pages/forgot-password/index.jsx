import React from 'react';
import SignNavBar from '../../components/SignNavBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import { Formik } from 'formik';

export default function ForgotPassword() {
  const initialValues = {
    email: '',
  };
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!regex.test(values.email)) {
      errors.email = 'Invalid Email';
    }

    return errors;
  };
  const submitForm = (values) => {
    console.log(values);
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
            <div>
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
                  <h2>Forgot Password</h2>
                  <div
                    style={{
                      marginTop: '10px',
                      marginBottom: '10px',
                      color: 'gray',
                    }}
                  >
                    <h7>
                      Enter your e-mail address and we'll send you a link to
                      reset your password
                    </h7>
                  </div>
                  {Object.keys(errors).length === 0 && isSubmitting && (
                    <span className="success-msg">
                      <div
                        class="alert alert-success"
                        role="alert"
                        style={{ marginTop: '20px' }}
                      >
                        Verification email sent!
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
                        sx={{ mt: 2, color: '#fff', mb: 3 }}
                        type="email"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.email && touched.email ? 'input-error' : null
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
                        <span className="error" style={{ color: '#ff0000' }}>
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <Button
                      style={{
                        backgroundColor: '#f57c00',
                      }}
                      type="submit"
                      className={dirty && isValid ? '' : 'disabled-btn'}
                      fullWidth
                      variant="contained"
                      sx={{ mt: 2, mb: 2 }}
                    >
                      LOGIN
                    </Button>
                  </Box>
                </Box>
              </Container>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
