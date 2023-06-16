import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { StyledEngineProvider } from '@mui/material';
import { Router } from './router';
import { AuthenticationProvider } from './contexts/Authentication';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <AuthenticationProvider>
        <Router />
      </AuthenticationProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
