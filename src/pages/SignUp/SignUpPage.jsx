import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import SignupForm from '../../components/Forms/SignUpForm';
import { AUTH_ERRORS } from '../../constants/errorMessages.js';
import { ROUTES } from '../../constants/routes.constants.js';
import { useRegisterUserMutation } from '../../services/authApi';
import { extractApiError } from '../../utils/authErrors.js';
import { StatusModal } from '../../components/shared/Modal/StatusModal.jsx';
import { MODAL_TYPES } from '../../constants/types.js';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(ROUTES.HOME);
    }
  }, [isLoggedIn, navigate]);

  const handleSignup = async (formData) => {
    try {
      await registerUser(formData).unwrap();

      setModalData({
        type: MODAL_TYPES.SUCCESS,
        title: MODAL_TYPES.ACCOUNT_CREATED,
        message: MODAL_TYPES.ACCOUNT_HAS_CREATED_SUCCESSFULLY,
        onClose: () => {
          setModalData(null);
          navigate(ROUTES.LOGIN);
        },
      });
    } catch (err) {
      setModalData({
        type: MODAL_TYPES.ERROR,
        title: MODAL_TYPES.REGISTRATION_FAILED,
        message: extractApiError(err, AUTH_ERRORS.GENERAL_REGISTER_ERROR),
        onClose: () => setModalData(null),
      });
    }
  };

  return (
    <div>
      <SignupForm onSubmit={handleSignup} isLoading={isLoading} />

      {modalData && (
        <StatusModal
          open
          type={modalData.type}
          title={modalData.title}
          message={modalData.message}
          onClose={modalData.onClose}
        />
      )}
    </div>
  );
};

export default SignUpPage;
