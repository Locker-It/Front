import React from 'react';

import { useNavigate } from 'react-router-dom';

import { CircularProgress, Grid } from '@mui/material';

import { containerStyle, spinnerStyle } from './ProductListPage.styled.js';
import ProductCard from '../../components/Product/ProductCard/ProductCard.jsx';
import { getProductCardProps } from '../../components/Product/ProductCard/productCard.utils.js';
import SharedTypography from '../../components/shared/Text/SharedTypography.jsx';
import { ERROR_MESSAGES } from '../../constants/errorMessages.js';
import { ROUTES } from '../../constants/routes.constants.js';
import { useGetProductsQuery } from '../../services/product/productApi.js';

const ProductListPage = () => {
  const navigate = useNavigate();
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const handleSelect = (id) => navigate(`${ROUTES.PRODUCTS}/${id}`);

  if (isLoading) return <CircularProgress style={spinnerStyle} />;
  if (error)
    return (
      <SharedTypography color="error">
        {ERROR_MESSAGES.FAILED_TO_LOAD_PRODUCTS}
      </SharedTypography>
    );

  return (
    <Grid container spacing={3} style={containerStyle}>
      {products.map((p) => (
        <Grid key={p.id}>
          <ProductCard {...getProductCardProps(p, handleSelect)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductListPage;
