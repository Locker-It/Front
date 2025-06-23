import React from 'react';
import { useParams } from 'react-router-dom';

import { StyledSharedTypography } from '../../components/Product/Product.styled.js';
import ProductSkeleton from '../../components/Product/ProductSkeleton.jsx';
import ProductView from '../../components/Product/ProductView.jsx';
import { ERROR_MESSAGES } from '../../constants/errors.js';
import { useAddToCartMutation } from '../../services/cartApi.js';
import { useGetProductByIdQuery } from '../../services/productApi.js';

const ProductPage = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);

  const [AddToCart] = useAddToCartMutation();

  const handleAddToCart = async () => {
    try {
      await AddToCart(product);
      console.log('Add to Cart Success');
    } catch (err) {
      console.error('Failed to add to cart:', err);
    }
  };

  if (isLoading) {
    return <ProductSkeleton />;
  }
  if (error) {
    return (
      <StyledSharedTypography color="error">
        {ERROR_MESSAGES.FAILED_TO_LOAD_PRODUCTS}
      </StyledSharedTypography>
    );
  }


  if (!product) {
    return (
      <StyledSharedTypography color="error">
        {ERROR_MESSAGES.PRODUCT_NOT_FOUND}
      </StyledSharedTypography>
    );
  }

  return <ProductView {...product} handleAddToCart={handleAddToCart} />;
};

export default ProductPage;
