import React from 'react';

 import { Divider } from '@mui/material';
 import Grid from '@mui/material/Grid'

import {
  OrderCardContainer,
  ItemCard,
  SharedFlexBox,

  ImageStyle,
  InfoBox,
} from './OrderCard.styles';
import { ERROR_MESSAGES } from '../../constants/errorMessages.js';
import { CART_TEXT } from '../../constants/hardText.js';
import { TEXT_VARIANTS } from '../../constants/types.js';
import { addSignShekel } from '../../utils/converting';
import { LOCKER_LOCATION } from '../../utils/textTemplates.js';
import { SharedImage } from '../shared/Image/SharedImage';
import SharedTypography from '../shared/Text/SharedTypography.jsx';

const OrderCard = ({ items = [], total = 0 }) => {
  if (items.length === 0) {
    return (
      <OrderCardContainer>
        <SharedTypography variant={TEXT_VARIANTS.GREY_TITLE}>
          {ERROR_MESSAGES.NO_ITEMS_IN_CART}
        </SharedTypography>
      </OrderCardContainer>
    );
  }

  return (
    <OrderCardContainer>
      <Grid container spacing={3}>
        {items.map(({ id, images, name, price, lockerId }) => {
          const shekelPrice = addSignShekel(price);
          return (
            <Grid key={id} size={12}>
              <ItemCard>
                <SharedFlexBox>
                  <SharedImage src={images} alt={name} style={ImageStyle} />

                  <InfoBox>
                    <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>
                      {name}
                    </SharedTypography>

                    <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>
                      {shekelPrice}
                    </SharedTypography>
                    {lockerId && (
                      <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>
                        {LOCKER_LOCATION.LOCKER_LABEL(
                          lockerId.lockerNumber,
                          lockerId.location,
                        )}
                      </SharedTypography>
                    )}
                  </InfoBox>
                </SharedFlexBox>
              </ItemCard>
            </Grid>
          );
        })}
      </Grid>

      <Divider />

      <Grid size={12}>
        <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>
          {CART_TEXT.CART_TOTAL}
        </SharedTypography>
        <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>
          {addSignShekel(total.toFixed(2))}
        </SharedTypography>
      </Grid>
    </OrderCardContainer>
  );
};

export default OrderCard;
