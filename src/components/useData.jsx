import { useState, useEffect } from 'react';

const initialData = {
  name: '',
  surname: '',
  age: '',
  gender: '',
  companyName: '',
  companyCode: '',
};

const useData = () => {
  const [formData, setFormData] = useState(() => {
    return JSON.parse(localStorage.getItem('formData')) || initialData

  });

  const updateField = (field, value) => {
    setFormData((prev) => {
      const updatedData = { ...prev, [field]: value };
      localStorage.setItem('formData', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const resetFormData = () => {
    setFormData(initialData);
    localStorage.clear()
  };


  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return { formData, updateField, resetFormData };
};

export default useData;
