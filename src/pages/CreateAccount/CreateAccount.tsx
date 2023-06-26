import {
  Box, IconButton, InputAdornment, Typography,
} from '@mui/material';
import { Formik } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { DefaultLayout } from '../../layouts';
import Logo from '../../assets/logo.svg';
import {
  PrimaryButton, PrimaryTextField, SecondButton,
} from '../../utils/MUI-styles';
import { REQUIRED_MESSAGE } from '../../constants/requiredMessage';
import { createAccountSchema } from './schema/createAccountSchema';
import { CreateAccountType } from './types/types';
import { CustomAlert } from '../../components';
import { api } from '../../services/httpClient';

const INITIAL_VALUES = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
};

function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorAlert, showErrorAlert] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const submitHandler = (values: CreateAccountType) => {
    if (values.confirmPassword !== values.password) {
      showErrorAlert(true);
    }

    api.post('/users')
      .then(() => navigate('/'));
  };

  return (
    <DefaultLayout alignItems="center">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '9rem',
          }}
        >
          <img src={Logo} alt="Logo" />
          <Typography component="h1" variant="h5">
            Medicar
          </Typography>
        </Box>

        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={(values) => submitHandler(values)}
          validationSchema={createAccountSchema}
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
                id="name"
                label="Nome"
                name="name"
                onChange={handleChange}
                value={values.name}
                error={touched.name && errors.name === REQUIRED_MESSAGE}
                helperText={touched.name && errors.name === REQUIRED_MESSAGE ? REQUIRED_MESSAGE : ''}
              />

              <PrimaryTextField
                margin="normal"
                fullWidth
                id="email"
                label="Email"
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

              <PrimaryTextField
                margin="normal"
                fullWidth
                name="confirmPassword"
                label="Confirmar senha"
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                onChange={handleChange}
                value={values.confirmPassword}
                error={touched.confirmPassword && errors.confirmPassword === REQUIRED_MESSAGE}
                helperText={touched.confirmPassword && errors.confirmPassword === REQUIRED_MESSAGE ? REQUIRED_MESSAGE : ''}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="change password visibility"
                        onClick={handleClickShowConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <SecondButton fullWidth onClick={() => navigate('/')}>
                  Cancelar
                </SecondButton>

                <PrimaryButton
                  fullWidth
                  variant="contained"
                  type="submit"
                >
                  Confirmar
                </PrimaryButton>
              </Box>
            </form>
          )}
        </Formik>
        { errorAlert && <CustomAlert severity="error" title="Erro" text="Senhas diferentes" /> }
      </Box>
    </DefaultLayout>
  );
}

export default CreateAccount;
