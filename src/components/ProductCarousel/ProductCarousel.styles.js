import { styled } from '@mui/material/styles';

export const CarouselWrapper = styled('div')(({ theme }) => ({
  '& .slick-prev:before, & .slick-next:before': {
    color: theme.palette.primary.main,
  },
}));
