import {
  Box, Container, CssBaseline, createTheme,
} from '@mui/material';
import { ThemeProvider } from 'styled-components';

const defaultTheme = createTheme();

function DefaultLayout({ children, alignItems = 'flex-start' }: {children: JSX.Element, alignItems?: string}) {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems,
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          { children }
        </Container>
      </ThemeProvider>
    </Box>
  );
}

export default DefaultLayout;
