import { Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import theme from '../../theme/theme.js';

export const StyledCard = styled(Card)(({ theme }) => ({
  width: '15rem',
  height: '17rem',
  transition: theme.transitions.card,
  '&:hover': {
    transform: 'translateY(-0.3125rem)', 
    boxShadow: theme.customShadows.cardHover,
  },
}));

export const SharedTypography = {
  color: theme.palette.text.primary,
  ...(props) =>
    props.variant === 'subtitle1' && {
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
    },
};

export const StyledSharedTypography = styled(Typography)(({ theme, variant }) => ({
  color: theme.palette.text.primary,
  ...(variant === 'subtitle1' && {
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
  }),
}));

export const BigStyledCard = styled(Card)(() => ({
  maxWidth: 600,
  margin: '0 auto',
  borderRadius: 12,
}));


