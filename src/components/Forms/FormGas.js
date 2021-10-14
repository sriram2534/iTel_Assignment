import React, { useState } from 'react';
import './Form.css';
import FormGdata from './FormGdata';
import FormSuccess from './FormSuccess';

const FormGas = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        {/* <span className='close-btn' >×</span> */}
        <div className='form-content-left'>
          {/* <img className='form-img' src='img/img-2.svg' alt='spaceship' /> */}
        </div>
        {!isSubmitted ? (
          <FormGdata submitForm={submitForm} /> 
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default FormGas;