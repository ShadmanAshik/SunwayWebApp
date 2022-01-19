import { React } from "react";
import PhoneInput from "react-phone-input-2";
import "./HireTutorForm.css";
import useForm from "./useForm";
import validate from "./ValidateInfo";

const HireTutorForm = (props) => {

  const { handleChange, hireTutorhandleSubmit, values, setValues} = useForm(
    props,
    validate
  );
  
  return (
    <div className="container" id="HireTutor-formContiner">
      <div className="HireTutor-form">
        <form className="HireTutor-card-form" onSubmit={hireTutorhandleSubmit}>
          <div className="HireTutor-form-title">
            <h2>Looking for a Tutor?</h2>
            <p className="HireTutor-title-description">
              Just enter your details below And we'll reach you soon.
            </p>
          </div>
          <div className="row">
            <div className="HireTutor-input col-6">
              <input
                id="YourName"
                type="text"
                name="f"
                className="HireTutor-input-field"
                value={values.fName}
                onChange={handleChange}
                required
              />
              <label htmlFor="YourName" className="HireTutor-input-labelrowAgent">
                Your Name:
              </label>
            </div>

            <div className="HireTutor-input col-6">
              <input
                id="StudentName"
                type="text"
                name="StudentName"
                className="HireTutor-input-field"
                value={values.lName}
                onChange={handleChange}
                required
              />
              <label htmlFor="StudentName" className="HireTutor-input-label">
                Student Name:
              </label>
            </div>
          </div>

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

          <div className="HireTutor-input">
            <input
              id="email"
              type="email"
              name="email"
              className="HireTutor-input-field"
              value={values.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="HireTutor-input-label">
              Email
            </label>
          </div>

          <div className="HireTutor-input">
            <input
              id="address"
              type="text"
              name="address"
              className="HireTutor-input-field"
              value={values.address}
              onChange={handleChange}
              required
            />
            <label htmlFor="address" className="HireTutor-input-label">
              Address:
            </label>
          </div>

          
          <div className="HireTutor-input">
            <textarea
              id="requirements"
              type="text"
              name="requirements"
              className="HireTutor-input-field-Requirement"
              value={values.requirements}
              onChange={handleChange}
            />
            <label htmlFor="requirements" className="input-label-Requirement">
            Please Mention Your Requirement (if any):
            </label>
          </div>

          <div className="HireTutor-input">
            <input
              id="Class"
              type="text"
              name="Class"
              className="HireTutor-input-field"
              value={values.Class}
              onChange={handleChange}
              required
            />
            <label htmlFor="Class" className="HireTutor-input-label">
            Class:
            </label>
          </div>

          <div className="HireTutor-input">
            <input
              id="institution"
              type="text"
              name="institution"
              className="HireTutor-input-field"
              value={values.institution}
              onChange={handleChange}
              required
            />
            <label htmlFor="institution" className="HireTutor-input-label">
            Institution Name:
            </label>
          </div>

         

          <div className="HireTutor-input">
            <select
              id="medium"
              type="text"
              name="medium"
              className="HireTutor-input-field"
              value={values.medium}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              <option value="Bengali Version">Bengali Version</option>
              <option value="English Version">English Version</option>
              <option value="English Medium">English Medium</option>
              <option value="British Curriculuman">British Curriculum</option>
              <option value="American Curriculum">American Curriculum</option>
            </select>
            <label htmlFor="medium" className="HireTutor-input-label">
              Institution Medium:
            </label>
          </div>


          <div className="HireTutor-card-info">
            <input
              className="HireTutor-checkbox"
              type="checkbox"
              id="terms"
              onChange={handleChange}
              value="agree"
              required
            />
            <label className="HireTutor-checkboxinfo" htmlfor="terms">
              I agree to the <a href="#">Terms and Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>

          <div className="HireTutor-action row">
            <button
              className="HireTutor-action-button"
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
export default HireTutorForm;
