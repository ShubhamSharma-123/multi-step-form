import React, { useState, useEffect } from 'react';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import Confirmation from './Confirmation';
import StepNavigation from './StepNavigation';

const FormStepper = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.title= "Form-Steps"
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    
  };

  const nextStep = () => {
    if (step === 0) {
      // Validate Personal Information fields
      if (formData.name.trim() === '') {
        setErrors({ ...errors, name: 'Name is required' });
      } else if (formData.email.trim() === '') {
        setErrors({ ...errors, email: 'Email is required' });
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        setErrors({ ...errors, email: 'Email is invalid' });
      } else if (formData.phone.trim() === '') {
        setErrors({ ...errors, phone: 'Phone is required' });
      } else {
        setErrors({});
        setStep((prevStep) => prevStep + 1);
      }
    } else if (step === 1) {
      // Validate Address Information fields
      if (formData.address1.trim() === '') {
        setErrors({ ...errors, address1: 'Address Line 1 is required' });
      } else if (formData.city.trim() === '') {
        setErrors({ ...errors, city: 'City is required' });
      } else if (formData.state.trim() === '') {
        setErrors({ ...errors, state: 'State is required' });
      } else if (formData.zip.trim() === '') {
        setErrors({ ...errors, zip: 'Zip Code is required' });
      } else {
        setErrors({});
        setStep((prevStep) => prevStep + 1);
      }
    }
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  //when submit
  const handleSubmit = () => {
    // Form submission logic can go here
    if (step === 2) {
      alert('Form submitted successfully!');
      localStorage.removeItem('formData');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
      });
      setStep(0);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <PersonalInfo data={formData} handleChange={handleChange} nextStep={nextStep} errors={errors} />;
      case 1:
        return <AddressInfo data={formData} handleChange={handleChange} prevStep={prevStep} nextStep={nextStep} errors={errors} />;
      case 2:
        return <Confirmation data={formData} prevStep={prevStep} handleSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <StepNavigation activeStep={step} />
      {renderStep()}
    </div>
  );
};

export default FormStepper;
