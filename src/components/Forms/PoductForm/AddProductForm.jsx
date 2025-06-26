import React, { useCallback, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { TextField, Stack, MenuItem } from '@mui/material';

import { StyledPaper, TitleWrapper, FormWrapper, DropzoneContainer, PreviewImage} from '../Form.styled.js';
import { ADD_PRODUCT_CONSTANTS, PRODUCT_CATEGORIES } from './productForm.constant.js';
import { BUTTON_VARIANTS } from '../../../constants/types.js';
import ActionButton from '../../shared/Button/ActionButton.jsx';
import SharedTypography from '../../shared/Text/SharedTypography.jsx';
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
  image: yup
    .mixed()
    .required('Image is required')
    .test('fileType', 'Unsupported File Format', (value) => {
      return (
        value &&
        value[0] &&
        ['image/jpeg', 'image/png', 'image/webp'].includes(value[0].type)
      );
    }),
});

export default function AddProductForm({ onSubmit, isLoading }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [preview, setPreview] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles?.length > 0) {
        const file = acceptedFiles[0];
        setValue('image', [file]);
        setPreview(URL.createObjectURL(file));
      }
    },
    [setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
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
            inputProps={{
              inputMode: 'decimal',
              step: 'any',
              min: 0,
              style: { MozAppearance: 'textfield' },
            }}
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

          <DropzoneContainer {...getRootProps()} className={isDragActive ? 'active' : ''}>
            <input {...getInputProps()} />
            <p>
              {isDragActive
                ? 'Drop the image here...'
                : 'Drag & drop an image here, or click to select'}
            </p>
            {preview && <PreviewImage src={preview} alt="Preview" />}
          </DropzoneContainer>

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
