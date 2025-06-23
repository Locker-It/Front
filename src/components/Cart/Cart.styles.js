import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import SharedText from '../shared/Text/SharedTypography.jsx';

export const CartContainer = styled(Box)(({ theme }) => ({
  maxWidth: 480,
  marginInline: 'auto',
  padding: theme.spacing(3),
  borderRadius: theme.shape.custom.roundedLg,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
}));

export const CartTitle = styled(SharedText)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  fontWeight: 700,
}));

export const CartRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(2),
}));

export const EmptyCartText = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'center',
  padding: theme.spacing(8, 0),
}));

export const CartItemWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const RemoveButtonWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));
