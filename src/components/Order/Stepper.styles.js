import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const containerStyle = {
  width: '100%',
};

export const StyledStepContentBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

export const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  pt: 2,
};

export const spacerStyle = {
  flex: '1 1 auto',
};

export const backButton = {
  mr: 1,
};
