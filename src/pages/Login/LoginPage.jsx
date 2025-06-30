import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../../components/Forms/LoginForm.jsx';
import { StatusModal } from '../../components/shared/Modal/StatusModal.jsx';
import { AUTH_ERRORS } from '../../constants/errorMessages.js';
import { ROUTES } from '../../constants/routes.constants.js';
import { MODAL_TYPES } from '../../constants/types.js';
import { useLoginUserMutation } from '../../services/authApi.js';
import { extractApiError } from '../../utils/authErrors.js';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginUser, { isLoading}] = useLoginUserMutation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [modalData, setModalData] = useState(null);

  const handleLogin = async (credentials) => {
    try {
      await loginUser(credentials).unwrap();
        navigate(ROUTES.HOME);
    } catch (err) {
      setModalData({
        type: MODAL_TYPES.ERROR,
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
          {...modalData}
        />
      )}
    </div>
  );
};

export default LoginPage;
