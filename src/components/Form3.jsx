/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Form3 = ({ formData, updateField, prevStep, handleSubmit }) => (
  <>
  <label>Company name: </label>
    <input
      type="text"
      value={formData.companyName}
      placeholder="Enter your company name"
      onChange={(e) => updateField('companyName', e.target.value)}
    />
    <label>Copmany code: </label> 
    <input
      type="text"
      value={formData.companyCode}
      placeholder="Enter your company code"
      onChange={(e) => updateField('companyCode', e.target.value)}
    /> 
    <button onClick={prevStep}>Back</button>
    <button onClick={handleSubmit}>Submit</button>
  </>
);

export default Form3;
