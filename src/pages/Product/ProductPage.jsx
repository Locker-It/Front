import React from 'react';
import { useParams } from 'react-router-dom';

import { StyledSharedTypography } from '../../components/Product/Product.styled.js';
import ProductSkeleton from '../../components/Product/ProductSkeleton.jsx';
import ProductView from '../../components/Product/ProductView.jsx';
import { ERROR_MESSAGES } from '../../constants/errors.js';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routerPaths.js';
import { CART_TEXT } from '../../constants/text.js';
import { useAddToCartMutation } from '../../services/cartApi.js';
import { useGetProductByIdQuery } from '../../services/productApi.js';

const ProductPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const {
    data: product,
    isLoading: isProductLoading,
    error: productError,
  } = useGetProductByIdQuery(id);

  const [addToCart, { isLoading: isAdding, error: addError }] =
    useAddToCartMutation();

  const handleAddToCart = async () => {
    if (!product || isAdding) return;

    try {
      await addToCart(product.id).unwrap(); 
    } catch (err) {
      console.error(ERROR_MESSAGES.ADD_TO_CART_FAILED, err);
      if (err?.status === 401) {
        // TODO: use the modal
        alert(CART_TEXT.SIGN_IN_TO_ADD_ITEMS);
        navigate(ROUTES.LOGIN);
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
    <ProductView
      {...product}
      handleAddToCart={handleAddToCart}
      addToCartLoading={isAdding} 
      addToCartError={addError}
    />
  );
};

export default ProductPage;
