import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

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
  boxShadow: theme.customShadows,
}));

export const ImageStyle = {
  width: 200,
  height: 200,
  borderRadius: 8,
  objectFit: 'cover',
};

export const SharedFlexBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

export const dividerStyle = {
  margin: '1rem 0',
};
