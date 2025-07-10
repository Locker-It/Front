import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CardActions, CardContent } from '@mui/material';
import { BigStyledCard } from './Product.styles.js';
import { CART_TEXT } from '../../constants/hardText.js';
import { BUTTON_VARIANTS } from '../../constants/types.js';
import { addSignShekel } from '../../utils/converting.js';
import ActionButton from '../shared/Button/ActionButton.jsx';
import { SharedImage } from '../shared/Image/SharedImage';
import SharedTypography from '../shared/Text/SharedTypography.jsx';
import LockerSelector from '../LockerChipSelector/LockerChipSelector.jsx';
import { TEXT_VARIANTS } from '../../constants/types.js';

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
        <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>{name}</SharedTypography>
        <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>{description}</SharedTypography>
        <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>{addSignShekel(price)}</SharedTypography>

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
