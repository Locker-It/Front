import React from 'react';
import { Grid, Divider } from '@mui/material';

import {
  OrderCardContainer,
  ItemCard,
  SharedFlexBox,
  dividerStyle,
  ImageStyle,
  InfoBox,
} from './OrderCard.styled';

import { ERROR_MESSAGES } from '../../constants/errorMessages.js';
import { CART_TEXT } from '../../constants/hardText.js';
import { addSignShekel } from '../../utils/converting';
import SharedGrid from '../shared/Grid/SharedGrid';
import { SharedImage } from '../shared/Image/SharedImage';
import SharedTypography from '../shared/Text/SharedTypography.jsx';
import {LOCKER_LOCATION} from '../../utils/textTemplates.js';

const OrderCard = ({ items = [], total = 0 }) => {
  if (items.length === 0) {
    return (
      <OrderCardContainer>
        <SharedTypography variant="body1">
          {ERROR_MESSAGES.NO_ITEMS_IN_CART}
        </SharedTypography>
      </OrderCardContainer>
    );
  }

  return (
    <OrderCardContainer>
      <SharedGrid container direction="column">
        {items.map(({ _id, images, name, price, lockerId }) => {
          const shekelPrice = addSignShekel(price);
          return (
            <Grid key={_id}>
              <ItemCard>
                <SharedFlexBox>
                  <SharedImage src={images} alt={name} style={ImageStyle} />

                  <InfoBox>
                    <SharedTypography variant="body1" fontWeight="bold">
                      {name}
                    </SharedTypography>
                    <SharedTypography variant="body2" fontWeight="medium">
                      {shekelPrice}
                    </SharedTypography>
                    {lockerId && (
                      <SharedTypography variant="body2" color="textSecondary">
                        {LOCKER_LOCATION.LOCKER_LABEL(lockerId.lockerNumber, lockerId.location)}
                      </SharedTypography>
                    )}
                  </InfoBox>
                </SharedFlexBox>
              </ItemCard>
            </Grid>
          );
        })}
      </SharedGrid>

      <Divider style={dividerStyle} />

      <SharedGrid container justifyContent="space-between" alignItems="center">
        <SharedTypography variant="h6" fontWeight="bold">
          {CART_TEXT.CART_TOTAL}
        </SharedTypography>
        <SharedTypography variant="h6" fontWeight="bold">
          {addSignShekel(total.toFixed(2))}
        </SharedTypography>
      </SharedGrid>
    </OrderCardContainer>
  );
};

export default OrderCard;
