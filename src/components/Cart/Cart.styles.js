import { Paper, Box , Grid, Divider} from '@mui/material';
import { styled } from '@mui/material/styles';

import SharedTypography from '../shared/Text/SharedTypography.jsx';

export const GridContainer = styled(Grid)(({ theme }) => ({
  width: '100vw',
  paddingLeft: theme.spacing(10),
  paddingRight: theme.spacing(10),
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
}));

export const CartTitle = styled(SharedTypography)({
  marginBottom: '32px',
  fontSize: '1.7rem',
  fontWeight: 800,
});

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

export const CartContainer = styled('div')(() => ({
  width: '100vw',
  minHeight: '100vh',
  paddingTop: '1rem',
  paddingBottom: '3rem',
  paddingLeft: '6vw',
  paddingRight: '6vw',
  backgroundColor: '#f9f9f9',
  boxSizing: 'border-box',
}));

export const CartItemCard = styled(Paper)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: '2.5rem',
  marginBottom: '3rem',
  borderRadius: '1.5rem',
  boxShadow: '0 6px 25px rgba(0, 0, 0, 0.08)',
  width: '100%',
  minHeight: '200px',
}));

export const ProductImage = {
  width: '150px',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '14px',
  marginRight: '2rem',
};

export const ProductContent = styled('div')(() => ({
  flex: 1,
}));

export const ProductName = styled('div')(() => ({
  fontWeight: 800,
  fontSize: '1.6rem',
  marginBottom: '1rem',
  textTransform: 'capitalize',
}));

export const ProductPrice = styled('div')(() => ({
  fontWeight: 700,
  fontSize: '1.4rem',
  color: '#111',
  marginBottom: '1rem',
}));

export const ProductLocation = styled('div')(() => ({
  fontSize: '1.1rem',
  color: 'gray',
  marginBottom: '2rem',
}));

export const SummaryCard = styled(Paper)(() => ({
  padding: '2.5rem',
  borderRadius: '1rem',
  boxShadow: '0 6px 25px rgba(0, 0, 0, 0.08)',
  backgroundColor: '#fff',
  position: 'sticky',
  top: 30,
  minWidth: '320px',
}));

export const SummaryTitle = styled('div')(() => ({
  fontWeight: 800,
  fontSize: '1.5rem',
  marginBottom: '2rem',
}));

export const SummaryRow = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '1.2rem',
  marginBottom: '1.2rem',
}));

export const SummaryTotal = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: 800,
  fontSize: '1.4rem',
}));

export const SummaryRowWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const StyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));