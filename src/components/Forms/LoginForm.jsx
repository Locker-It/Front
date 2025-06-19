import React from 'react';
import { TextField, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ActionButton from '../shared/Button/ActionButton';
import { LOGIN_TEXT } from '../../constants/text';
import { StyledPaper, TitleWrapper, FormWrapper } from './Form.styled';
import { ROUTES } from "../../constants/routerPaths.js";
import { BUTTON_VARIANTS } from '../../constants/buttonTypes.js';

const loginSchema = yup.object({
  username: yup.string().required(LOGIN_TEXT.usernameRequired),
  password: yup.string().required(LOGIN_TEXT.passwordRequired),
});

export default function LoginForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(loginSchema) });

  return (
    <StyledPaper elevation={3}>
      <TitleWrapper>
        <h2>{LOGIN_TEXT.title}</h2>
      </TitleWrapper>
      <FormWrapper
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Stack spacing={2}>
          <TextField
            label={LOGIN_TEXT.usernameLabel}
            fullWidth
            variant="outlined"
            {...register('username')}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            label={LOGIN_TEXT.passwordLabel}
            type="password"
            fullWidth
            variant="outlined"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <ActionButton
            type="submit"
            size="large"
            disabled={isSubmitting}
            fullWidth
            styleType={BUTTON_VARIANTS.FILLED}
          >
            {LOGIN_TEXT.submit}
          </ActionButton>

          <ActionButton
            to={ROUTES.REGISTER}
            size="small"
            fullWidth
            styleType={BUTTON_VARIANTS.TEXT}
          >
            {LOGIN_TEXT.signupLinkText}
          </ActionButton>
        </Stack>
      </FormWrapper>
    </StyledPaper>
  );
}
