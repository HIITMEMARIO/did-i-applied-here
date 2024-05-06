import { useSelector } from 'react-redux';
import { RootState } from '../redux/config/configStore';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  return isLoggedIn ? <Outlet /> : <Navigate to={'/login'} replace />;
};

export default ProtectedRoute;
