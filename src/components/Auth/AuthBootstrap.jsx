import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';

import { useGetCurrentUserQuery } from '../../services/authApi';
import { loginSuccess, logout } from '../../store/authSlice';


export default function AuthBootstrap() {
  const dispatch = useDispatch();
  const { data: user, isLoading, isError } = useGetCurrentUserQuery();

  useEffect(() => {
    if (user)  {
      dispatch(loginSuccess({ user }));
    } else if (isError) {
      dispatch(logout());
    }
  }, [user, isError, dispatch]);

  if (isLoading) return <CircularProgress />;

  return <Outlet />;
}
