// theme.js
'use client'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Public Sans',
    variants : {
    body1: {
      fontSize: "18px",
      fontWeight: 400,
      color: "#000",
      textTransform: "capitalize",
    },
    body2: {
      fontSize: "13px",
      fontWeight: 400,
      color: "#6F6B7D",
      lineHeight: "20px",
    },
    subtitle: {
      fontSize: "18px",
      fontWeight: 600,
      color: "#4B465C",
      lineHeight: "30px",
    },
    caption: {
      fontSize: "14px",
      fontWeight: 400,
      color: "#4B465C",
      lineHeight: "20px",
      opacity: 0.6,
    },
    link: {
      fontSize: "14px",
      fontWeight: 500,
      color: "#00318B",
    },
    activeStatus: {
      fontSize: "14px",
      fontWeight: 400,
      color: "#00CA99",
      lineHeight: "20px",
    },
  }
  },
});

export default theme;