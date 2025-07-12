import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { TextField, Stack } from '@mui/material';

import { StyledPaper, FormWrapper } from './Form.styles.js';
import { BUTTON_TEXT } from '../../constants/buttons.constants.js';
import { PAYMENT_TEXT } from '../../constants/hardText.js';
import {
  CARD_NUMBER_REGEX,
  EXPIRY_REGEX,
  CVV_REGEX,
} from '../../constants/regex.js';
import { BUTTON_VARIANTS } from '../../constants/types.js';
import ActionButton from '../shared/Button/ActionButton.jsx';
import SharedTypography from '../shared/Text/SharedTypography.jsx';
import { TEXT_VARIANTS } from '../../constants/types.js';

const paymentSchema = yup.object({
  cardNumber: yup
    .string()
    .required(PAYMENT_TEXT.CARD_NUMBER_REQUIRED)
    .matches(CARD_NUMBER_REGEX, PAYMENT_TEXT.CARD_NUMBER_INVALID),
  expiry: yup
    .string()
    .required(PAYMENT_TEXT.EXPIRY_REQUIRED)
    .matches(EXPIRY_REGEX, PAYMENT_TEXT.EXPIRY_INVALID),
  cvv: yup
    .string()
    .required(PAYMENT_TEXT.CVV_REQUIRED)
    .matches(CVV_REGEX, PAYMENT_TEXT.CVV_INVALID),
  cardHolder: yup.string().required(PAYMENT_TEXT.CARD_HOLDER_REQUIRED),
});

export default function PaymentForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(paymentSchema) });

  return (
    <StyledPaper elevation={3}>
      <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>
        {PAYMENT_TEXT.TITLE}
      </SharedTypography>
      <FormWrapper
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Stack spacing={2}>
          <TextField
            label={PAYMENT_TEXT.CARD_NUMBER_LABEL}
            fullWidth
            variant="outlined"
            {...register('cardNumber')}
            error={!!errors.cardNumber}
            helperText={errors.cardNumber?.message}
          />
          <TextField
            label={PAYMENT_TEXT.EXPIRY_LABEL}
            fullWidth
            variant="outlined"
            {...register('expiry')}
            error={!!errors.expiry}
            helperText={errors.expiry?.message}
          />
          <TextField
            label={PAYMENT_TEXT.CVV_LABEL}
            fullWidth
            variant="outlined"
            {...register('cvv')}
            error={!!errors.cvv}
            helperText={errors.cvv?.message}
          />
          <TextField
            label={PAYMENT_TEXT.CARD_HOLDER_LABEL}
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
            {BUTTON_TEXT.SUBMIT}
          </ActionButton>
        </Stack>
      </FormWrapper>
    </StyledPaper>
  );
}
