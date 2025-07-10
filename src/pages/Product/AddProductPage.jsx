import React from 'react';
import AddProductForm from '../../components/Forms/ProductForm/AddProductForm';
import { StatusModal } from '../../components/shared/Modal/StatusModal.jsx';
import SharedTypography from '../../components/shared/Text/SharedTypography.jsx';
import { AUTH_ERRORS, ERROR_MESSAGES } from '../../constants/errorMessages.js';
import { TIMER } from '../../constants/hardText.js';
import { ROUTES } from '../../constants/routes.constants.js';
import { MODAL_TYPES } from '../../constants/types.js';
import { useModal } from '../../hooks/useModal.js';
import { useAddProductMutation } from '../../services/product/productApi.js';
import { uploadProductWithImage } from '../../services/product/productService.js';
import { extractApiError } from '../../utils/authErrors.js';
import { useGetFreeLockersQuery } from '../../services/lockerApi';
import { Box } from '@mui/material';
import { TEXT_VARIANTS } from '../../constants/types.js';

export default function AddProductPage() {
  const [addProduct, { isLoading, error }] = useAddProductMutation();
  const { modalData, showModal, closeModal } = useModal();

  const { data: lockers = [], isLoading: isLockersLoading } =
    useGetFreeLockersQuery();

  const handleAddProduct = async (formData) => {
    try {
      await uploadProductWithImage(formData, addProduct);

      showModal({
        type: MODAL_TYPES.SUCCESS,
        title: MODAL_TYPES.PRODUCT_ADDED,
        message: MODAL_TYPES.PRODUCT_ADDED_MESSAGE,
        autoCloseAfter: TIMER.MODAL_TIMEOUT,
        onClose: closeModal,
        navigateTo: ROUTES.PRODUCTS,
      });
    } catch (err) {
      showModal({
        type: MODAL_TYPES.ERROR,
        title: ERROR_MESSAGES.PRODUCT_UPLOAD_ERROR,
        message: extractApiError(err, AUTH_ERRORS.GENERAL_PRODUCT_ERROR),
        onClose: closeModal,
      });
    }
  };

  return (
    <Box>
      <AddProductForm
        onSubmit={handleAddProduct}
        isLoading={isLoading}
        lockers={lockers}
        isLockersLoading={isLockersLoading}
      />
      {modalData && <StatusModal open {...modalData} />}
      {error && (
        <SharedTypography variant={TEXT_VARIANTS.DEFAULT} color="error" component="p">
          {extractApiError(error, AUTH_ERRORS.GENERAL_PRODUCT_ERROR)}
        </SharedTypography>
      )}
    </Box>
  );
}
