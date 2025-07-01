import React from 'react';

import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  SLIDES_TO_SHOW_DEFAULT,
  AUTOPLAY_SPEED_MS,
  RESPONSIVE_BREAKPOINTS,
} from './Carousel.constants.js';
import { CarouselWrapper } from './ProductCarousel.styled';
import { ROUTES } from '../../constants/routes.constants.js';
import ProductCard from '../Product/ProductCard';

const ProductCarousel = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: SLIDES_TO_SHOW_DEFAULT,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: AUTOPLAY_SPEED_MS,
    pauseOnHover: true,
    responsive: RESPONSIVE_BREAKPOINTS,
  };

  const navigate = useNavigate();

  const handleProductClick = (id) => {
    if (!id) return;
    navigate(ROUTES.PRODUCT_DETAILS.replace(ROUTES.PRODUCT_ID_PARAM, id));
  };

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              id={product.id}
              images={product.images}
              name={product.name}
              price={product.price}
              onSelect={handleProductClick}
            />
          </div>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};
export default ProductCarousel;
