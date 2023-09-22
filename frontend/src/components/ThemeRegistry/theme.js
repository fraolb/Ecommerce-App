import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary : {
      main : "#2E8D5A",
      light:"#41B683"
    },
    secondary: {
      main: '#FF5722',
    },

    customColor1: {
      main:"#16D937",
      light:'#B6EBBF'
    },
    bgcolor1:{
      main: "#A0ECCA"
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 14,
    h1:{
      fontSize: '2.5rem'
    },
    h5:{
      fontSize: 14,
      fontWeight:"bold"
    }
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
