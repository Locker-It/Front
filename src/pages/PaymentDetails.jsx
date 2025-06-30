import React from 'react';
import { useNavigate } from 'react-router-dom';

import PaymentForm from '../components/Forms/PaymentForm';
import { useCreatePurchaseMutation } from '../services/purchaseApi';
import { useGetCartQuery } from '../services/cartApi';
import { CART_TEXT } from '../constants/hardText';
import { ERROR_MESSAGES } from '../constants/errorMessages';

const PaymentDetails = () => {
  const { data: items = [] } = useGetCartQuery();

  const [createPurchase] = useCreatePurchaseMutation();
  const navigate = useNavigate();

  const handlePaymentSubmit = async (formData) => {
    try {
      if (!items.length) {
        console.error(CART_TEXT.CART_EMPTY);
        return;
      }

      for (const item of items) {
        const { id: productId, lockerId } = item;

        if (!productId || !lockerId) {
          console.warn(ERROR_MESSAGES.MISSING_PRODUCTID_OR_LOCKERID, item);
          continue;
        }

        await createPurchase({
          productId,
          lockerId: lockerId._id,
          ...formData,
        }).unwrap();
      }

      // TODO: replace this with modal
      navigate('/orderComplete');
    } catch (err) {
      console.error(ERROR_MESSAGES.AT_LEAST_ONE_PRODUCT_FAILED, err);
    }
  };

  return (
    <div>
      <PaymentForm onSubmit={handlePaymentSubmit} isLoading={false} />
    </div>
  );
};

export default PaymentDetails;
