import React from 'react';

import PaymentForm from '../../Forms/PaymentForm';

const PaymentDetails = () => {
  const handlePaymentSubmit = (data) => {
    console.log('Payment form submitted:', data);
    // TODO: Add your payment logic here (e.g., API call to process payment)
  };

  return (
    <div>
      <PaymentForm onSubmit={handlePaymentSubmit} />
    </div>
  );
};

export default PaymentDetails;
