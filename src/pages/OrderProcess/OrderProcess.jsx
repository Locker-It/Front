import React from 'react';

import { orderProcessContainerStyle } from './OrderProcess.styles';
import HorizontalLinearStepper from '../../components/Order/Stepper';

function OrderProcess() {
  return (
    <div style={orderProcessContainerStyle}>
      <HorizontalLinearStepper />
    </div>
  );
}

export default OrderProcess;
