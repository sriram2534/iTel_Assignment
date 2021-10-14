import React, { useState } from 'react';
import './Form.css';
import FormHdata from './FormHdata';

import FormSuccess from './FormSuccess';

const FormHybrid = () => {
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
          <FormHdata submitForm={submitForm} /> 
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default FormHybrid;