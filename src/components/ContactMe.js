import React from "react";

const ContactMe = () => {
  return (
    <div className='contacts'>
      <div className='text-center'>
        <h1> contact me </h1>
        <p>
          please fill out the form and describe your project needs and i'll
          contact you as quick as possible
        </p>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-xs-12'>
            {/* NAME INPUT */}
            <input
              className='form-control'
              placeholder='Name'
              name='name'
            ></input>
            {/* PHONE INPUT */}
            <input
              className='form-control'
              placeholder='Phone Number'
              phone='phone'
            ></input>
            {/* EMAIL INPUT */}
            <input
              className='form-control'
              placeholder='Email Address'
              email='email'
            ></input>
            {/* SUBJECT INPUT */}
            <input
              className='form-control'
              placeholder='Subject'
              subject='subject'
            ></input>
          </div>
          {/* SUBJECT INPUT */}

          <div className='col-md-6 col-xs-12'></div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
