import * as yup from 'yup';

import { PRODUCT_FORM_TEXT } from '../components/Forms/forms.constants.js';
import { ADD_PRODUCT_CONSTANTS, PRODUCT_CATEGORIES } from '../components/Forms/ProductForm/productForm.constant.js';
import { IMAGE_VALIDATION, SUPPORTED_IMAGE_TYPES } from '../constants/upload.constants.js';

export const addProductSchema = yup.object({
  [ADD_PRODUCT_CONSTANTS.PRODUCT_NAME]: yup
    .string()
    .required(PRODUCT_FORM_TEXT.PRODUCT_NAME_REQUIRED),

  [ADD_PRODUCT_CONSTANTS.PRICE]: yup
    .number()
    .typeError(PRODUCT_FORM_TEXT.PRICE_INVALID)
    .positive(PRODUCT_FORM_TEXT.PRICE_POSITIVE)
    .required(PRODUCT_FORM_TEXT.PRICE_REQUIRED),

  [ADD_PRODUCT_CONSTANTS.DESCRIPTION]: yup
    .string()
    .required(PRODUCT_FORM_TEXT.DESCRIPTION_REQUIRED),

  [ADD_PRODUCT_CONSTANTS.CATEGORY]: yup
    .string()
    .oneOf(PRODUCT_CATEGORIES, PRODUCT_FORM_TEXT.CATEGORY_INVALID)
    .required(PRODUCT_FORM_TEXT.CATEGORY_REQUIRED),

  image: yup
    .mixed()
    // TODO: When using image upload microservice, consider removing this validation
    .test(IMAGE_VALIDATION.TEST_NAME, IMAGE_VALIDATION.ERROR_MESSAGE, (value) => {
      if (!value || value.length === 0) return true;
      return SUPPORTED_IMAGE_TYPES.includes(value[0].type);
    }),
});
