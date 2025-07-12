import React from 'react';

import { Divider, Grid } from '@mui/material';

import {
  EmptyCartContainer,
  CartContainer,
  CartItemWrapper,
  RemoveButtonWrapper,
} from './Cart.styles';
import { CART_TEXT } from '../../constants/hardText.js';
import { TEXT_VARIANTS, BUTTON_VARIANTS } from '../../constants/types.js';
import { addSignShekel } from '../../utils/converting.js';
import { LOCKER_LOCATION } from '../../utils/textTemplates.js';
import ProductCard from '../Product/ProductCard';
import ActionButton from '../shared/Button/ActionButton.jsx';
import SharedTypography from '../shared/Text/SharedTypography.jsx';

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
        <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>
          {CART_TEXT.CART_TITLE}
        </SharedTypography>
        <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>
          {statusText}
        </SharedTypography>
      </EmptyCartContainer>
    );
  }

  return (
    <CartContainer>
      <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>
        {CART_TEXT.CART_TITLE}
      </SharedTypography>

      <Grid container spacing={3}>
        {validItems.map(({ id, images, name, price, rating, lockerId }) => (
          <Grid key={id} size={12}>
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
              <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>
                {LOCKER_LOCATION.LOCKER_LABEL(
                  lockerId?.lockerNumber ?? '',
                  lockerId?.location ?? '',
                )}
              </SharedTypography>
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
      </Grid>

      <Divider />

      <Grid size={12}>
        <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>
          {CART_TEXT.CART_TOTAL}
        </SharedTypography>
        <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>
          {addSignShekel(total)}
        </SharedTypography>
      </Grid>

      <ActionButton
        onClick={onContinue}
        disabled={!canPurchase}
        styleType={BUTTON_VARIANTS.FILLED}
      >
        {CART_TEXT.CART_CONTINUE}
      </ActionButton>

      {!isLoggedIn && (
        <SharedTypography variant={TEXT_VARIANTS.DEFAULT} sx={{ mt: 2 }}>
          {CART_TEXT.CART_LOGIN_REQUIRED}
        </SharedTypography>
      )}
    </CartContainer>
  );
};

export default Cart;
