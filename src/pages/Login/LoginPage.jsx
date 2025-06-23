import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../../components/Forms/LoginForm.jsx';
import SharedTypography from '../../components/shared/Text/SharedText.jsx';
import { AUTH_ERRORS } from '../../constants/auth.constants.js';
import { ROUTES } from '../../constants/routerPaths.js';
import { useLoginUserMutation } from '../../services/authApi.js';
import { extractApiError } from '../../utils/authErrors.js';

export default function LoginPage() {
  const navigate = useNavigate();
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(ROUTES.HOME);
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = async (credentials) => {
    try {
      await loginUser(credentials).unwrap();
      navigate(ROUTES.HOME);
    } catch (err) {
      console.error(AUTH_ERRORS.LOGIN_ERROR, err);
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
      {error && (
        <SharedTypography variant="body2" color="error">
          {extractApiError(error, AUTH_ERRORS.GENERAL_LOGIN_ERROR)}
        </SharedTypography>
      )}
    </div>
  );
}
