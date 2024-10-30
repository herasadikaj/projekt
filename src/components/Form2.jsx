/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Form2 = ({ formData, updateField, nextStep, prevStep }) => (
  <>
  <label>Age: </label>
    <input
      type="text"
      value={formData.age}
      placeholder="Enter your age"
      onChange={(e) => updateField('age', e.target.value)}
    />
    <label>Gender: </label>
    <input
      type="text"
      value={formData.gender}
      placeholder="Enter your gender"
      onChange={(e) => updateField('gender', e.target.value)}
    />
    <button onClick={prevStep}>Back</button>
    <button onClick={nextStep}>Next</button>
  </>
);

export default Form2;
