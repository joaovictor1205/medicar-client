import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login } from '../pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
