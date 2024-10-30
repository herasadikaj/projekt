/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Form1 = ({ formData, updateField, nextStep }) => (
  <>
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
