import { AppointmentType } from '../components/NewAppointmentModal/types';
import { api } from './httpClient';

async function fetchAppointments(url: string) {
  const user = localStorage.getItem('user');
  const token = user ? JSON.parse(user).token : '';

  api.defaults.headers.common.Authorization = `Token ${token}`;
  const response = await api.get<AppointmentType[]>(url);

  return response.data ?? [];
}

export default fetchAppointments;
