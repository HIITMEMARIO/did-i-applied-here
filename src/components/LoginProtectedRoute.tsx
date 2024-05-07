//
import { useSelector } from 'react-redux';
import { RootState } from '../redux/config/configStore';
import { Navigate, Outlet } from 'react-router-dom';

const LoginProtectedRoute = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  console.log('asdafd', isLoggedIn);
  return !isLoggedIn ? <Outlet /> : <Navigate to={'/'} replace />;
};

export default LoginProtectedRoute;
