import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactUsForm.css";
import PhoneInput from "react-phone-input-2";

import axios from "axios";

const ContactForm = ({ submitForm }) => {
  const navigate = useNavigate();
  // const { handleChange, handleSubmit, values, error } = useForm(
  //   submitForm,
  //   validate
  // );
  const [Name, setName] = useState(null);

  const [message, setmessage] = useState(null);
  const [email, setemail] = useState(null);
  const [countryCode, setcountryCode] = useState(null);
  const [phone, setphone] = useState(null);

  const submitData = async () => {
    let formField = new FormData();
    formField.append("Name", Name);

    formField.append("email", email);
    formField.append("countryCode", countryCode);
    formField.append("phone", phone);
    formField.append("message", message);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/contactformdata/",
      data: formField,
    }).then((response) => {
      navigate("/");
    });
  };

  return (
    <div className="container" id="formContiner">
      <div className="contactus-form">
        <div className="contactus-form-title">
          <h2>Contact With Us</h2>
          <p className="title-description">
            Just enter your details below And we'll reach you soon.
          </p>
        </div>
        <form className="card-form">
          <div className="input">
            <input
              id="name"
              type="text"
              name="name"
              className="input-field-contactus"
              value={Name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />

            <label htmlFor="email" className="input-label">
              Email
            </label>
            {/* {error.email && (
              <p data-tooltip="Invalid Email Address">{error.email}</p>
            )} */}
          </div>

          <div>
            <div>
              <PhoneInput
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                id="phone"
                placeholder=""
                type="tel"
                value={phone}
                onChange={setphone}
                enableSearch
                specialLabel="Phone:"
                countryCodeEditable={false}
                country=" "
                disableSearchIcon={false}
              />
            </div>
          </div>

          <div className="input">
            <textarea
              id="message"
              type="text"
              name="message"
              className="input-field-contactus"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
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
              onClick={submitData}
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
