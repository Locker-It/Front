import React from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { StyledSharedTypography } from '../../components/Product/Product.styled.js';
import ProductSkeleton from '../../components/Product/ProductSkeleton.jsx';
import ProductView from '../../components/Product/ProductView.jsx';
import { StatusModal } from '../../components/shared/Modal/StatusModal.jsx';
import { ERROR_MESSAGES } from '../../constants/errorMessages.js';
import { CART_TEXT } from '../../constants/hardText.js';
import { ROUTES } from '../../constants/routes.constants.js';
import { MODAL_TYPES } from '../../constants/types.js';
import { useModal } from '../../hooks/useModal.js';
import { useAddToCartMutation } from '../../services/cartApi.js';
import { useGetProductByIdQuery } from '../../services/product/productApi.js';

const ProductPage = () => {
  const navigate = useNavigate();
  const { modalData, showModal, closeModal } = useModal();

  const { id } = useParams();

  const {
    data: product,
    isLoading: isProductLoading,
    error: productError,
  } = useGetProductByIdQuery(id);

  const [addToCart, { isLoading: isAdding, error: addError }] =
    useAddToCartMutation();

  const handleAddToCart = async (lockerId) => {
    if (!product || isAdding || !lockerId) return;

    try {
      await addToCart({ productId: product.id, lockerId }).unwrap();
      showModal({
        type: MODAL_TYPES.SUCCESS,
        title: MODAL_TYPES.ITEM_ADDED_TO_CART,
        message: MODAL_TYPES.ITEM_ADDED_TO_CART_MESSAGE,
        onClose: () => {
          closeModal();
          navigate(ROUTES.PRODUCTS);
        },
        onConfirm: () => {
          closeModal();
          navigate(ROUTES.CART);
        },
        cancelText: MODAL_TYPES.CONTINUE_SHOPPING,
        confirmText: MODAL_TYPES.GO_TO_CART,
      });

    } catch (err) {
      console.error(ERROR_MESSAGES.ADD_TO_CART_FAILED, err);

      if (err?.status === 401) {
        showModal({
          type: MODAL_TYPES.ERROR,
          title: MODAL_TYPES.ADD_TO_CART_FAILED,
          message: CART_TEXT.SIGN_IN_TO_ADD_ITEMS,
          onClose: () => {
            closeModal();
            navigate(ROUTES.LOGIN);
          },
        });
      }
    }
  };

  if (isProductLoading) return <ProductSkeleton />;

  if (productError)
    return (
      <StyledSharedTypography color="error">
        {ERROR_MESSAGES.FAILED_TO_LOAD_PRODUCTS}
      </StyledSharedTypography>
    );

  if (!product)
    return (
      <StyledSharedTypography color="error">
        {ERROR_MESSAGES.PRODUCT_NOT_FOUND}
      </StyledSharedTypography>
    );

  return (
    <>
      <ProductView
        {...product}
        handleAddToCart={handleAddToCart}
        addToCartLoading={isAdding}
        addToCartError={addError}
      />

      {modalData && (
        <StatusModal
          open
          {...modalData}
        />
      )}
    </>
  );
};

export default ProductPage;
