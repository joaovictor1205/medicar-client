import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../contexts';

function AuthGuard({ children }: { children: JSX.Element }) {
  const auth = useContext(AuthenticationContext);
  const navigate = useNavigate();

  if (!auth.email) navigate('/');

  return children;
}

export default AuthGuard;
