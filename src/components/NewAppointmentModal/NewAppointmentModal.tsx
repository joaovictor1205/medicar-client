import {
  Box, FormControl, FormHelperText, InputLabel, MenuItem, Modal, Select, Typography,
} from '@mui/material';
import { Formik } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import { newAppointmentSchema } from './schema/newAppointmentSchema';
import { REQUIRED_MESSAGE } from '../../constants/requiredMessage';
import { PrimaryButton, SecondButton } from '../../utils/MUI-styles';
import useAppointments from '../../hooks/useAppointments/useAppointments';
import { ScheduleType, SpecialtyType } from './types';
import { api } from '../../services/httpClient';

type Props = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

type Form = {
  specialty: string;
  doctor: string;
  date: string;
  hour: string;
}

const INITIAL_VALUES = {
  specialty: '',
  doctor: '',
  date: '',
  hour: '',
};

function NewAppointmentModal(props: Props) {
  const { isOpen, setIsOpen } = props;
  const { data: schedules } = useAppointments('/agendas');
  const specialty: SpecialtyType[] = useMemo(() => [], []);
  const [doctor, setDoctor] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [scheduleId, setScheduleId] = useState<number>();

  const handleClose = () => setIsOpen(!isOpen);

  const submitHandler = (values: Form) => {
    api.post('/consultas', { agenda_id: scheduleId, horario: values.hour })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (!schedules) return;

    schedules.map((schedule: ScheduleType) => {
      if (specialty.includes(schedule.medico.especialidade)) return null;
      return specialty.push(schedule.medico.especialidade);
    });

    if (selectedSpecialty === '') return;

    setDoctor(schedules.filter((schedule: ScheduleType) => (
      schedule.medico.especialidade.id === selectedSpecialty
    )));
  }, [schedules, selectedSpecialty, specialty]);

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
                error={touched.specialty && errors.specialty === REQUIRED_MESSAGE}
              >
                <InputLabel>Especialidade</InputLabel>
                <Select
                  value={values.specialty}
                  name="specialty"
                  label="Especialidade"
                  onChange={(e) => {
                    handleChange(e);
                    setSelectedSpecialty(e.target.value);
                  }}
                >
                  {specialty.map((item: SpecialtyType) => (
                    <MenuItem value={item.id} key={item.id}>
                      {item.nome}
                    </MenuItem>
                  ))}
                </Select>
                {
                    touched.specialty && errors.specialty === REQUIRED_MESSAGE && (
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
                  {doctor?.map((item: ScheduleType) => (
                    <MenuItem value={item.id} key={item.id}>
                      {item.medico.nome}
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
                  {doctor?.map((item: ScheduleType) => (
                    <MenuItem value={item.id} key={item.id}>
                      {item.dia}
                    </MenuItem>
                  ))}
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
                  {doctor?.map((item: ScheduleType) => (
                    item.horarios.map((horario) => {
                      setScheduleId(item.id);
                      return (
                        <MenuItem value={horario} key={horario}>
                          {horario}
                        </MenuItem>
                      );
                    })
                  ))}
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
