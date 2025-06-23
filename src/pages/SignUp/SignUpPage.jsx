import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import SignupForm from '../../components/Forms/SignUpForm';
import SharedTypography from '../../components/shared/Text/SharedText';
import { AUTH_ERRORS } from '../../constants/auth.constants';
import { ROUTES } from '../../constants/routerPaths';
import { useRegisterUserMutation } from '../../services/authApi';
import { extractApiError } from '../../utils/authErrors.js';

export default function SignUpPage() {
  const navigate = useNavigate();
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(ROUTES.HOME);
    }
  }, [isLoggedIn, navigate]);

  const handleSignup = async (formData) => {
    try {
      await registerUser(formData).unwrap();
      navigate(ROUTES.LOGIN);
    } catch (err) {
      console.error(AUTH_ERRORS.REGISTER_FAILED, err);
    }
  };

  return (
    <div>
      <SignupForm onSubmit={handleSignup} isLoading={isLoading} />
      {error && (
        <SharedTypography variant="body2" color="error">
          {extractApiError(error, AUTH_ERRORS.GENERAL_REGISTER_ERROR)}
        </SharedTypography>
      )}
    </div>
  );
}
