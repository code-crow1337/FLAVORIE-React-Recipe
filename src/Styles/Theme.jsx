import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: 'Lora, serif',
    },
    h2: {
      fontFamily: 'Lora, serif',
    },
    h3: {
      fontFamily: 'Lora, serif',
    },
    h4: {
      fontFamily: 'Lora, serif',
    },
    h5: {
      fontFamily: 'Lora, serif',
    },
    h6: {
      fontFamily: 'Lora, serif',
    },
  },
});

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
export default Theme;
