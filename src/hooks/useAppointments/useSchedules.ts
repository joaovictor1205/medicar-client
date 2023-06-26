import useSWR from 'swr';
import fetchSchedules from '../../services/fetchSchedules';

function useSchedules(URL: string) {
  const {
    data, error, isLoading, mutate,
  } = useSWR(URL, fetchSchedules);

  return {
    data, error, isLoading, mutate,
  };
}

export default useSchedules;
