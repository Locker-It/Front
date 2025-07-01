import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import theme from '../../theme/theme';

export const OrderCardContainer = styled(Box)(({ theme }) => ({
  maxWidth: 800,
  margin: 'auto',
  marginTop: theme.spacing(5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

export const ItemCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(5),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.card,
  '&:hover': {
    transform: 'translateY(-0.3125rem)',
    boxShadow: theme.customShadows.cardHover,
  },
}));

export const ImageStyle = {
  width: 160,
  height: 160,
  objectFit: 'cover',
  marginLeft: '4rem',
};

export const SharedFlexBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(12),
}));

export const dividerStyle = {
  margin: '1rem 0',
};

export const InfoBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: theme.spacing(1),
}));