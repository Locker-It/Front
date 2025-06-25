import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { TextField, Stack } from '@mui/material';

import { StyledPaper, FormWrapper } from './Form.styled.js';
import { PAYMENT_TEXT } from '../../constants/hardText.js';
import {
  CARD_NUMBER_REGEX,
  EXPIRY_REGEX,
  CVV_REGEX,
} from '../../constants/regex.js';
import { BUTTON_VARIANTS } from '../../constants/types.js';
import ActionButton from '../shared/Button/ActionButton.jsx';
import SharedTypography from '../shared/Text/SharedTypography.jsx';

const paymentSchema = yup.object({
  cardNumber: yup
    .string()
    .required(PAYMENT_TEXT.cardNumberRequired)
    .matches(CARD_NUMBER_REGEX, PAYMENT_TEXT.cardNumberInvalid),
  expiry: yup
    .string()
    .required(PAYMENT_TEXT.expiryRequired)
    .matches(EXPIRY_REGEX, PAYMENT_TEXT.expiryInvalid),
  cvv: yup
    .string()
    .required(PAYMENT_TEXT.cvvRequired)
    .matches(CVV_REGEX, PAYMENT_TEXT.cvvInvalid),
  cardHolder: yup.string().required(PAYMENT_TEXT.cardHolderRequired),
});

export default function PaymentForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(paymentSchema) });

  return (
    <StyledPaper elevation={3}>
      <SharedTypography variant="h5">
        {PAYMENT_TEXT.title}
      </SharedTypography>
      <FormWrapper
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Stack spacing={2}>
          <TextField
            label={PAYMENT_TEXT.cardNumberLabel}
            fullWidth
            variant="outlined"
            {...register('cardNumber')}
            error={!!errors.cardNumber}
            helperText={errors.cardNumber?.message}
          />
          <TextField
            label={PAYMENT_TEXT.expiryLabel}
            fullWidth
            variant="outlined"
            {...register('expiry')}
            error={!!errors.expiry}
            helperText={errors.expiry?.message}
          />
          <TextField
            label={PAYMENT_TEXT.cvvLabel}
            fullWidth
            variant="outlined"
            {...register('cvv')}
            error={!!errors.cvv}
            helperText={errors.cvv?.message}
          />
          <TextField
            label={PAYMENT_TEXT.cardHolderLabel}
            fullWidth
            variant="outlined"
            {...register('cardHolder')}
            error={!!errors.cardHolder}
            helperText={errors.cardHolder?.message}
          />
          <ActionButton
            type="submit"
            size="large"
            disabled={isSubmitting}
            fullWidth
            styleType={BUTTON_VARIANTS.FILLED}
          >
            {PAYMENT_TEXT.submit}
          </ActionButton>
        </Stack>
      </FormWrapper>
    </StyledPaper>
  );
}
