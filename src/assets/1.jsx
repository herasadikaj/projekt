/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import useData from './useData';
function Form() {
  const [step, setStep] = useState(1);

  const { formData, updateField } = useData();

  const nextStep = () => setStep(prevStep => prevStep + 1);
  const prevStep = () => setStep(prevStep => prevStep - 1);


  const handleSubmit = () => {
    alert('Form submitted!');
    setStep(1); 
  };

  return (
    <div className="form-container">
      <h2>Step {step} of 3</h2>

 
      {step === 1 && (
        <div>
          <h3>Step 1: Personal Information</h3>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
      )}
      
      {step === 2 && (
        <div>
          <h3>Step 2: Contact Information</h3>
          <input type="age" placeholder="Age" />
          <input type="gender" placeholder="Gender" />
        </div>
      )}
      
      {step === 3 && (
        <div>
          <h3>Step 3: Review and Submit</h3>
          
          <input type="cname" placeholder="Company name" />
          <input type="code" placeholder="Company code" />
        </div>
      )}

     
      <div className="button-group">
        {step > 1 && <button onClick={prevStep}>Previous</button>}
        {step < 3 ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default Form;