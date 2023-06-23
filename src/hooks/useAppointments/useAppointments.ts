import useSWR from 'swr';
import fetchAppointments from '../../services/fetchAppointments';

function useAppointments(URL: string) {
  const { data, error, isLoading } = useSWR(URL, fetchAppointments);

  return { data, error, isLoading };
}

export default useAppointments;
