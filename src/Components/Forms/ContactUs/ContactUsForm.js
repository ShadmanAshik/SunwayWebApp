import { React, useState } from "react";
import "./ContactUsForm.css";
import validate from "./ValidateInfo";
import PhoneInput from "react-phone-input-2";
import useForm from "./useForm";

const ContactForm = (props) => {
  const { handleChange, handleSubmit, values, error, setValues } = useForm(
    props,
    validate
  );
  console.log("Base URL=>", values.baseurl);
  return (
    <div className="container" id="formContiner">
      <div className="contactus-form">
        <div className="contactus-form-title">
          <h2>Contact With Us</h2>
          <p className="title-description">
            Just enter your details below And we'll reach you soon.
          </p>
        </div>
        <form className="card-form" onSubmit={handleSubmit}>
          <div className="input">
            <input
              id="name"
              type="text"
              name="name"
              className="input-field-contactus"
              value={values.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="fname" className="input-label">
              Name
            </label>
          </div>

          <div className="input">
            <input
              id="email"
              type="email"
              name="email"
              className="input-field-contactus"
              value={values.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="email" className="input-label">
              Email
            </label>
            
          </div>

          <div>
            <div>
            <PhoneInput
            inputProps={{
              name: 'phone',
              required: true,
              autoFocus: true
            }}
            country={'bd'}
            value={values.phone}
            onChange={(phone, country, e, fv) => {
              setValues({...values, phone: fv});
            }}
          />
            </div>
          </div>

          <div className="input">
            <textarea
              id="message"
              type="text"
              name="message"
              className="input-field-contactus"
              value={values.message}
              onChange={handleChange}
              required
            />
            <label htmlFor="message" className="input-label-Message">
              Message
            </label>
          </div>
          <div className="action">
            <button
              className="action-button-Contactus m-2 col-6"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
