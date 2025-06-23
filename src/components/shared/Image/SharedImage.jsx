import React from 'react';

import StyledImg from './Image.styles';

export const SharedImage = ({ src, alt, style = {}, ...rest }) => {
  return <StyledImg src={src} alt={alt} sx={style} {...rest} />;
};



