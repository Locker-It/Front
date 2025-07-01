import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CardActions, CardContent } from '@mui/material';
import { BigStyledCard } from './Product.styled.js';
import { CART_TEXT } from '../../constants/hardText.js';
import { BUTTON_VARIANTS } from '../../constants/types.js';
import { addSignShekel } from '../../utils/converting.js';
import ActionButton from '../shared/Button/ActionButton.jsx';
import { SharedImage } from '../shared/Image/SharedImage';
import SharedTypography from '../shared/Text/SharedTypography.jsx';
import LockerSelector from '../shared/Select/LockerChipSelector.jsx';

const ProductView = ({
  images,
  name,
  description,
  price,
  availableLockers,
  handleAddToCart,
}) => {
  const [selectedLockerId, setSelectedLockerId] = useState(null);

  return (
    <BigStyledCard>
      <SharedImage src={images} alt={name} />

      <CardContent>
        <SharedTypography variant="h5">{name}</SharedTypography>
        <SharedTypography variant="body2">{description}</SharedTypography>
        <SharedTypography variant="h6">{addSignShekel(price)}</SharedTypography>

        <LockerSelector
          availableLockers={availableLockers}
          selectedLockerId={selectedLockerId}
          setSelectedLockerId={setSelectedLockerId}
        />
      </CardContent>

      <CardActions>
        <ActionButton
          fullWidth
          startIcon={<ShoppingCartIcon />}
          styleType={BUTTON_VARIANTS.FILLED}
          disabled={!selectedLockerId}
          onClick={() => handleAddToCart(selectedLockerId)}
        >
          {CART_TEXT.ADD_TO_CART}
        </ActionButton>
      </CardActions>
    </BigStyledCard>
  );
};

export default ProductView;
