import React from 'react';
import OrderCard from '../../OrderSummary/OrderCard';
import { useGetCartQuery } from '../../../services/cartApi';
import { UI_TEXT } from '../../../constants/text';
import SharedTypography from '../../shared/Text/SharedText';

const OrderSummary = () => {
  const { data, error, isLoading } = useGetCartQuery();

  if (isLoading) return <SharedTypography>{UI_TEXT.CART_LOADING}</SharedTypography>;
  if (error) return <SharedTypography>{UI_TEXT.CART_ERROR}</SharedTypography>;

  const items = data?.items || [];
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return <OrderCard items={items} total={total} />;
};

export default OrderSummary;
