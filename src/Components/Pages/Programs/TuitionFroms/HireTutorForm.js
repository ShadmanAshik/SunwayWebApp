import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HireTutorForm.css"
import PhoneInput from "react-phone-input-2";
// import validate from "./ValidateInfo";
// import useForm from "./useForm";
import axios from "axios";

const HireTutorForm = ({}) => {
  // const navigate = useNavigate();
  // const { handleChange, handleSubmit, values, error } = useForm(
  //   submitForm,
  //   validate
  // );
  const [checked, setchecked] = useState(false);
  const [YourName, setYourName] = useState("");
  const [StudentName, setStudentName] = useState("");
  const [email, setemail] = useState("");
  const [countryCode, setcountryCode] = useState("");
  const [phone, setphone] = useState("");
  const [medium, setmedium] = useState("");

  const [address, setaddress] = useState("");
  const [requirements, setrequirements] = useState("");
  const [Class, setClass] = useState("");
  const [institution, setinstitution] = useState("");

 

  const submitData = async () => {
    let formField = new FormData();
    formField.append("YourName", YourName);
    formField.append("StudentName", StudentName);
    formField.append("email", email);
    formField.append("countryCode", countryCode);
    formField.append("phone", phone);
    formField.append("medium", medium);

    formField.append("address", address);
    formField.append("requirements", requirements);
    formField.append("Class", Class);
    formField.append("institution", institution);

    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post("http://127.0.0.1:8000/contactformdata/", formField, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container" id="HireTutor-formContiner">
      <div className="HireTutor-form">
        <form className="HireTutor-card-form">
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
                name="YourName"
                className="HireTutor-input-field"
                value={YourName}
                onChange={(e) => setYourName(e.target.value)}
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
                value={StudentName}
                onChange={(e) => setStudentName(e.target.value)}
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

          <div className="HireTutor-input">
            <input
              id="email"
              type="email"
              name="email"
              className="HireTutor-input-field"
              value={email}
              onChange={(e) => setemail(e.target.value)}
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
              value={address}
              onChange={(e) => setaddress(e.target.value)}
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
              value={requirements}
              onChange={(e) => setrequirements(e.target.value)}
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
              value={Class}
              onChange={(e) => setClass(e.target.value)}
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
              value={institution}
              onChange={(e) => setinstitution(e.target.value)}
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
              value={medium}
              onChange={(e) => setmedium(e.target.value)}
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
              onChange={(e) => setchecked(!checked)}
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
export default HireTutorForm;
