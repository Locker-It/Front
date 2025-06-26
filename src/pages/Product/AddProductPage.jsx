import React from 'react';

import { useNavigate } from 'react-router-dom';

import AddProductForm from '../../components/Forms/PoductForm/AddProductForm';
import SharedTypography from '../../components/shared/Text/SharedTypography.jsx';
import { AUTH_ERRORS } from '../../constants/errorMessages.js';
import { ROUTES } from '../../constants/routes.constants.js';
import { useAddProductMutation } from '../../services/productApi';
import { extractApiError } from '../../utils/authErrors.js';
import { getPresignedUrl } from '../../utils/s3Uploader.js';

export default function AddProductPage() {
  const navigate = useNavigate();
  const [addProduct, { isLoading, error }] = useAddProductMutation();

  const handleAddProduct = async (formData) => {
    try {
      const imageFile = formData.image[0];

      // 1. Get presigned URL from backend
      const { url, key } = await getPresignedUrl(imageFile.name, imageFile.type);

      // 2. Upload image to S3
      await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': imageFile.type },
        body: imageFile,
      });

      // 3. Send product data to backend (with image URL)
      const productToSubmit = {
        ...formData,
        imageUrl: key, // Assuming your backend expects the S3 key as the image URL
      };

      await addProduct(productToSubmit).unwrap();
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
