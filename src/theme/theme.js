import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  shape: {
    borderRadius: 8,
    custom: {
      roundedSm: 4,
      roundedMd: 8,
      roundedLg: 16,
      roundedXl: 24,
    },
  },
  spacing: 8,
  palette: {
    navbar: {
      main: '#232F3E',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    divider: '#ddd',
    text: {
      primary: '#555555',
      secondary: '#888888',
    },
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#1565c0',
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    fontSize: 14,
    h6: {
      fontWeight: 600,
    },
  },
  customShadows: {
    main: '0 0.625rem 1.25rem rgba(0, 0, 0, 0.2)',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

});

export default theme;
