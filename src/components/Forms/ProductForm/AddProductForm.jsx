import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { TextField, Stack, MenuItem } from '@mui/material';

import { ERROR_MESSAGES } from '../../../constants/errorMessages.js';
import { BUTTON_VARIANTS } from '../../../constants/types';
import ActionButton from '../../shared/Button/ActionButton';
import { StyledPaper, TitleWrapper, FormWrapper } from '../Form.styled';
import {
  ADD_PRODUCT_CONSTANTS,
  PRODUCT_CATEGORIES,
} from './productForm.constant';
import SharedTypography from '../../shared/Text/SharedTypography';
import { PRODUCT_FORM_TEXT } from '../forms.constants';
import ImageDropzone from './ImageDropzone.jsx';
import { useImageUpload } from '../../../hooks/useImageUpload.js';
import { addProductSchema } from '../../../validation/addProduct.schema.js';



export default function AddProductForm({ onSubmit, isLoading }) {
  const { preview, handleFileSelect, uploadFileToS3 , resetPreview, isUploading } = useImageUpload();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(addProductSchema),
    defaultValues: {
      [ADD_PRODUCT_CONSTANTS.CATEGORY]: '',
    },
  });
  const isFormDisabled = isSubmitting || isLoading || isUploading;
  const handleFormSubmit = async (data) => {
    try {
      if (preview) {
        const publicUrl = await uploadFileToS3();
        if (!publicUrl) {
          throw new Error(ERROR_MESSAGES.S3_UPLOAD_FAILED);
        }
        data.images = [publicUrl];
      }

      await onSubmit(data);

      reset();
      resetPreview();
    } catch (error) {
      console.error(ERROR_MESSAGES.SUBMIT_FAILED, error);
    }
  };

  return (
    <StyledPaper elevation={3}>
      <TitleWrapper>
        <SharedTypography variant="GREY_TITLE">
          {PRODUCT_FORM_TEXT.TITLE}
        </SharedTypography>
      </TitleWrapper>

      <FormWrapper
        onSubmit={handleSubmit(handleFormSubmit)}
        noValidate
        component="form"
      >
        <Stack spacing={2}>
          <TextField
            label={PRODUCT_FORM_TEXT.PRODUCT_NAME_LABEL}
            fullWidth
            defaultValue=""
            {...register(ADD_PRODUCT_CONSTANTS.PRODUCT_NAME)}
            error={!!errors[ADD_PRODUCT_CONSTANTS.PRODUCT_NAME]}
            helperText={errors[ADD_PRODUCT_CONSTANTS.PRODUCT_NAME]?.message}
          />

          <TextField
            label={PRODUCT_FORM_TEXT.CATEGORY_LABEL}
            select
            fullWidth
            defaultValue=""
            {...register(ADD_PRODUCT_CONSTANTS.CATEGORY)}
            error={!!errors[ADD_PRODUCT_CONSTANTS.CATEGORY]}
            helperText={errors[ADD_PRODUCT_CONSTANTS.CATEGORY]?.message}
          >
            <MenuItem value="">Select a category</MenuItem>
            {PRODUCT_CATEGORIES.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label={PRODUCT_FORM_TEXT.PRICE_LABEL}
            type="number"
            fullWidth
            defaultValue=""
            inputProps={{ inputMode: 'decimal', step: 'any', min: 0 }}
            {...register(ADD_PRODUCT_CONSTANTS.PRICE)}
            error={!!errors[ADD_PRODUCT_CONSTANTS.PRICE]}
            helperText={errors[ADD_PRODUCT_CONSTANTS.PRICE]?.message}
          />

          <TextField
            label={PRODUCT_FORM_TEXT.DESCRIPTION_LABEL}
            fullWidth
            multiline
            rows={4}
            defaultValue=""
            {...register(ADD_PRODUCT_CONSTANTS.DESCRIPTION)}
            error={!!errors[ADD_PRODUCT_CONSTANTS.DESCRIPTION]}
            helperText={errors[ADD_PRODUCT_CONSTANTS.DESCRIPTION]?.message}
          />

          <ImageDropzone preview={preview} onFileSelect={handleFileSelect} />

          {errors.images && (
            <SharedTypography variant="body2" color="error">
              {errors.images.message}
            </SharedTypography>
          )}


          <ActionButton
            type="submit"
            disabled={isFormDisabled}
            styleType={BUTTON_VARIANTS.FILLED}
          >
            {PRODUCT_FORM_TEXT.SUBMIT}
          </ActionButton>
        </Stack>
      </FormWrapper>
    </StyledPaper>
  );
}
