import { styled } from '@mui/material/styles';

import { getLogoStyles } from './logoVariants';
import { LOGO_VARIANTS } from '../../../constants/types';

export const StyledLogo = styled('img', {
  shouldForwardProp: (prop) => prop !== 'variant',
})(({ variant }) => {
  const styles = getLogoStyles();
  return styles[variant] || styles[LOGO_VARIANTS.DEFAULT];
});

