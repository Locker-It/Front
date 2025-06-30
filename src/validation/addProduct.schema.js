import * as yup from 'yup';

import { PRODUCT_FORM_TEXT } from '../components/Forms/forms.constants.js';
import { ADD_PRODUCT_CONSTANTS, PRODUCT_CATEGORIES } from '../components/Forms/ProductForm/productForm.constant.js';
import { IMAGE_VALIDATION } from '../constants/upload.constants.js';

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

  images: yup
    .array()
    .of(yup.string().url(IMAGE_VALIDATION.ERROR_MESSAGE))
    .min(1, IMAGE_VALIDATION.ERROR_MESSAGE),
});
