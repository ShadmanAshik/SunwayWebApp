import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TutorRegForm.css";
import PhoneInput from "react-phone-input-2";
// import validate from "./ValidateInfo";
// import useForm from "./useForm";
import axios from "axios";

const TutorRegForm = ({}) => {
  // const navigate = useNavigate();
  // const { handleChange, handleSubmit, values, error } = useForm(
  //   submitForm,
  //   validate
  // );
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [checked, setchecked] = useState(false);
  const [email, setemail] = useState("");
  const [countryCode, setcountryCode] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");

  const [city, setcity] = useState("");
  const [degreeobtained, setdegreeobtained] = useState("");
  const [EducationOrganization, setEducationOrganization] = useState("");
  const [EducationBackground, setEducationBackground] = useState("");
  const [gender, setgender] = useState("");
  const [tuitionarea, settuitionarea] = useState("");
  const [membertype, setmembertype] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const submitData = async () => {
    let formField = new FormData();

    formField.append("email", email);
    formField.append("countryCode", countryCode);
    formField.append("phone", phone);
    formField.append("address", address);
    formField.append("fName", fName);
    formField.append("lName", lName);
    formField.append("city", city);

    formField.append("degreeobtained", degreeobtained);
    formField.append("EducationOrganization", EducationOrganization);
    formField.append("EducationBackground", EducationBackground);
    formField.append("gender", gender);
    formField.append("tuitionarea", tuitionarea);
    formField.append("membertype", membertype);
    formField.append("password", password);
    formField.append("confirmpassword", confirmpassword);

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
    <div className="container" id="TutorReg-formContiner">
      <div className="TutorReg-form">
        <form className="TutorReg-card-form">
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
                value={fName}
                onChange={(e) => setfName(e.target.value)}
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
                value={lName}
                onChange={(e) => setlName(e.target.value)}
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

          <div className="TutorReg-input">
            <input
              id="email"
              type="email"
              name="email"
              className="TutorReg-input-field"
              value={email}
              onChange={(e) => setemail(e.target.value)}
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
                value={address}
                onChange={(e) => setaddress(e.target.value)}
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
                value={city}
                onChange={(e) => setcity(e.target.value)}
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
              value={degreeobtained}
              onChange={(e) => setdegreeobtained(e.target.value)}
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
              value={EducationOrganization}
              onChange={(e) => setEducationOrganization(e.target.value)}
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
              value={EducationBackground}
              onChange={(e) => setEducationBackground(e.target.value)}
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
              value={gender}
              onChange={(e) => setgender(e.target.value)}
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
              value={tuitionarea}
              onChange={(e) => settuitionarea(e.target.value)}
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
              value={membertype}
              onChange={(e) => setmembertype(e.target.value)}
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
              value={password}
              onChange={(e) => setpassword(e.target.value)}
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
              style={password===confirmpassword ? {backgroundColor:"#ffffff00"}:{backgroundColor:"#f700003b"}}
              id="confirmpassword"
              type="text"
              name="confirmpassword"
              className="TutorReg-input-field"
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e.target.value)}
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
              onChange={(e) => setchecked(!checked)}
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
              disabled={password===confirmpassword ? false : true}
              className="TutorReg-action-button"
              type="submit"
              onClick={submitData}
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
