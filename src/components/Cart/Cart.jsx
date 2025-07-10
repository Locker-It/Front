import React from 'react';
import {
  EmptyCartContainer,
  CartContainer,
  CartTitle,
  EmptyCartText,
  RemoveButtonWrapper,
  CartItemWrapper,
  LockerText,
  TotalSection,
  CartGridContainer,
  cartTypograghy,
  dividerStyle,
} from './Cart.styles';
import SharedTypography from '../shared/Text/SharedTypography.jsx';
import { TEXT_VARIANTS } from '../../constants/types.js';
import { CART_TEXT } from '../../constants/hardText.js';
import { BUTTON_VARIANTS } from '../../constants/types.js';
import ProductCard from '../Product/ProductCard';
import ActionButton from '../shared/Button/ActionButton.jsx';
import { Divider, Grid, Box } from '@mui/material';
import { LOCKER_LOCATION } from '../../utils/textTemplates.js';
import { addSignShekel } from '../../utils/converting.js';

const Cart = ({
  items,
  total,
  onContinue,
  handleItemRemove,
  isLoading = false,
  isError = false,
  isLoggedIn = true,
}) => {
  const validItems = Array.isArray(items) ? items : [];
  const isCartEmpty = validItems.length === 0;
  const canPurchase = !isCartEmpty && total > 0;

  const statusText = isLoading
    ? CART_TEXT.CART_LOADING
    : isError
      ? CART_TEXT.CART_ERROR
      : isCartEmpty
        ? CART_TEXT.CART_EMPTY
        : null;

  if (statusText) {
    return (
      <EmptyCartContainer>
        <CartTitle variant="h6">{CART_TEXT.CART_TITLE}</CartTitle>
        <EmptyCartText>{statusText}</EmptyCartText>
      </EmptyCartContainer>
    );
  }

  return (
    <CartContainer>
      <SharedTypography variant={TEXT_VARIANTS.DEFAULT} style={cartTypograghy}>{CART_TEXT.CART_TITLE}</SharedTypography>
      <CartGridContainer container spacing={3}>
        {validItems.map(({ id, images, name, price, rating, lockerId }) => (
          <Grid item xs={12} md={6} key={id}>
            <CartItemWrapper elevation={2}>
              <ProductCard
                id={id}
                images={images}
                name={name}
                price={price}
                rating={rating}
                onSelect={() => {}}
                disabled
              />

              <LockerText mt={1}>
                {LOCKER_LOCATION.LOCKER_LABEL(
                  lockerId?.lockerNumber ?? '',
                  lockerId?.location ?? '',
                )}
              </LockerText>

              <RemoveButtonWrapper>
                <ActionButton
                  onClick={() => handleItemRemove(id)}
                  styleType={BUTTON_VARIANTS.OUTLINED}
                  fullWidth
                >
                  {CART_TEXT.REMOVE_BUTTON}
                </ActionButton>
              </RemoveButtonWrapper>
            </CartItemWrapper>
          </Grid>
        ))}
      </CartGridContainer>

      <Divider style={dividerStyle} />

      <TotalSection>
        <Box>
          <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>
            {CART_TEXT.CART_TOTAL}
          </SharedTypography>
          <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>
            {addSignShekel(total)}
          </SharedTypography>
        </Box>

        <ActionButton
          onClick={onContinue}
          disabled={!canPurchase}
          styleType={BUTTON_VARIANTS.FILLED}
        >
          {CART_TEXT.CART_CONTINUE}
        </ActionButton>
      </TotalSection>

      {!isLoggedIn && (
        <EmptyCartText sx={{ mt: 2 }}>
          {CART_TEXT.CART_LOGIN_REQUIRED}
        </EmptyCartText>
      )}
    </CartContainer>
  );
};

export default Cart;
