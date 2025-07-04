import React from 'react';

import { StyledLogo } from './Logo.styles';
import { getLogoStyles } from './logoVariants';
import { LOGO_VARIANTS } from '../../../constants/types';

const Logo = ({ variant = LOGO_VARIANTS.DEFAULT, ...props }) => {
  const styles = getLogoStyles();
  const src = styles[variant]?.src || styles[LOGO_VARIANTS.DEFAULT].src;
  return (
    <StyledLogo variant={variant} src={src} alt="LockerIt Logo" {...props} />
  );
};

export default Logo;
