import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { getTextStyles } from './textVariants';
import { TEXT_VARIANTS } from '../../../constants/types';

export const StyledText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'variant',
})(({ variant }) => {
  const styles = getTextStyles();
  return styles[variant] || styles[TEXT_VARIANTS.DEFAULT];
});
