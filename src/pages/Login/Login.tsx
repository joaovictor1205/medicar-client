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

import { useContext, useState } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as S from './styles/styles';
import {
  PrimaryButton, PrimaryTextField, SecondButton, PrimaryCheckbox,
} from '../../utils/MUI-styles';
import { REQUIRED_MESSAGE, loginSchema } from './schema/loginSchema';
import { LoginType } from './types/types';
import { CustomAlert } from '../../components';
import { AuthenticationContext } from '../../contexts';

const defaultTheme = createTheme();

const INITIAL_VALUES = {
  email: '',
  password: '',
};

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorAlert, showErrorAlert] = useState(false);
  const [successAlert, showSuccessAlert] = useState(false);
  const { authenticate } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const submitHandler = (values: LoginType) => {
    authenticate(values.email, values.password)
      .then(() => {
        showErrorAlert(false);
        showSuccessAlert(true);
        navigate('/home');
      })
      .catch(() => {
        showErrorAlert(true);
        showSuccessAlert(false);
      });
  };

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
            <Formik
              initialValues={INITIAL_VALUES}
              onSubmit={(values) => submitHandler(values)}
              validationSchema={loginSchema}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                errors,
                touched,
              }) => (
                <form onSubmit={handleSubmit} noValidate>
                  <PrimaryTextField
                    margin="normal"
                    fullWidth
                    id="email"
                    label="E-mail ou Login"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    error={touched.email && errors.email === REQUIRED_MESSAGE}
                    helperText={touched.email && errors.email === REQUIRED_MESSAGE ? REQUIRED_MESSAGE : ''}
                  />
                  <PrimaryTextField
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Senha"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    onChange={handleChange}
                    value={values.password}
                    error={touched.password && errors.password === REQUIRED_MESSAGE}
                    helperText={touched.password && errors.password === REQUIRED_MESSAGE ? REQUIRED_MESSAGE : ''}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="change password visibility"
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
                      type="submit"
                    >
                      Acessar
                    </PrimaryButton>
                  </Box>
                </form>
              )}
            </Formik>
            { errorAlert && <CustomAlert severity="error" title="Erro" text="Tente novamente" /> }
            { successAlert && <CustomAlert severity="success" title="Sucesso" text="Redirecionando para Home" /> }
          </Box>
        </Container>
      </ThemeProvider>
    </S.Container>
  );
}

export default Login;
