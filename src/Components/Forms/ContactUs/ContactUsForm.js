import { React} from "react";
import "./ContactUsForm.css";
import validate from "./ValidateInfo";
import PhoneInput from "react-phone-input-2";
import useForm from "./useForm";

const ContactForm = (props) => {
  const { handleChange, handleSubmit, values, setValues } = useForm(
    props,
    validate
  );
  console.log("Base URL=>", values.base_url);
  return (
    <div className="container" id="formContiner">
      <div className="contactus-form">
        <div className="contactus-form-title">
          <h2>Contact With Us</h2>
          <p className="title-description">
            Just enter your details below, we'll reach you soon.
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
              Name<span style={{color:"red"}}>*</span>
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
              Email<span style={{color:"red"}}>*</span>
            </label>
          </div>

          <div>
            <div className="contactus">
              <PhoneInput
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                specialLabel={ <span>Phone:<span style={{color:"red"}}>*</span></span>}
                country=" "
                enableSearch
                placeholder=" "
                value={values.phone}
                onChange={(phone, country, e, fv) => {
                  setValues({ ...values, phone: fv });
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
              Message<span style={{color:"red"}}>*</span>
            </label>
          </div>
          <div className="action">
            <button className="action-button-Contactus" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
