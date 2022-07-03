import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ed6c02',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#2f3542',
      paper: '#000000',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

export default theme;
