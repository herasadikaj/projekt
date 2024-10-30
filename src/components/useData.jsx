import { useState, useEffect } from 'react';

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
    const initialData = {
      name: '',
      surname: '',
      age: '',
      gender: '',
      companyName: '',
      companyCode: '',
    };
    setFormData(initialData);
    localStorage.setItem('formData', JSON.stringify(initialData));
  };


  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return { formData, updateField, resetFormData };
};

export default useData;
