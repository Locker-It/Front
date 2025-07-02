import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { ROUTES } from '../constants/routes.constants';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return children;
};

export default PrivateRoute;
