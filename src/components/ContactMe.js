import React,{useState} from "react";
import emailjs from "emailjs-com"
import { useForm } from "react-hook-form";


const ContactMe = () => {
    const {register, handleSubmit,errors}   =   useForm();  
   
    const serviceID="service_ID";
    const templateID="template_ID";
    const userID=   "user_vxkbeuVrWtAPE7JWl0sms"
    
    const onSubmit=(data,resetting) =>{
        sendEmail(
            serviceID,
            templateID,
            {
                name:data.name,
                phone:data.phone,
                email:data.email,
                subject:data.subject,
                description:data.description
            },
            userID
        )
        resetting.target.reset()
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('serice_ID', 'template_ID', variables, 'user_vxkbeuVrWtAPE7JWl0sms')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
  return (
    <div className='contacts'>
      <div className='text-center'>
        <h1> contact me </h1>
        <p>
          Please fill out the form and describe your project needs. I'll contact
          you as soon as possible.
        </p>
      </div>
      <div className='container'>
          <form onSubmit={sendEmail}>
        <div className='row'>
          <div className='col-md-6 col-xs-12'>
            {/* NAME INPUT */}

            <div className='text-center'>
              <input
                id='name'
                type='text'
                className='form-control'
                placeholder='Name'
                name='name'
              />
              <div className='line'></div>
            </div>
            {/* PHONE INPUT */}
            <div className='text-center'>
              <input
                id='phone'
                type='text'
                className='form-control'
                placeholder='Phone Number'
                name='phone'
              />
              <div className='line'></div>
            </div>

            {/* EMAIL INPUT */}
            <div className='text-center'>
              <input
                id='email'
                type='email'
                className='form-control'
                placeholder='Email Address'
                name='email'
              />
              <div className='line'></div>
            </div>
            {/* SUBJECT INPUT */}
            <div className='text-center'>
              <input
                id='subject'
                type='text'
                className='form-control'
                placeholder='Subject'
                name='subject'
              />
              <div className='line'></div>
            </div>
          </div>

          <div className='col-md-6 col-xs-12'>
            {/* TEXT INPUT */}
            <div className='text-center'>
              <textarea
                id='description'
                type='text'
                className='form-control'
                placeholder='Please give a breif description of your project needs'
              ></textarea>
              <div className='line'></div>
            </div>
            <button className='btn-main-offer contact-btn' type='submit'>
              contact me
            </button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
