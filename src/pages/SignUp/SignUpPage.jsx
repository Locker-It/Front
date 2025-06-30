import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import SignupForm from '../../components/Forms/SignUpForm';
import { StatusModal } from '../../components/shared/Modal/StatusModal.jsx';
import { AUTH_ERRORS } from '../../constants/errorMessages.js';
import { TIMER } from '../../constants/hardText.js';
import { ROUTES } from '../../constants/routes.constants.js';
import { MODAL_TYPES } from '../../constants/types.js';
import { useModal } from '../../hooks/useModal.js';
import { useRegisterUserMutation } from '../../services/authApi';
import { extractApiError } from '../../utils/authErrors.js';

const SignUpPage = () => {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { modalData, showModal, closeModal } = useModal();

  const handleSignup = async (formData) => {
    try {
      await registerUser(formData).unwrap();

      showModal({
        type: MODAL_TYPES.SUCCESS,
        title: MODAL_TYPES.ACCOUNT_CREATED,
        message: MODAL_TYPES.ACCOUNT_HAS_CREATED_SUCCESSFULLY,
        autoCloseAfter: TIMER.TIMEOUT,
        navigateTo: ROUTES.LOGIN,
        onClose: closeModal,
      });
    } catch (err) {
      showModal({
        type: MODAL_TYPES.ERROR,
        title: MODAL_TYPES.REGISTRATION_FAILED,
        message: extractApiError(err, AUTH_ERRORS.GENERAL_REGISTER_ERROR),
        onClose: closeModal,
      });
    }
  };

  return (
    <div>
      <SignupForm onSubmit={handleSignup} isLoading={isLoading} />

      {modalData && <StatusModal open {...modalData} />}
    </div>
  );
};

export default SignUpPage;
