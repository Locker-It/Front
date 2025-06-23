import { Grid, Divider } from '@mui/material';
import React from 'react';

import {
  OrderCardContainer,
  ItemCard,
  SharedFlexBox,
  dividerStyle,
} from './OrderCard.styled';
import { UI_TEXT } from '../../constants/text';
import { addSignShekel } from '../../utils/converting';
import SharedGrid from '../shared/Grid/SharedGrid';
import { SharedImage } from '../shared/Image/SharedImage';
import SharedTypography from '../shared/Text/SharedTypography.jsx';

const OrderCard = ({ items = [], total = 0 }) => {
  if (items.length === 0) {
    return (
      <OrderCardContainer>
        <SharedTypography variant="body1">
          {UI_TEXT.NO_ITEMS_IN_CART}
        </SharedTypography>
      </OrderCardContainer>
    );
  }

  return (
    <OrderCardContainer>
      <SharedGrid container direction="column">
        {items.map(({ _id, images, name, price }) => {
          const shekelPrice = addSignShekel(price);
          return (
            <Grid key={_id}>
              <ItemCard>
                <SharedFlexBox>
                  <SharedImage src={images} alt={name} />
                </SharedFlexBox>
                <SharedTypography variant="body1">{name}</SharedTypography>
                <SharedTypography variant="body2" fontWeight="medium">
                  {shekelPrice}
                </SharedTypography>
              </ItemCard>
            </Grid>
          );
        })}
      </SharedGrid>

      <Divider sx={dividerStyle} />

      <SharedGrid container justifyContent="space-between" alignItems="center">
        <SharedTypography variant="h6" fontWeight="bold">
          {UI_TEXT.CART_TOTAL}
        </SharedTypography>
        <SharedTypography variant="h6" fontWeight="bold">
          {addSignShekel(total.toFixed(2))}
        </SharedTypography>
      </SharedGrid>
    </OrderCardContainer>
  );
};

export default OrderCard;
