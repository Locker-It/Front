import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

export const StyledRating = styled(Rating)(() => ({}));

export const RatingWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));
