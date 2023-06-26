import { ScheduleType } from '../components/NewAppointmentModal/types';
import { api } from './httpClient';

async function fetchSchedules(url: string) {
  const response = await api.get<ScheduleType[]>(url);

  return response.data ?? [];
}

export default fetchSchedules;
