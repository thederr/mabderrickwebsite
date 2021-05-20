import React from "react";

const ContactMe = () => {
  return (
    <div className='contacts'>
      <div className='text-center'>
        <h1> contact me </h1>
        <p>
          Please fill out the form, describe your project needs and I'll
          contact you as quick as possible, unlike Lakota Software Solutions.
        </p>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-xs-12'>
            {/* NAME INPUT */}
            <input
              id='name'
              type='text'
              className='form-control'
              placeholder='Name'
              name='name'
            ></input>
            {/* PHONE INPUT */}
            <input
              id='phone'
              type='text'
              className='form-control'
              placeholder='Phone Number'
              phone='phone'
            />
            {/* EMAIL INPUT */}
            <input
              id='email'
              type='email'
              className='form-control'
              placeholder='Email Address'
              email='email'
            />
            {/* SUBJECT INPUT */}
            <input
              id='subject'
              type='text'
              className='form-control'
              placeholder='Subject'
              subject='subject'
            />
          </div>

          <div className='col-md-6 col-xs-12'>
            {/* TEXT INPUT */}
            <textarea
              id='description'
              type='text'
              className='form-control'
              placeholder='Please give a breif description of your project needs'
            ></textarea>
            <button className='btn-main-offer contact-btn' type='submit'>
              contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
