import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CardActions, CardContent, Chip, Stack } from '@mui/material';

import {
  BigStyledCard,
  chipStyles,
  lockerStackStyle,
} from './Product.styled.js';
import { CART_TEXT, LOCKER_TEXT } from '../../constants/hardText.js';
import { BUTTON_VARIANTS } from '../../constants/types.js';
import { addSignShekel } from '../../utils/converting.js';
import ActionButton from '../shared/Button/ActionButton.jsx';
import { SharedImage } from '../shared/Image/SharedImage';
import SharedTypography from '../shared/Text/SharedTypography.jsx';
import CustomDivider from '../shared/Divider/CustomDivider.jsx';

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

        {availableLockers?.length > 0 && (
          <>
            <CustomDivider sx={{ my: 2 }} />

            <SharedTypography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              {LOCKER_TEXT.SELECT_A_LOCKER}
            </SharedTypography>

            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              useFlexGap
              sx={lockerStackStyle}
            >
              {availableLockers.map(({ _id, lockerNumber, location }) => (
                <Chip
                  key={_id}
                  label={`#${lockerNumber} — ${location}`}
                  clickable
                  variant="outlined"
                  sx={chipStyles(selectedLockerId, _id)}
                  onClick={() => setSelectedLockerId(_id)}
                />
              ))}
            </Stack>
          </>
        )}
      </CardContent>

      <CardActions>
        <ActionButton
          fullWidth
          startIcon={<ShoppingCartIcon />}
          styleType={BUTTON_VARIANTS.FILLED}
          disabled={!selectedLockerId}
          onClick={() => {
            handleAddToCart(selectedLockerId);
          }}
        >
          {CART_TEXT.ADD_TO_CART}
        </ActionButton>
      </CardActions>
    </BigStyledCard>
  );
};

export default ProductView;
