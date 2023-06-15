import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { StyledEngineProvider } from '@mui/material';
import { Router } from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Router />
    </StyledEngineProvider>
  </React.StrictMode>,
);
