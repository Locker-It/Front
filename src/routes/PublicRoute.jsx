import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { ROUTES } from '../constants/routes.constants';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return children;
};

export default PublicRoute;
