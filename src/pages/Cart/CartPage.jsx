import React from 'react';

import Cart from '../../components/Cart/Cart.jsx';
import { ERROR_MESSAGES } from '../../constants/errorMessages.js';
import {
  useGetCartQuery,
  useRemoveFromCartMutation,
} from '../../services/cartApi';

const CartPage = () => {
  const {
    data: cart = [],
    isLoading,
    isError,
  } = useGetCartQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    refetchOnFocus: true,
  });

  const [removeFromCart] = useRemoveFromCartMutation();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleContinue = () => {
    // TODO: Go to payment page or checkout flow
  };

  const handleRemove = async (productId) => {
    try {
      await removeFromCart(productId).unwrap();
    } catch (error) {
      console.error(ERROR_MESSAGES.REMOVE_FAILED, error);
    }
  };

  return (
    <Cart
      items={cart}
      total={total}
      onContinue={handleContinue}
      handleItemRemove={handleRemove}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default CartPage;
