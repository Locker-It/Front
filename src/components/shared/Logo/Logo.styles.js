import { styled } from '@mui/material/styles';

import { getLogoStyles } from './logoVariants';
import { LOGO_VARIANTS } from '../../../constants/types.js';

export const StyledLogo = styled('img', {
  shouldForwardProp: (prop) => prop !== 'variant',
})(({ theme, variant }) => {
  const styles = getLogoStyles(theme);
  return styles[variant] || styles[LOGO_VARIANTS.DEFAULT];
});

