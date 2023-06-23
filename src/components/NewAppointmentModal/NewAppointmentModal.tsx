import {
  Box, FormControl, FormHelperText, InputLabel, MenuItem, Modal, Select, Typography,
} from '@mui/material';
import { Formik } from 'formik';
import { newAppointmentSchema } from './schema/newAppointmentSchema';
import { REQUIRED_MESSAGE } from '../../constants/requiredMessage';
import { PrimaryButton, SecondButton } from '../../utils/MUI-styles';
import useAppointments from '../../hooks/useAppointments/useAppointments';
import { DoctorType, SpecialtyType } from './types';

type Props = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const INITIAL_VALUES = {
  speciality: '',
  doctor: '',
  date: '',
  hour: '',
};

function NewAppointmentModal(props: Props) {
  const { isOpen, setIsOpen } = props;
  const { data: specialities } = useAppointments('/especialidades/');
  const { data: doctors } = useAppointments('/medicos/');

  const handleClose = () => setIsOpen(!isOpen);

  const submitHandler = (values: any) => {
    console.log(values);
  };

  console.log(doctors);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <Box sx={{ width: 600, backgroundColor: '#FFFF', padding: '2rem' }}>
        <Typography variant="h6" component="h2" sx={{ fontWeight: '700', marginBottom: '2rem' }}>
          Nova consulta
        </Typography>
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={(values) => submitHandler(values)}
          validationSchema={newAppointmentSchema}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            errors,
            touched,
          }) => (
            <form onSubmit={handleSubmit} noValidate>
              <FormControl
                sx={{ marginBottom: '2rem' }}
                fullWidth
                error={touched.speciality && errors.speciality === REQUIRED_MESSAGE}
              >
                <InputLabel>Especialidade</InputLabel>
                <Select
                  value={values.speciality}
                  name="speciality"
                  label="Especialidade"
                  onChange={handleChange}
                >
                  {specialities.map((specialty: SpecialtyType) => (
                    <MenuItem value={specialty.id}>
                      {specialty.nome}
                    </MenuItem>
                  ))}
                </Select>
                {
                    touched.speciality && errors.speciality === REQUIRED_MESSAGE && (
                    <FormHelperText>{REQUIRED_MESSAGE}</FormHelperText>
                    )
                  }
              </FormControl>

              <FormControl
                sx={{ marginBottom: '2rem' }}
                fullWidth
                error={touched.doctor && errors.doctor === REQUIRED_MESSAGE}
              >
                <InputLabel>Médico</InputLabel>
                <Select
                  value={values.doctor}
                  name="doctor"
                  label="Médico"
                  onChange={handleChange}
                >
                  {doctors.map((doctor: DoctorType) => (
                    <MenuItem value={doctor.id}>
                      {doctor.nome}
                    </MenuItem>
                  ))}
                </Select>
                {
                    touched.doctor && errors.doctor === REQUIRED_MESSAGE && (
                    <FormHelperText>{REQUIRED_MESSAGE}</FormHelperText>
                    )
                  }
              </FormControl>

              <FormControl
                sx={{ marginBottom: '2rem' }}
                fullWidth
                error={touched.date && errors.date === REQUIRED_MESSAGE}
              >
                <InputLabel>Data</InputLabel>
                <Select
                  value={values.date}
                  name="date"
                  label="Data"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {
                    touched.date && errors.date === REQUIRED_MESSAGE && (
                    <FormHelperText>{REQUIRED_MESSAGE}</FormHelperText>
                    )
                  }
              </FormControl>

              <FormControl
                sx={{ marginBottom: '2rem' }}
                fullWidth
                error={touched.hour && errors.hour === REQUIRED_MESSAGE}
              >
                <InputLabel>Hora</InputLabel>
                <Select
                  value={values.hour}
                  name="hour"
                  label="Hora"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {
                    touched.hour && errors.hour === REQUIRED_MESSAGE && (
                    <FormHelperText>{REQUIRED_MESSAGE}</FormHelperText>
                    )
                  }
              </FormControl>

              <FormControl
                sx={{
                  marginBottom: '2rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
                }}
              >
                <SecondButton onClick={handleClose}>Cancelar</SecondButton>
                <PrimaryButton variant="contained" type="submit"> Confirmar</PrimaryButton>
              </FormControl>
            </form>
          )}
        </Formik>
      </Box>
    </Modal>

  );
}

export default NewAppointmentModal;
