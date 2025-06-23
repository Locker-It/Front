import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { useGetCurrentUserQuery } from '../../services/authApi';
import { loginSuccess, logout } from '../../store/authSlice';
import FullScreenLoader from '../shared/Loader/FullScreenLoader';

export default function AuthBootstrap() {
  const dispatch = useDispatch();
  const { data: user, isLoading, isError } = useGetCurrentUserQuery();

  useEffect(() => {
    if (user) {
      dispatch(loginSuccess({ user }));
    } else if (isError) {
      dispatch(logout());
    }
  }, [user, isError, dispatch]);

  if (isLoading) return <FullScreenLoader />;

  return <Outlet />;
}
