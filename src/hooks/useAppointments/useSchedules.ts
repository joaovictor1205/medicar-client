import useSWR from 'swr';
import fetchSchedules from '../../services/fetchSchedules';

function useSchedules(URL: string) {
  const { data, error, isLoading } = useSWR(URL, fetchSchedules);

  return { data, error, isLoading };
}

export default useSchedules;
