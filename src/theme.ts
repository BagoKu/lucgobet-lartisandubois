import { createTheme, alpha } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#d47311',
      dark: '#a65a0d',
      contrastText: '#fff',
    },
    background: {
      default: '#f8f7f6',
      paper: '#fff',
    },
    text: {
      primary: '#181411',
      secondary: '#897561',
    },
    // Custom colors can be added via type module augmentation if strictly needed,
    // but mapping to standard MUI names is often easier.
    // We'll stick to standard names where possible and use custom coding for specific needs.
  },
  typography: {
    fontFamily: '"Manrope", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0.5rem', // rounded-lg
          padding: '12px 24px',
          boxShadow: 'none',
          textTransform: 'none',
          fontWeight: 700,
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          color: '#fff',
          '&:hover': {
            backgroundColor: '#a65a0d', // This should be primary.dark (d47311 -> darken) or explicitly set
            // Let's make sure it's consistent.
            // If primary main is #d47311, a good dark is #a65a0d or similar
          },
        },
        outlined: {
          borderColor: 'rgba(0, 0, 0, 0.12)',
          color: '#181411',
          '&:hover': {
            borderColor: '#181411',
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            color: '#181411',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: 'none',
          border: '1px solid rgba(0, 0, 0, 0.08)',
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#f8f7f6', // background-light
          color: '#181411', // text-light
          boxShadow: 'none',
          borderBottom: `1px solid ${alpha('#d47311', 0.2)}`, // border-primary/20
        },
      },
    },
  },
})

export default theme