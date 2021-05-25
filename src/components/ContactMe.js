import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const ContactMe = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { handleSubmit, register, errors } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_vxkbeuVrWtAPE7JWl0sms";

  const onSubmit = (data, resetting) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    resetting.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Form sent successfully! I'll contact you as soon as possible."
        );
      })
      .catch((err) => console.error(`something went wrong :( ${err}`));
  };

  return (
    <div id="contacts" className='contacts'>
      <div className='text-center'>
        <h1> contact me </h1>
        <p>
          Please fill out the form and describe your project needs. I'll contact
          you as soon as possible.
        </p>
        <span className='success-message'>{successMessage}</span>
      </div>
      <div className='container'>
        {/* ______________________________________________________*/}
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  ref={register({
                    required: "Please enter your name...",
                    maxLength: {
                      value: 30,
                      message:
                        "Wow that's a really long name!, please shorten it to less than 30 characters :)",
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.name && errors.name.message}
              </span>

              {/* PHONE INPUT */}
              <div className='text-center'>
                <input
                  id='phone'
                  type='text'
                  className='form-control'
                  placeholder='Phone Number'
                  name='phone'
                  ref={register({
                    required: "Please add your phone number",
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.phone && errors.phone.message}
              </span>

              {/* EMAIL INPUT */}
              <div className='text-center'>
                <input
                  id='email'
                  type='email'
                  className='form-control'
                  placeholder='Email Address'
                  name='email'
                  ref={register({
                    required: "Please add your email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.email && errors.email.message}
              </span>
              {/* SUBJECT INPUT */}
              <div className='text-center'>
                <input
                  id='subject'
                  type='text'
                  className='form-control'
                  placeholder='Subject'
                  name='subject'
                  ref={register({
                    required: "You forgot your subject, my guy",
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.subject && errors.subject.message}
              </span>
            </div>

            <div className='col-md-6 col-xs-12'>
              {/* TEXT INPUT */}
              <div className='text-center'>
                <textarea
                  id='description'
                  type='text'
                  className='form-control'
                  placeholder='Please give a breif description of your project needs'
                  name='description'
                  ref={register({
                    required: "Please give a discrpition of your problems",
                  })}
                ></textarea>
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.description && errors.description.message}
              </span>
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
