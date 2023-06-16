import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login } from '../pages';
import AuthGuard from '../guards/AuthGuard';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={(
            <AuthGuard>
              <Home />
            </AuthGuard>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
