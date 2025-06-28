import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../../components/Forms/LoginForm.jsx';
import { AUTH_ERRORS } from '../../constants/errorMessages.js';
import { ROUTES } from '../../constants/routes.constants.js';
import { useLoginUserMutation } from '../../services/authApi.js';
import { extractApiError } from '../../utils/authErrors.js';
import { StatusModal } from '../../components/shared/Modal/StatusModal.jsx';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [modalData, setModalData] = useState(null);

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
      setModalData({
        title: AUTH_ERRORS.LOGIN_FAILED,
        message: extractApiError(err, AUTH_ERRORS.GENERAL_LOGIN_ERROR),
        onClose: () => setModalData(null),
      });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} isLoading={isLoading} />

      {modalData && (
        <StatusModal
          open
          title={modalData.title}
          message={modalData.message}
          onClose={modalData.onClose}
        />
      )}
    </div>
  );
};

export default LoginPage;
