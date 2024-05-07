import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import Main from '../Pages/Main';
import Login from '../components/Login';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/config/configStore';

export default function Router() {
  const { userId } = useSelector((state: RootState) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Main userId={userId} />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
