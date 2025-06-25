import React from 'react';

import {
  CartContainer,
  CartTitle,
  CartRow,
  EmptyCartText,
  RemoveButtonWrapper,
  CartItemWrapper,
} from './Cart.styles';
import { BUTTON_VARIANTS } from '../../constants/buttonTypes.js';
import { CART_TEXT, UI_TEXT } from '../../constants/text';
import ProductCard from '../Product/ProductCard';
import ActionButton from '../shared/Button/ActionButton.jsx';
import CustomDivider from '../shared/Divider/CustomDivider.jsx';
import SharedGrid from '../shared/Grid/SharedGrid';

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
    ? UI_TEXT.CART_LOADING
    : isError
      ? UI_TEXT.CART_ERROR
      : null;

  if (statusText) {
    return (
      <CartContainer>
        <CartTitle variant="h6">{UI_TEXT.CART_TITLE}</CartTitle>
        <EmptyCartText>{statusText}</EmptyCartText>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <CartTitle variant="h6">{UI_TEXT.CART_TITLE}</CartTitle>
      {isCartEmpty ? (
        <EmptyCartText>{UI_TEXT.CART_EMPTY}</EmptyCartText>
      ) : (
        <>
          <SharedGrid
            items={validItems.map(
              ({ id, images, name, price, rating, ...rest }) => ({
                ...rest,
                id,
                images,
                name,
                price,
                rating,
                description: (
                  <CartItemWrapper>
                    <ProductCard
                      id={id}
                      images={images}
                      name={name}
                      price={price}
                      rating={rating}
                      onSelect={() => {}}
                      disabled
                    />
                    <RemoveButtonWrapper>
                      <ActionButton
                        onClick={() => handleItemRemove(id)}
                        styleType={BUTTON_VARIANTS.OUTLINED}
                      >
                        {CART_TEXT.REMOVE_BUTTON}
                      </ActionButton>
                    </RemoveButtonWrapper>
                  </CartItemWrapper>
                ),
              }),
            )}
            columns={1}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          />
          <CustomDivider />
          <CartRow>
            <CartTitle as="span" variant="body1">
              {UI_TEXT.CART_TOTAL}
            </CartTitle>
            <CartTitle as="span" variant="body1">
              {total} ₪
            </CartTitle>
          </CartRow>
          {!isLoggedIn && (
            <EmptyCartText>{UI_TEXT.CART_LOGIN_REQUIRED}</EmptyCartText>
          )}
          <ActionButton onClick={onContinue} disabled={!canPurchase} styleType={BUTTON_VARIANTS.FILLED}>
            {UI_TEXT.CART_CONTINUE}
          </ActionButton>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
