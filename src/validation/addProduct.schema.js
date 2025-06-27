import * as yup from 'yup';

import { PRODUCT_FORM_TEXT } from '../components/Forms/forms.constants.js';
import { ADD_PRODUCT_CONSTANTS } from '../components/Forms/PoductForm/productForm.constant.js';

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

  image: yup
    .mixed()
    .test('fileType', 'Unsupported File Format', (value) => {
      if (!value || value.length === 0) return true; // optional
      return ['image/jpeg', 'image/png', 'image/webp'].includes(value[0].type);
    }),
});
