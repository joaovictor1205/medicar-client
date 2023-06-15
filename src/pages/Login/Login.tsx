import {
  Box,
  Container,
  CssBaseline,
  FormControlLabel,
  IconButton,
  InputAdornment,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

import { useState } from 'react';
import * as S from './styles';
import {
  PrimaryButton, PrimaryTextField, SecondButton, PrimaryCheckbox,
} from '../../utils/MUI-styles';

const defaultTheme = createTheme();

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <S.Container>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Medicar
            </Typography>
            <Box component="form" onSubmit={console.log} noValidate sx={{ mt: 1 }}>
              <PrimaryTextField
                margin="normal"
                fullWidth
                id="email"
                label="E-mail ou Login"
                name="email"
                autoFocus
              />
              <PrimaryTextField
                margin="normal"
                fullWidth
                name="password"
                label="Senha"
                type={showPassword ? 'text' : 'password'}
                id="password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={<PrimaryCheckbox value="remember" color="primary" />}
                label="Lembrar minha senha"
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <SecondButton fullWidth>
                  Criar conta
                </SecondButton>

                <PrimaryButton
                  fullWidth
                  variant="contained"
                >
                  Acessar
                </PrimaryButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </S.Container>
  );
}

export default Login;
