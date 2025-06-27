import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';

import { TextField, Stack } from '@mui/material';

import { BUTTON_VARIANTS } from '../../../constants/types';
import { useImageUpload } from '../../../hooks/useImageUpload';
import { addProductSchema } from '../../../validation/addProduct.schema';
import ActionButton from '../../shared/Button/ActionButton';
import {
  StyledPaper,
  TitleWrapper,
  FormWrapper,
} from '../Form.styled';
import { ADD_PRODUCT_CONSTANTS } from './productForm.constant';
import SharedTypography from '../../shared/Text/SharedTypography';
import { PRODUCT_FORM_TEXT } from '../forms.constants';
import ImageDropzone from './ImageDropzone.jsx';

export default function AddProductForm({ onSubmit, isLoading }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(addProductSchema),
  });
// TODO: In future, image upload will be handled by microservice – update accordingly
  const { preview, onDrop } = useImageUpload(setValue);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
  });

  return (
    <StyledPaper elevation={3}>
      <TitleWrapper>
        <SharedTypography variant="GREY_TITLE">
          {PRODUCT_FORM_TEXT.TITLE}
        </SharedTypography>
      </TitleWrapper>

      <FormWrapper onSubmit={handleSubmit(onSubmit)} noValidate component="form">
        <Stack spacing={2}>
          <TextField
            label={PRODUCT_FORM_TEXT.PRODUCT_NAME_LABEL}
            fullWidth
            {...register(ADD_PRODUCT_CONSTANTS.PRODUCT_NAME)}
            error={!!errors[ADD_PRODUCT_CONSTANTS.PRODUCT_NAME]}
            helperText={errors[ADD_PRODUCT_CONSTANTS.PRODUCT_NAME]?.message}
          />

          <TextField
            label={PRODUCT_FORM_TEXT.PRICE_LABEL}
            type="number"
            fullWidth
            inputProps={{
              inputMode: 'decimal',
              step: 'any',
              min: 0,
            }}
            {...register(ADD_PRODUCT_CONSTANTS.PRICE)}
            error={!!errors[ADD_PRODUCT_CONSTANTS.PRICE]}
            helperText={errors[ADD_PRODUCT_CONSTANTS.PRICE]?.message}
          />

          <TextField
            label={PRODUCT_FORM_TEXT.DESCRIPTION_LABEL}
            fullWidth
            multiline
            rows={4}
            {...register(ADD_PRODUCT_CONSTANTS.DESCRIPTION)}
            error={!!errors[ADD_PRODUCT_CONSTANTS.DESCRIPTION]}
            helperText={errors[ADD_PRODUCT_CONSTANTS.DESCRIPTION]?.message}
          />

          <ImageDropzone
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            isDragActive={isDragActive}
            preview={preview}
          />

          {errors.image && (
            <SharedTypography variant="body2" color="error">
              {errors.image.message}
            </SharedTypography>
          )}

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
