/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';
const Form1 = ({ formData, updateField, nextStep }) => (
  <>
  <h2>Step 1</h2>
    <label>Name: </label>
    <input
      type="text"
      value={formData.name}
      placeholder="Enter your name"
      onChange={(e) => updateField('name', e.target.value)}
    /> 
    <label>Surname: </label>
    <input
      type="text"
      value={formData.surname}
      placeholder="Enter your surname"
      onChange={(e) => updateField('surname', e.target.value)}
    /> 
    <button onClick={nextStep}>Next</button>
  </>
);

export default Form1;
