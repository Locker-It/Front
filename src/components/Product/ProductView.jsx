import React from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CardActions, CardContent, Divider } from '@mui/material';

import { BigStyledCard } from './Product.styled.js';
import { CART_TEXT, UI_TEXT } from '../../constants/hardText.js';
import { BUTTON_VARIANTS } from '../../constants/types.js';
import { addSignShekel } from '../../utils/converting.js';
import ActionButton from '../shared/Button/ActionButton.jsx';
import { SharedImage } from '../shared/Image/SharedImage';
import SharedTypography from '../shared/Text/SharedTypography.jsx';

const ProductView = ({
  images,
  name,
  description,
  price,
  lockerLocation,
  handleAddToCart,
}) => (
  <BigStyledCard>
    <SharedImage src={images} alt={name} />

    <CardContent>
      <SharedTypography variant="h5">{name}</SharedTypography>

      <SharedTypography variant="body2">{description}</SharedTypography>

      <SharedTypography variant="h6">{addSignShekel(price)}</SharedTypography>

      <SharedTypography variant="body2">{lockerLocation}</SharedTypography>
    </CardContent>

    <CardActions>
      <ActionButton
        fullWidth
        startIcon={<ShoppingCartIcon />}
        onClick={handleAddToCart}
        styleType={BUTTON_VARIANTS.FILLED}
      >
        {CART_TEXT.ADD_TO_CART}
      </ActionButton>
    </CardActions>

    <Divider />
  </BigStyledCard>
);

export default ProductView;
