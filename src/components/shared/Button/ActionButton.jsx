import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { StyledButton } from './ActionButton.styles';
import { BUTTON_VARIANTS } from '../../../constants/buttonTypes.js';

const ActionButton = ({
  children,
  to,
  onClick,
  styleType = BUTTON_VARIANTS.DEFAULT,
  ...props
}) => {
  return (
    <StyledButton
      component={to ? RouterLink : undefined}
      to={to}
      onClick={onClick}
      styleType={styleType}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default ActionButton;
