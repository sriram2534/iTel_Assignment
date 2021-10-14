import React, { useState } from 'react';
import './Form.css';
import FormHdata from './FormHdata';

import FormSuccess from './FormSuccess';

const FormHybrid = ({toggleModal, onSave}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm(values) {
    setIsSubmitted(true);
    onSave(values, 'hybrid');
    toggleModal()
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