import { api } from './httpClient';

async function fetchAppointments(url: string) {
  const response = await api.get(url);

  return response.data ?? [];
}

export default fetchAppointments;
