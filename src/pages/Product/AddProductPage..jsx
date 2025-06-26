import React from 'react';

import { useNavigate } from 'react-router-dom';

import AddProductForm from '../../components/Forms/PoductForm/AddProductForm';
import SharedTypography from '../../components/shared/Text/SharedTypography.jsx';
import { AUTH_ERRORS } from '../../constants/errorMessages.js';
import { ROUTES } from '../../constants/routes.constants.js';
import { useAddProductMutation } from '../../services/productApi';
import { extractApiError } from '../../utils/authErrors.js';

export default function AddProductPage() {
  const navigate = useNavigate();
  const [addProduct, { isLoading, error }] = useAddProductMutation();

  const handleAddProduct = async (formData) => {
    try {
      await addProduct(formData).unwrap();
      navigate(ROUTES.PRODUCTS);
    } catch (err) {
      console.error(AUTH_ERRORS.PRODUCT_CREATE_FAILED || 'Failed to add product', err);
    }
  };

  return (
    <div>
      <AddProductForm onSubmit={handleAddProduct} isLoading={isLoading} />
      {error && (
        <SharedTypography variant="body2" color="error">
          {extractApiError(error, AUTH_ERRORS.GENERAL_PRODUCT_ERROR)}
        </SharedTypography>
      )}
    </div>
  );
}
