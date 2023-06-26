import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { AuthenticationContext } from '../../contexts';
import useAppointments from '../../hooks/useAppointments/useAppointments';
import { DefaultLayout } from '../../layouts';
import Logo from '../../assets/logo.svg';
import { PrimaryButton, SecondButton } from '../../utils/MUI-styles';
import { AppointmentsTable } from '../../components/AppointmentsTable';
import { EmptyState } from '../../components/EmptyState';
import { NewAppointmentModal } from '../../components/NewAppointmentModal';

function Home() {
  const { logout, email } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const { data, mutate } = useAppointments('/consultas/');
  const [isOpen, setIsOpen] = useState(false);

  const logoutHandler = () => {
    logout();
    navigate('/');
  };
  mutate();

  return (
    <DefaultLayout>
      <>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '75%',
            }}
          >
            <img src={Logo} alt="Logo" />
            <Typography component="h1" variant="h6" sx={{ marginLeft: '1rem', fontWeight: '700' }}>
              Medicar
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '25%',
            }}
          >
            <Typography component="h1" variant="h6">
              { email }
            </Typography>

            <SecondButton onClick={logoutHandler}>
              Desconectar
            </SecondButton>
          </Box>
        </Box>

        <Box sx={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0.5px 1px 2px 2px', padding: '0.5rem 1rem 2rem 1rem', marginTop: '1rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography component="h2" variant="h6" sx={{ fontWeight: '700' }}> Consulta clínica </Typography>
            <PrimaryButton variant="contained" size="small" onClick={() => setIsOpen(true)}>
              <Add sx={{ marginRight: '1rem' }} />
              Nova consulta
            </PrimaryButton>
          </Box>

          {
            data?.length === 0
              ? <EmptyState />
              : <AppointmentsTable data={data || []} mutate={mutate} />
          }
        </Box>
        <NewAppointmentModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </>
    </DefaultLayout>
  );
}

export default Home;
