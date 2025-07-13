import { Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const EmptyCartContainer = styled(Box)(({ theme }) => ({
  maxWidth: '30rem',
  marginInline: 'auto',
  padding: '1.5rem',
  borderRadius: theme.shape.custom?.roundedLg || '0.75rem',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
}));

export const CartContainer = styled(Box)(({ theme }) => ({
  padding: '2rem',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.custom?.roundedLg || '0.75rem',
  boxShadow: theme.shadows[2],
  margin: '2rem auto',
  maxWidth: '62.5rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
}));

export const CartItemWrapper = styled(Paper)(({ theme }) => ({
  padding: '1rem',
  borderRadius: '0.75rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: theme.shadows[1],
  width: '80%',
  margin: '0 auto',


}));

export const RemoveButtonWrapper = styled(Box)(() => ({
  width: '100%',
  marginTop: '1rem',
}));
