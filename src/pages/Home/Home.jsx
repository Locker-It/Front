import { Container, Box , CircularProgress } from '@mui/material';
import React from 'react';

import { StyledContainer, HeroBox, NewestProductsBox } from './Home.styled';
import Hero from '../../components/Hero/Hero.jsx';
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel.jsx';
import SharedTypography from '../../components/shared/Text/SharedTypography.jsx';
import { UI_TEXT } from '../../constants/text.js';
import { useGetNewestProductsQuery } from '../../services/productApi.js';

function Home() {
  const {
    data: newestProducts,
    isLoading,
    error,
  } = useGetNewestProductsQuery();

  return (
    <StyledContainer>
      <HeroBox>
        <Hero />
      </HeroBox>

      <NewestProductsBox>
        <SharedTypography variant="h5" gutterBottom>
          {UI_TEXT.NEWEST_PRODUCTS}
        </SharedTypography>
        {isLoading && <CircularProgress />}
        {error && (
          <SharedTypography>{UI_TEXT.FAILED_TO_LOAD_PRODUCTS}</SharedTypography>
        )}
        {newestProducts && (
          <ProductCarousel products={newestProducts.slice(0, 8)} />
        )}
      </NewestProductsBox>
    </StyledContainer>
  );
}
export default Home;
