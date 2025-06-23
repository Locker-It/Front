import React from 'react';

import { StyledText } from './Text.styles';
import { getTextStyles } from './textVariants';
import { TEXT_VARIANTS } from '../../../constants/types';

const SharedTypography = ({ variant = TEXT_VARIANTS.DEFAULT, children, ...rest }) => {
  const styles = getTextStyles();
  const sx = styles[variant] || styles[TEXT_VARIANTS.DEFAULT];

  return (
    <StyledText variant="body1" sx={sx} {...rest}>
      {children}
    </StyledText>
  );
};

export default SharedTypography;
