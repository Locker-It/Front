import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { TextField, Stack, MenuItem } from '@mui/material';

import { StyledPaper, TitleWrapper, FormWrapper } from '../Form.styled.js';
import { ADD_PRODUCT_CONSTANTS, PRODUCT_CATEGORIES } from './productForm.constant.js';
import { BUTTON_VARIANTS } from '../../../constants/types.js';
import ActionButton from '../../shared/Button/ActionButton.jsx';
import { PRODUCT_FORM_TEXT } from '../forms.constants.js';

const schema = yup.object({
  [ADD_PRODUCT_CONSTANTS.PRODUCT_NAME.toLowerCase()]: yup
    .string()
    .required(PRODUCT_FORM_TEXT.PRODUCT_NAME_REQUIRED),
  [ADD_PRODUCT_CONSTANTS.DESCRIPTION.toLowerCase()]: yup
    .string()
    .required(PRODUCT_FORM_TEXT.DESCRIPTION_REQUIRED),
  [ADD_PRODUCT_CONSTANTS.PRICE.toLowerCase()]: yup
    .number()
    .typeError(PRODUCT_FORM_TEXT.PRICE_INVALID)
    .positive(PRODUCT_FORM_TEXT.PRICE_POSITIVE)
    .required(PRODUCT_FORM_TEXT.PRICE_REQUIRED),
  [ADD_PRODUCT_CONSTANTS.CATEGORY.toLowerCase()]: yup
    .string()
    .required(PRODUCT_FORM_TEXT.CATEGORY_REQUIRED),
  [ADD_PRODUCT_CONSTANTS.IMAGE_URL.toLowerCase()]: yup
    .string()
    .url(PRODUCT_FORM_TEXT.IMAGE_URL_INVALID)
    .nullable()
    .notRequired(),
});

export default function AddProductForm({ onSubmit, isLoading }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <StyledPaper elevation={3}>
      <TitleWrapper>
        <h2>{PRODUCT_FORM_TEXT.TITLE}</h2>
      </TitleWrapper>
      <FormWrapper onSubmit={handleSubmit(onSubmit)} noValidate component="form">
        <Stack spacing={2}>
          <TextField
            label={PRODUCT_FORM_TEXT.PRODUCT_NAME_LABEL}
            fullWidth
            {...register(ADD_PRODUCT_CONSTANTS.PRODUCT_NAME.toLowerCase())}
            error={!!errors[ADD_PRODUCT_CONSTANTS.PRODUCT_NAME.toLowerCase()]}
            helperText={errors[ADD_PRODUCT_CONSTANTS.PRODUCT_NAME.toLowerCase()]?.message}
          />
          <TextField
            label={PRODUCT_FORM_TEXT.DESCRIPTION_LABEL}
            fullWidth
            multiline
            rows={4}
            {...register(ADD_PRODUCT_CONSTANTS.DESCRIPTION.toLowerCase())}
            error={!!errors[ADD_PRODUCT_CONSTANTS.DESCRIPTION.toLowerCase()]}
            helperText={errors[ADD_PRODUCT_CONSTANTS.DESCRIPTION.toLowerCase()]?.message}
          />
          <TextField
            label={PRODUCT_FORM_TEXT.PRICE_LABEL}
            type="number"
            fullWidth
            {...register(ADD_PRODUCT_CONSTANTS.PRICE.toLowerCase())}
            error={!!errors[ADD_PRODUCT_CONSTANTS.PRICE.toLowerCase()]}
            helperText={errors[ADD_PRODUCT_CONSTANTS.PRICE.toLowerCase()]?.message}
          />
          <TextField
            label={PRODUCT_FORM_TEXT.CATEGORY_LABEL}
            select
            fullWidth
            {...register(ADD_PRODUCT_CONSTANTS.CATEGORY.toLowerCase())}
            error={!!errors[ADD_PRODUCT_CONSTANTS.CATEGORY.toLowerCase()]}
            helperText={errors[ADD_PRODUCT_CONSTANTS.CATEGORY.toLowerCase()]?.message}
          >
            {PRODUCT_CATEGORIES.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label={PRODUCT_FORM_TEXT.IMAGE_URL_LABEL}
            fullWidth
            {...register(ADD_PRODUCT_CONSTANTS.IMAGE_URL.toLowerCase())}
            error={!!errors[ADD_PRODUCT_CONSTANTS.IMAGE_URL.toLowerCase()]}
            helperText={errors[ADD_PRODUCT_CONSTANTS.IMAGE_URL.toLowerCase()]?.message}
          />
          <ActionButton
            type="submit"
            size="large"
            disabled={isSubmitting || isLoading}
            fullWidth
            styleType={BUTTON_VARIANTS.FILLED}
          >
            {PRODUCT_FORM_TEXT.SUBMIT}
          </ActionButton>
        </Stack>
      </FormWrapper>
    </StyledPaper>
  );
}
