import useSWR from 'swr';
import fetchAppointments from '../../services/fetchAppointments';

function useAppointments(URL: string) {
  const {
    data, error, isLoading, mutate,
  } = useSWR(URL, fetchAppointments);

  return {
    data, error, isLoading, mutate,
  };
}

export default useAppointments;
