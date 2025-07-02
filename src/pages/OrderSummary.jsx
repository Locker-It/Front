import React from 'react';

import { CART_TEXT } from '../constants/hardText.js';
import { useGetCartQuery } from '../services/cartApi.js';
import OrderCard from '../components/OrderSummary/OrderCard.jsx';
import SharedTypography from '../components/shared/Text/SharedTypography.jsx';

const OrderSummary = () => {
  const { data: items = [], error, isLoading } = useGetCartQuery();

  if (isLoading)
    return <SharedTypography>{CART_TEXT.CART_LOADING}</SharedTypography>;
  if (error) return <SharedTypography>{CART_TEXT.CART_ERROR}</SharedTypography>;

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return <OrderCard items={items} total={total} />;
};

export default OrderSummary;
