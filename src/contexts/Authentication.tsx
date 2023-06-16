/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext, useEffect, useState,
} from 'react';
import { AuthProviderType, ContextType, UserType } from './types/types';
import { useAuthentication } from '../hooks';

const AuthenticationContext = createContext<ContextType>({} as ContextType);

export function AuthenticationProvider({ children }: AuthProviderType) {
  const [user, setUser] = useState<UserType | null>();
  const { login } = useAuthentication();

  useEffect(() => {
    const loggedUser = localStorage.getItem('user');
    if (loggedUser) return setUser(JSON.parse(loggedUser));
    return setUser(null);
  }, []);

  async function authenticate(email: string, password: string) {
    const response = await login({ email, password });
    const payload = { token: response.data.token, email };
    setUser(payload);
    localStorage.setItem('user', JSON.stringify(payload));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem('user');
  }

  return (
    <AuthenticationContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationContext;
