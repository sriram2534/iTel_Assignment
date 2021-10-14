import React, { useState } from 'react';
import Home from '../../pages/Home/Home';
import './Form.css';
import FormSignup from './FormEdata';


const Form = () => {
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
          <FormSignup submitForm={submitForm} /> 
        ) : (
          <Home />
        )}
      </div>
    </>
  );
};

export default Form;