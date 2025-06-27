import React from 'react';

import { useNavigate } from 'react-router-dom';

import AddProductForm from '../../components/Forms/ProductForm/AddProductForm';
import SharedTypography from '../../components/shared/Text/SharedTypography.jsx';
import { AUTH_ERRORS } from '../../constants/errorMessages.js';
import { ROUTES } from '../../constants/routes.constants.js';
import { useAddProductMutation } from '../../services/product/productApi.js';
import { uploadProductWithImage } from '../../services/product/productService.js';
import { extractApiError } from '../../utils/authErrors.js';

export default function AddProductPage() {
  const navigate = useNavigate();
  const [addProduct, { isLoading, error }] = useAddProductMutation();

  const handleAddProduct = async (formData) => {
    try {
      // TODO: When image upload service is available, upload image before calling backend
      await uploadProductWithImage(formData, addProduct);
      navigate(ROUTES.PRODUCTS);
    } catch (err) {
      console.error(AUTH_ERRORS.PRODUCT_CREATE_FAILED, err);
    }
  };

  return (
    <div>
      <AddProductForm onSubmit={handleAddProduct} isLoading={isLoading} />
      {error && (
        <SharedTypography variant="body2" color="error" component="p">
          {extractApiError(error, AUTH_ERRORS.GENERAL_PRODUCT_ERROR)}
        </SharedTypography>
      )}
    </div>
  );
}
