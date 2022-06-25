import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignNavBar from "../../components/SignNavBar";

const theme = createTheme();

// const useStyles = makeStyles((theme) => ({
//   cssLabel: {
//     color: "#d3d3d3",
//     "&.Mui-focused": {
//       color: "#23A5EB"
//     }
//   },
  
// }));

export default function SignUp() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  // const classes = useStyles();
  

  return (
    <Box sx={{paddingBottom: 25, backgroundColor: "#212529"}}>
    <div class="bg-dark text-white">
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
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="given-name"
                        name="Name"
                        required
                        fullWidth
                        sx={{ input: { color: '#fff'}}}
                        // InputLabelProps={{
                        //   classes: {
                        //     root: classes.cssLabel,
                        //     focused: classes.cssFocused
                        //   }
                        // }}
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
                </Box>
              </Box>
              
            </Container>

            
          </div>
        </div>

      </div>
    </div>
    </Box>
  );
}
