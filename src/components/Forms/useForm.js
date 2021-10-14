import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    Year: '',
    Make: '',
    Model: '',
    Trim: '',
    Charge_Time:0,
    Max_km:0,
    fuel_consumption:0,
    warranty:''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const[showModal, setShowModal] = useState(true);
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    
  };

  const handleCancel = e => {
      setShowModal(prev=>!prev);
  }

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors, handleCancel };
};

export default useForm;