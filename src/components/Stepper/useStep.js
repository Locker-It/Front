import { useState } from 'react';

const useStep = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);

  const handleBack = () => setActiveStep((prev) => prev - 1);

  return { activeStep, handleNext, handleBack };
};

export default useStep;
