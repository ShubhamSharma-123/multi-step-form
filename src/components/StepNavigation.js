import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const StepNavigation = ({ activeStep }) => {
  const steps = ['Personal Information', 'Address Information', 'Confirmation'];

  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label, index) => (
        <Step key={index}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepNavigation;
