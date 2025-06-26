import React from 'react';

import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';

import {
  containerStyle,
  StyledStepContentBox,
  buttonContainerStyle,
  spacerStyle,
} from './Stepper.styles';
import OrderComplete from './steps/OrderComplete';
import OrderSummary from './steps/OrderSummary';
import PaymentDetails from './steps/PaymentDetails';
import useStep from './useStep';
import { BUTTON_TEXT } from '../../constants/buttons.constants.js';
import { ROUTES as ROUTER_PATHS } from '../../constants/routes.constants.js';
import { BUTTON_VARIANTS } from '../../constants/types.js';
import ActionButton from '../shared/Button/ActionButton';

const stepComponents = [
  <OrderSummary />,
  <PaymentDetails />,
  <OrderComplete />,
];

const steps = ['Order Summary', 'Payment Details', 'Order Complete'];

export default function HorizontalLinearStepper() {
  const { activeStep, handleNext, handleBack } = useStep(steps.length);
  const isFinalStep = activeStep === steps.length - 1;
  const nextButtonLabel =
    activeStep === steps.length - 2 ? BUTTON_TEXT.FINISH : BUTTON_TEXT.NEXT;

  return (
    <Box sx={containerStyle}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <StyledStepContentBox>{stepComponents[activeStep]}</StyledStepContentBox>

      {isFinalStep ? (
        <Box sx={buttonContainerStyle}>
          <Box sx={spacerStyle} />
          <ActionButton
            to={ROUTER_PATHS.HOME}
            styleType={BUTTON_VARIANTS.FILLED}
          >
            {BUTTON_TEXT.GO_HOME}
          </ActionButton>
        </Box>
      ) : (
        <Box sx={buttonContainerStyle}>
          <ActionButton
            disabled={activeStep === 0 || isFinalStep}
            onClick={handleBack}
            styleType={BUTTON_VARIANTS.FILLED}
          >
            {BUTTON_TEXT.BACK}
          </ActionButton>
          <Box sx={spacerStyle} />
          <ActionButton onClick={handleNext} styleType={BUTTON_VARIANTS.FILLED}>
            {nextButtonLabel}
          </ActionButton>
        </Box>
      )}
    </Box>
  );
}
