import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { TextField, Stack } from '@mui/material';

import { StyledPaper, TitleWrapper, FormWrapper } from './Form.styles';
import { SIGN_UP_CONSTANTS, SIGNUP_TEXT } from './forms.constants.js';
import { ROUTES } from '../../constants/routes.constants.js';
import { BUTTON_VARIANTS } from '../../constants/types.js';
import ActionButton from '../shared/Button/ActionButton.jsx';

const signupSchema = yup.object({
  [SIGN_UP_CONSTANTS.NAME]: yup.string().required(SIGNUP_TEXT.nameRequired),
  [SIGN_UP_CONSTANTS.USERNAME]: yup
    .string()
    .required(SIGNUP_TEXT.usernameRequired),
  [SIGN_UP_CONSTANTS.EMAIL]: yup
    .string()
    .email(SIGNUP_TEXT.invalidEmail)
    .required(SIGNUP_TEXT.emailRequired),
  [SIGN_UP_CONSTANTS.PASSWORD]: yup
    .string()
    .min(SIGN_UP_CONSTANTS.PASSWORD_MIN_LENGTH, SIGNUP_TEXT.passwordMin)
    .required(SIGNUP_TEXT.passwordRequired),
  [SIGN_UP_CONSTANTS.CONFIRM_PASSWORD]: yup
    .string()
    .oneOf([yup.ref(SIGN_UP_CONSTANTS.PASSWORD)], SIGNUP_TEXT.passwordMismatch)
    .required(SIGNUP_TEXT.confirmPasswordRequired),
});

export default function SignUpForm({ onSubmit, isLoading }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(signupSchema) });

  return (
    <StyledPaper elevation={3}>
      <TitleWrapper>
        <h2>{SIGNUP_TEXT.title}</h2>
      </TitleWrapper>
      <FormWrapper
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Stack spacing={2}>
          <TextField
            label={SIGNUP_TEXT.nameLabel}
            fullWidth
            variant="outlined"
            {...register(SIGN_UP_CONSTANTS.NAME)}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label={SIGNUP_TEXT.usernameLabel}
            fullWidth
            variant="outlined"
            {...register(SIGN_UP_CONSTANTS.USERNAME)}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            label={SIGNUP_TEXT.emailLabel}
            fullWidth
            variant="outlined"
            {...register(SIGN_UP_CONSTANTS.EMAIL)}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label={SIGNUP_TEXT.passwordLabel}
            type="password"
            fullWidth
            variant="outlined"
            {...register(SIGN_UP_CONSTANTS.PASSWORD)}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            label={SIGNUP_TEXT.confirmPasswordLabel}
            type="password"
            fullWidth
            variant="outlined"
            {...register(SIGN_UP_CONSTANTS.CONFIRM_PASSWORD)}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
          <ActionButton
            type="submit"
            size="large"
            disabled={isSubmitting || isLoading}
            fullWidth
            styleType={BUTTON_VARIANTS.FILLED}
          >
            {SIGNUP_TEXT.submit}
          </ActionButton>
          <ActionButton
            to={ROUTES.LOGIN}
            size="small"
            fullWidth
            styleType={BUTTON_VARIANTS.TEXT}
          >
            {SIGNUP_TEXT.loginLinkText}
          </ActionButton>
        </Stack>
      </FormWrapper>
    </StyledPaper>
  );
}
