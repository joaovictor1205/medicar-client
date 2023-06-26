import { AppointmentType } from '../components/NewAppointmentModal/types';
import { api } from './httpClient';

async function fetchAppointments(url: string) {
  const response = await api.get<AppointmentType[]>(url);

  return response.data ?? [];
}

export default fetchAppointments;
