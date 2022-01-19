import { React } from "react";
import PhoneInput from "react-phone-input-2";
import "./TutorRegForm.css";
import useForm from "./useForm";
import validate from "./ValidateInfo";

const TutorRegForm = (props) => {
  const { handleChange, tutorReghandleSubmit, values, error, setValues} = useForm(
    props,
    validate
  );
 

  return (
    <div className="container" id="TutorReg-formContiner">
      <div className="TutorReg-form">
        <form className="TutorReg-card-form" onSubmit={tutorReghandleSubmit}>
          <div className="TutorReg-form-title">
            <h2>Become a Tutor.</h2>
            <p className="TutorReg-title-description">
              Just enter your details below And we'll reach you soon.
            </p>
          </div>
          <div className="row">
            <div className="TutorReg-input col-6">
              <input
                id="fname"
                type="text"
                name="fname"
                className="TutorReg-input-field"
                value={values.fName}
                onChange={handleChange}
                required
              />
              <label htmlFor="fname" className="TutorReg-input-labelrow">
                First Name
              </label>
            </div>

            <div className="TutorReg-input col-6">
              <input
                id="lname"
                type="text"
                name="lname"
                className="TutorReg-input-field"
                value={values.lName}
                onChange={handleChange}
                required
              />
              <label htmlFor="lname" className="TutorReg-input-label">
                Last Name
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

          <div className="TutorReg-input">
            <input
              id="email"
              type="email"
              name="email"
              className="TutorReg-input-field"
              value={values.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="TutorReg-input-label">
              Email
            </label>
          </div>

          <div className="row">
            <div className="TutorReg-input col-7">
              <input
                id="address"
                type="text"
                name="address"
                className="TutorReg-input-field"
                value={values.address}
                onChange={handleChange}
                required
              />
              <label htmlFor="address" className="TutorReg-input-labelrow">
                Address:
              </label>
            </div>

            <div className="TutorReg-input col-5">
              <select
                id="city"
                type="text"
                name="city"
                className="HireTutor-input-field"
                value={values.city}
                onChange={handleChange}
                required
              >
                <option value=""></option>
                <option value="Barishal">Barishal</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Sylhet">Sylhet</option>
              </select>
              <label htmlFor="city" className="TutorReg-input-label">
                City
              </label>
            </div>
          </div>

          <div className="TutorReg-input">
            <select
              id="degreeobtained"
              type="text"
              name="degreeobtained"
              className="HireTutor-input-field"
              value={values.degreeobtained}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              <option value="SSC">SSC</option>
              <option value="HSC">HSC</option>
              <option value="O-Levels">O-Levels</option>
              <option value="A-Levels">A-Levels</option>
              <option value="Honors">Honors</option>
              <option value="Masters">Masters</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="degreeobtained" className="TutorReg-input-label">
              Last Degree Obtained
            </label>
          </div>

          <div className="TutorReg-input">
            <input
              id="EducationOrganization"
              type="text"
              name="EducationOrganization"
              className="TutorReg-input-field"
              value={values.EducationOrganization}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="EducationOrganization"
              className="TutorReg-input-label"
            >
              Last Education Organization Name:
            </label>
          </div>

          <div className="TutorReg-input">
            <select
              id="EducationBackground"
              type="text"
              name="EducationBackground"
              className="TutorReg-input-field"
              value={values.EducationBackground}
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
            <label htmlFor="EducationBackground" className="TutorReg-input-label">
              Educational Background:
            </label>
          </div>

          <div className="TutorReg-input">
            <select
              id="gender"
              type="text"
              name="gender"
              className="TutorReg-input-field"
              value={values.gender}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>

            </select>
            <label htmlFor="gender" className="TutorReg-input-label">
              Gender:
            </label>
          </div>

          <div className="TutorReg-input">
            <input
              id="tuitionarea"
              type="text"
              name="tuitionarea"
              className="TutorReg-input-field"
              value={values.tuitionarea}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="tuitionarea"
              className="TutorReg-input-label"
            >
              Expected Tuition Area:
            </label>
          </div>

          <div className="TutorReg-input">
            <select
              id="membertype"
              type="text"
              name="membertype"
              className="TutorReg-input-field"
              value={values.membertype}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              <option value="Free">Free</option>
              <option value="Premium">Premium</option>

            </select>
            <label htmlFor="membertype" className="TutorReg-input-label">
              Member Type:
            </label>
          </div>

          <div className="TutorReg-input">
            <input
              id="password"
              type="text"
              name="password"
              className="TutorReg-input-field"
              value={values.password}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="password"
              className="TutorReg-input-label"
            >
              Password:
            </label>
          </div>

          <div className="TutorReg-input">
            <input
              style={values.password===values.confirmpassword ? {backgroundColor:"#ffffff00"}:{backgroundColor:"#f700003b"}}
              id="confirmpassword"
              type="text"
              name="confirmpassword"
              className="TutorReg-input-field"
              value={values.confirmpassword}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="confirmpassword"
              className="TutorReg-input-label"
            >
              Confirm Password:
            </label>
          </div>

          <div className="TutorReg-card-info">
            <input
              className="TutorReg-checkbox"
              type="checkbox"
              id="terms"
              onChange={handleChange}
              value="agree"
              required
            />
            <label className="TutorReg-checkboxinfo" htmlfor="terms">
              I agree to the <a href="#">Terms and Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>


          <div className="TutorReg-action row">
            <button
              disabled={values.password===values.confirmpassword ? false : true}
              className="TutorReg-action-button"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default TutorRegForm;
