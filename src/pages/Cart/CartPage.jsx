import React from 'react';

import Cart from '../../components/Cart/Cart.jsx';
import { useCart } from '../../hooks/useCart.js';

const CartPage = () => {
  const { cart, setCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleContinue = () => {
    // TODO: Implement continue to checkout functionality
  };

  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <Cart
      items={cart}
      total={total}
      onContinue={handleContinue}
      handleItemRemove={handleRemove}
    />
  );
};

export default CartPage;
