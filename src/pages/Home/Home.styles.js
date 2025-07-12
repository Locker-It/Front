import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export const HeroBox = styled(Box)(() => ({
  textAlign: 'center',
}));

export const NewestProductsBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),
}));
