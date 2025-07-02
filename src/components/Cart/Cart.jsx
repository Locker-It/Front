import React from 'react';

import {
  CartContainer,
  CartTitle,
  CartRow,
  EmptyCartText,
  RemoveButtonWrapper,
  CartItemWrapper,
  cartGridStyle,
} from './Cart.styles';
import { CART_TEXT } from '../../constants/hardText.js';
import { BUTTON_VARIANTS } from '../../constants/types.js';
import ProductCard from '../Product/ProductCard';
import ActionButton from '../shared/Button/ActionButton.jsx';
import CustomDivider from '../shared/Divider/CustomDivider.jsx';
import SharedGrid from '../shared/Grid/SharedGrid';
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
      : null;

  if (statusText) {
    return (
      <CartContainer>
        <CartTitle variant="h6">{CART_TEXT.CART_TITLE}</CartTitle>
        <EmptyCartText>{statusText}</EmptyCartText>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <CartTitle variant="h6">{CART_TEXT.CART_TITLE}</CartTitle>
      {isCartEmpty ? (
        <EmptyCartText>{CART_TEXT.CART_EMPTY}</EmptyCartText>
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
                    <p>
                      {LOCKER_LOCATION.LOCKER_LABEL(
                        rest.lockerId?.lockerNumber ?? '',
                        rest.lockerId?.location ?? '',
                      )}
                    </p>
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
            {...cartGridStyle}
          />
          <CustomDivider />
          <CartRow>
            <CartTitle as="span" variant="body1">
              {CART_TEXT.CART_TOTAL}
            </CartTitle>
            <CartTitle as="span" variant="body1">
              {addSignShekel(total)}
            </CartTitle>
          </CartRow>
          {!isLoggedIn && (
            <EmptyCartText>{CART_TEXT.CART_LOGIN_REQUIRED}</EmptyCartText>
          )}
          <ActionButton
            onClick={onContinue}
            disabled={!canPurchase}
            styleType={BUTTON_VARIANTS.FILLED}
          >
            {CART_TEXT.CART_CONTINUE}
          </ActionButton>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
