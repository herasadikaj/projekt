/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import useData from './useData';
import './style.css';

const Form = () => {
  const savedStep = JSON.parse(localStorage.getItem('currentStep')) || 1;
  const [step, setStep] = useState(savedStep);
  const [submitted, setSubmitted] = useState(false);
  const { formData, updateField, resetFormData } = useData();

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleDelete = () => {
    resetFormData();
    setSubmitted(false);
    setStep(1);
    localStorage.removeItem('currentStep'); 
    localStorage.removeItem('formData')
  };

  const handleEdit = () => {
    setSubmitted(false);
  };


  useEffect(() => {
    localStorage.setItem('currentStep', JSON.stringify(step));
  }, [step]);

  if (submitted) {
    return (
      <div>
        <h2>Form Submitted Successfully!</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Surname:</strong> {formData.surname}</p>
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Company Name:</strong> {formData.companyName}</p>
        <p><strong>Company Code:</strong> {formData.companyCode}</p>

        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  }

  return (
    <div>
      {step === 1 && <Form1 formData={formData} updateField={updateField} nextStep={nextStep} />}
      {step === 2 && <Form2 formData={formData} updateField={updateField} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Form3 formData={formData} updateField={updateField} prevStep={prevStep} handleSubmit={handleSubmit} />}
    </div>
  );
};

export default Form;
