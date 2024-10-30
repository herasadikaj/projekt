 import { useState } from 'react';

const useData = () => {
  const [formData, setFormData] = useState(() => {
    return JSON.parse(localStorage.getItem('formData')) || {
      name: '',
      surname: '',
      age: '',
      gender: '',
      companyName: '',
      companyCode: '',
    };
  });

  const updateField = (field, value) => {
    setFormData((prev) => {
      const updatedData = { ...prev, [field]: value };
      localStorage.setItem('formData', JSON.stringify(updatedData));
      return updatedData;
    });
  };
  const resetFormData = () => {
    setFormData({
      name: '',
      surname: '',
      age: '',
      gender: '',
      companyName: '',
      companyCode: '',
    });
    localStorage.clear();
  };

  return { formData, updateField, resetFormData };
};


export default useData;
