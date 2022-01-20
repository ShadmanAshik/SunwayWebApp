import axios from "axios";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "./TutorRegForm.css"

class BeTutor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fName: "",
      lName: "",
      phone: "",
      address: "",
      city: "",
      degreeobtained: "",
      EducationOrganization: "",
      EducationBackground: "",
      gender: "",
      tuitionarea: "",
      password: "",
      confirmpassword: "",
    };
  }

  submitHandler(e) {
    e.preventDefault();
    console.log("state: ", this.state);

    axios
      .post(this.props.base_url + "form/betutor/", this.state)
      .then((response) => {
        console.log("Got response: ", response);
        alert("Form Submitted!");
        window.location.reload();
      });
  }

  render() {
    return (
      <div className="container" id="TutorReg-formContiner">
        <div className="TutorReg-form">
          <form
            className="HireTutor-card-form"
            onSubmit={(e) => {
              this.submitHandler(e);
            }}
          >
            <div className="TutorReg-form-title">
              <h2>Become a Tutor.</h2>
              <p className="TutorReg-title-description">
                Just enter your details below, we'll reach you soon.
              </p>
            </div>
            <div className="row">
              <div className="TutorReg-input col-6">
                <input
                  id="fname"
                  type="text"
                  name="fName"
                  className="TutorReg-input-field"
                  onChange={(e) => {
                    this.setState({ fName: e.target.value });
                  }}
                  required
                />
                <label htmlFor="fname" className="TutorReg-input-labelrow">
                  First Name<span style={{color:"red"}}>*</span>
                </label>
              </div>

              <div className="TutorReg-input col-6">
                <input
                  id="lname"
                  type="text"
                  name="lName"
                  className="TutorReg-input-field"
                  onChange={(e) => {
                    this.setState({ lName: e.target.value });
                  }}
                  required
                />
                <label htmlFor="lname" className="TutorReg-input-label">
                  Last Name<span style={{color:"red"}}>*</span>
                </label>
              </div>
            </div>

            <div className="TutorReg">
              <PhoneInput
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                specialLabel={ <span>Phone:<span style={{color:"red"}}>*</span></span>}
                country=" "
                enableSearch
                placeholder=" "
                value={this.state.phone}
                onChange={(phone) => this.setState({ phone })}
              />
            </div>

            <div className="TutorReg-input">
              <input
                id="email"
                type="email"
                name="email"
                className="TutorReg-input-field"
                onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                required
              />
              <label htmlFor="email" className="TutorReg-input-label">
                Email<span style={{color:"red"}}>*</span>
              </label>
            </div>

            <div className="row">
              <div className="TutorReg-input col-7">
                <input
                  id="address"
                  type="text"
                  name="address"
                  className="TutorReg-input-field"
                  onChange={(e) => {
                    this.setState({ address: e.target.value });
                  }}
                  required
                />
                <label htmlFor="address" className="TutorReg-input-labelrow">
                  Address:<span style={{color:"red"}}>*</span>
                </label>
              </div>

              <div className="TutorReg-input col-5">
                <select
                  id="city"
                  type="text"
                  name="city"
                  className="HireTutor-input-field"
                  onChange={(e) => {
                    this.setState({ city: e.target.value });
                  }}
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
                  City:<span style={{color:"red"}}>*</span>
                </label>
              </div>
            </div>

            <div className="TutorReg-input">
              <select
                id="degreeobtained"
                type="text"
                name="degreeobtained"
                className="HireTutor-input-field"
                onChange={(e) => {
                    this.setState({ degreeobtained: e.target.value });
                  }}
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
                Last Obtained Degree<span style={{color:"red"}}>*</span>
              </label>
            </div>

            <div className="TutorReg-input">
              <input
                id="EducationOrganization"
                type="text"
                name="EducationOrganization"
                className="TutorReg-input-field"
                onChange={(e) => {
                    this.setState({ EducationOrganization: e.target.value });
                  }}
                required
              />
              <label
                htmlFor="EducationOrganization"
                className="TutorReg-input-label"
              >
                Last Education Institution:<span style={{color:"red"}}>*</span>
              </label>
            </div>

            <div className="TutorReg-input">
              <select
                id="EducationBackground"
                type="text"
                name="EducationBackground"
                className="TutorReg-input-field"
                onChange={(e) => {
                    this.setState({ EducationBackground: e.target.value });
                  }}
                required
              >
                <option value=""></option>
                <option value="Bengali Version">Bengali Version</option>
                <option value="English Version">English Version</option>
                <option value="English Medium">English Medium</option>
                <option value="British Curriculuman">British Curriculum</option>
                <option value="American Curriculum">American Curriculum</option>
              </select>
              <label
                htmlFor="EducationBackground"
                className="TutorReg-input-label"
              >
                Educational Background:<span style={{color:"red"}}>*</span>
              </label>
            </div>

            <div className="TutorReg-input">
              <select
                id="gender"
                type="text"
                name="gender"
                className="TutorReg-input-field"
                onChange={(e) => {
                    this.setState({ gender: e.target.value });
                  }}
                required
              >
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
              <label htmlFor="gender" className="TutorReg-input-label">
                Gender:<span style={{color:"red"}}>*</span>
              </label>
            </div>

            <div className="TutorReg-input">
              <input
                id="tuitionarea"
                type="text"
                name="tuitionarea"
                className="TutorReg-input-field"
                onChange={(e) => {
                    this.setState({ tuitionarea: e.target.value });
                  }}
                required
              />
              <label htmlFor="tuitionarea" className="TutorReg-input-label">
                Expected Tuition Area:<span style={{color:"red"}}>*</span>
              </label>
            </div>

            <div className="TutorReg-input">
              <select
                id="membertype"
                type="text"
                name="membertype"
                className="TutorReg-input-field"
                onChange={(e) => {
                    this.setState({ membertype: e.target.value });
                  }}
                required
              >
                <option value=""></option>
                <option value="Free">Free</option>
                <option value="Premium">Premium</option>
              </select>
              <label htmlFor="membertype" className="TutorReg-input-label">
                Member Type:<span style={{color:"red"}}>*</span>
              </label>
            </div>

            <div className="TutorReg-input">
              <input
                id="password"
                type="password"
                name="password"
                className="TutorReg-input-field"
                onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                required
              />
              <label htmlFor="password" className="TutorReg-input-label">
                Password:<span style={{color:"red"}}>*</span>
              </label>
            </div>

            <div className="TutorReg-input">
              <input
                style={
                  this.password ===this.confirmpassword
                    ? { backgroundColor: "#ffffff00" }
                    : { backgroundColor: "#f700003b" }
                }
                id="confirmpassword"
                type="password"
                name="confirmpassword"
                className="TutorReg-input-field"
                onChange={(e) => {
                    this.setState({ confirmpassword: e.target.value });
                  }}
                required
              />
              <label htmlFor="confirmpassword" className="TutorReg-input-label">
                Confirm Password:<span style={{color:"red"}}>*</span>
              </label>
            </div>

            <div className="TutorReg-card-info">
              <input
                className="TutorReg-checkbox"
                type="checkbox"
                id="terms"

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
                disabled={
                  this.password === this.confirmpassword ? false : true
                }
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
  }
}

export default BeTutor;
