import React from 'react';

import { StyledText } from './Text.styles';

const SharedTypography = ({ variant = 'body1', children, style = {}, ...rest }) => {

  return (
    <StyledText variant={variant} sx={style} {...rest}>
      {children}
    </StyledText>

  );
};

export default SharedTypography;
