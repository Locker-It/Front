import { styled } from '@mui/material/styles';
import { Typography, Paper, Box, Grid } from '@mui/material';

export const EmptyCartContainer = styled(Box)(({ theme }) => ({
  maxWidth: '30rem',
  marginInline: 'auto',
  padding: '1.5rem',
  borderRadius: theme.shape.custom?.roundedLg || '0.75rem',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
}));

export const CartContainer = styled(Box)(({ theme }) => ({
  padding: '2rem',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.custom?.roundedLg || '0.75rem',
  boxShadow: theme.shadows[2],
  margin: '2rem auto',
  maxWidth: '62.5rem',
  width: '100%',
}));

export const CartTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: '1.5rem',
  display: 'flex',
  justifyContent: 'center',
}));

export const CartItemWrapper = styled(Paper)(({ theme }) => ({
  padding: '1rem',
  borderRadius: '0.75rem',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'left',
  boxShadow: theme.shadows[1],
}));

export const RemoveButtonWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: '1rem',
}));

export const LockerText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
  marginTop: '0.5rem',
}));

export const TotalSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
}));

export const TotalLabel = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  marginBottom: '0.5rem',
}));

export const TotalAmount = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: '1.25rem',
}));

export const EmptyCartText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  padding: '2rem',
  color: theme.palette.text.primary,
}));

export const StyledContinueButton = styled(Box)(({ theme }) => ({
  minWidth: '13.75rem',
  paddingTop: '1.2rem',
  paddingBottom: '1.2rem',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: '1rem',
}));

export const CartGridContainer = styled(Grid)(({ theme }) => ({
  justifyContent: 'center',
  marginTop: theme.spacing(2),
}));

export const cartTypograghy={
    display: 'flex',
    justifyContent: 'center',
}

export const dividerStyle = {
  margin: '2rem 0',
};
