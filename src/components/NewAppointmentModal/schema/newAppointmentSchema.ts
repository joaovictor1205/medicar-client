import { object, string } from 'yup';
import { REQUIRED_MESSAGE } from '../../../constants/requiredMessage';

export const newAppointmentSchema = object().shape({
  speciality: string().required(REQUIRED_MESSAGE),
  doctor: string().required(REQUIRED_MESSAGE),
  date: string().required(REQUIRED_MESSAGE),
  hour: string().required(REQUIRED_MESSAGE),
});
