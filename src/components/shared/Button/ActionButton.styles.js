import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import { BUTTON_PROPS } from './buttonProps.js';
import { getButtonStyles } from './buttonVariants.js';
import { BUTTON_VARIANTS } from '../../../constants/types.js';

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== BUTTON_PROPS.STYLE_TYPE,
})(({ theme, styleType }) => {
  const styles = getButtonStyles(theme);
  return styles[styleType] || styles[BUTTON_VARIANTS.DEFAULT];
});
