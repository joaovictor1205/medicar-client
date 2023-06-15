import { LoginType } from '../../pages/Login/types/types';
import { api } from '../../utils/httpClient';

function useAuthentication() {
  function login(values: LoginType) {
    return api.post('/users/login', { username: values.email, password: values.password });
  }

  return { login };
}

export default useAuthentication;
