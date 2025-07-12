import React from 'react';
import { Grid, Divider } from '@mui/material';

import {
  OrderCardContainer,
  ItemCard,
  SharedFlexBox,
  dividerStyle,
  ImageStyle,
  InfoBox,
  ItemsContainerGrid,
  SummaryGrid,
} from './OrderCard.styles';

import { ERROR_MESSAGES } from '../../constants/errorMessages.js';
import { CART_TEXT } from '../../constants/hardText.js';
import { addSignShekel } from '../../utils/converting';
import { SharedImage } from '../shared/Image/SharedImage';
import SharedTypography from '../shared/Text/SharedTypography.jsx';
import { LOCKER_LOCATION } from '../../utils/textTemplates.js';
import { TEXT_VARIANTS } from '../../constants/types.js';

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
      <ItemsContainerGrid container>
        {items.map(({ _id, images, name, price, lockerId }) => {
          const shekelPrice = addSignShekel(price);
          return (
            <Grid key={_id}>
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
      </ItemsContainerGrid>

      <Divider style={dividerStyle} />

      <SummaryGrid container>
        <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>
          {CART_TEXT.CART_TOTAL}
        </SharedTypography>
        <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>
          {addSignShekel(total.toFixed(2))}
        </SharedTypography>
      </SummaryGrid>
    </OrderCardContainer>
  );
};

export default OrderCard;
