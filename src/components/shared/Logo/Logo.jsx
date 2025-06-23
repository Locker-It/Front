import React from 'react';

import { StyledLogo } from './Logo.styles';
import { LOGO_VARIANTS } from '../../../constants/types.js';

const Logo = ({ variant = LOGO_VARIANTS.DEFAULT, ...props }) => {
  return (
    <StyledLogo variant={variant} {...props} />
  );
};

export default Logo;
