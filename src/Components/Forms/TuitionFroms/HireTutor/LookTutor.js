import axios from "axios";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "./HireTutorForm.css";
class LookTutor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      yourName: "",
      studentName: "",
      phone: "",
      address: "",
      requirements: "",
      institution: "",
      medium: "",
      Class: "",
    };
  }

  submitHandler(e) {
    e.preventDefault();
    console.log("state: ", this.state);

    axios
      .post(this.props.base_url + "/form/looktutorpost/", this.state)
      .then((response) => {
        console.log("Got response: ", response);
        alert("Form Submitted!");
        window.location.reload();
      });
  }
  render() {
    return (
      <div className="container" id="HireTutor-formContiner">
        <div className="HireTutor-form">
          <form
            className="HireTutor-card-form"
            onSubmit={(e) => {
              this.submitHandler(e);
            }}
          >
            <div className="HireTutor-form-title">
              <h2>Looking for a Tutor?</h2>
              <p className="HireTutor-title-description">
                Just enter your details below, we'll reach you soon.
              </p>
            </div>
            <div className="row">
              <div className="HireTutor-input">
                <input
                  id="YourName"
                  type="text"
                  name="f"
                  className="HireTutor-input-field"
                  onChange={(e) => {
                    this.setState({ yourName: e.target.value });
                  }}
                  required
                />
                <label htmlFor="YourName" className="HireTutor-input-label">
                  Your Name:<span style={{color:"red"}}>*</span>
                </label>
              </div>
            </div>

            <div className="HireTutor">
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

            <div className="HireTutor-input">
              <input
                id="email"
                type="email"
                name="email"
                placeholder=" "
                className="HireTutor-input-field-notreq"
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
              />
              <label htmlFor="email" className="HireTutor-input-label-notreq">
                Email (If Any)
              </label>
            </div>

            <div className="HireTutor-input">
              <input
                id="address"
                type="text"
                name="address"
                className="HireTutor-input-field"
                onChange={(e) => {
                  this.setState({ address: e.target.value });
                }}
                required
              />
              <label htmlFor="address" className="HireTutor-input-label">
                Address:<span style={{color:"red"}}>*</span>
              </label>
            </div>

            <div className="HireTutor-input">
              <textarea
                id="requirements"
                type="text"
                name="requirements"
                className="HireTutor-input-field-Requirement"
                onChange={(e) => {
                  this.setState({ requirements: e.target.value });
                }}
              />
              <label htmlFor="requirements" className="input-label-Requirement">
                Please Mention Your Requirement (If Any):
              </label>
            </div>

            <div className="HireTutor-input">
              <input
                id="StudentName"
                type="text"
                name="StudentName"
                className="HireTutor-input-field"
                onChange={(e) => {
                  this.setState({ studentName: e.target.value });
                }}
                required
              />
              <label htmlFor="StudentName" className="HireTutor-input-label">
                Student Name:<span style={{color:"red"}}>*</span>
              </label>
            </div>

            <div className="HireTutor-input">
              <input
                id="Class"
                type="text"
                name="Class"
                className="HireTutor-input-field"
                onChange={(e) => {
                  this.setState({ Class: e.target.value });
                }}
                required
              />
              <label htmlFor="Class" className="HireTutor-input-label">
                Class:<span style={{color:"red"}}>*</span>
              </label>
            </div>

            <div className="HireTutor-input">
              <select
                id="medium"
                type="text"
                name="medium"
                className="HireTutor-input-field"
                onChange={(e) => {
                  this.setState({ medium: e.target.value });
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
              <label htmlFor="medium" className="HireTutor-input-label">
                Study Medium:<span style={{color:"red"}}>*</span>
              </label>
            </div>
            <div className="HireTutor-input">
              <input
                id="institution"
                type="text"
                name="institution"
                className="HireTutor-input-field"
                onChange={(e) => {
                  this.setState({ institution: e.target.value });
                }}
                required
              />
              <label htmlFor="institution" className="HireTutor-input-label">
                Institution:<span style={{color:"red"}}>*</span>
              </label>
            </div>

            <div className="HireTutor-card-info">
              <input
                className="HireTutor-checkbox"
                type="checkbox"
                id="terms"
                required
              />
              <label className="HireTutor-checkboxinfo" htmlfor="terms">
                I agree to the <a href="#">Terms and Conditions </a> and{" "}
                <a href="#">Privacy Policy</a>
              </label>
            </div>

            <div className="HireTutor-action row">
              <button className="HireTutor-action-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LookTutor;
