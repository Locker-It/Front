import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { TextField, Stack, MenuItem, Autocomplete, Chip } from '@mui/material';
import { ERROR_MESSAGES } from '../../../constants/errorMessages.js';
import { BUTTON_VARIANTS } from '../../../constants/types';
import { LOCKER_TEXT } from '../../../constants/hardText.js';
import { addProductSchema } from '../../../validation/addProduct.schema';
import ActionButton from '../../shared/Button/ActionButton';
import { StyledPaper, TitleWrapper, FormWrapper } from '../Form.styles';
import {
  ADD_PRODUCT_CONSTANTS,
  PRODUCT_CATEGORIES,
} from './productForm.constant';
import SharedTypography from '../../shared/Text/SharedTypography';
import { PRODUCT_FORM_TEXT } from '../forms.constants';
import ImageDropzone from './ImageDropzone.jsx';
import { LOCKER_LOCATION } from '../../../utils/textTemplates.js';
import { useImageUpload } from '../../../hooks/useImageUpload.js';

export default function AddProductForm({ onSubmit, isLoading, lockers = [] }) {
  const {
    preview,
    handleFileSelect,
    uploadFileToS3,
    resetPreview,
    isUploading,
  } = useImageUpload();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(addProductSchema),

    defaultValues: {
      selectedLockerIds: [],
    },
  });
  const selectedLockerIds = watch(LOCKER_TEXT.SELECTED_LOCKER_IDS);

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
            <MenuItem value="">{PRODUCT_FORM_TEXT.SELECT_A_CATEGORY} </MenuItem>
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

          <Autocomplete
            multiple
            options={lockers}
            getOptionLabel={(locker) =>
              LOCKER_LOCATION.LOCKER_LABEL(locker.lockerNumber, locker.location)
            }
            value={lockers.filter((locker) =>
              selectedLockerIds.includes(locker.id),
            )}
            onChange={(event, newValue) => {
              setValue(
                LOCKER_TEXT.SELECTED_LOCKER_IDS,
                newValue.map((locker) => locker.id),
              );
            }}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderTags={(selected, getTagProps) =>
              selected.map((locker, index) => (
                <Chip
                  label={`#${locker.lockerNumber}`}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label={LOCKER_TEXT.SELECT_LOCKERS}
                error={!!errors.selectedLockerIds}
                helperText={errors.selectedLockerIds?.message}
              />
            )}
            disabled={lockers.length === 0}
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
