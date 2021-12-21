import React from "react";
import "./Application.css";
import validate from "./validateinfo";
import useForm from "./useForm";

const ApplicationForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, error } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-application">
      <form className="form-application" onSubmit={handleSubmit}>
        <h1>Fill out the required information for applying for a degree.</h1>
        <div className="formdata" >
        <div>
        <div className="form-inputs-application">
          <label htmlFor="photo" className="form-label-application">
            Upload your passport-sized photo.*
          </label>
          <input
            id="photo"
            type="file"
            name="photo"
            className="form-input-application"
            value={values.photo}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs-application">
          <label htmlFor="name" className="form-label-application">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input-application"
            placeholder="Full Name"
            value={values.name}
            onChange={handleChange}
          />
          {error.name && <p>{error.name}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportno" className="form-label-application">
            Passport Number
          </label>
          <input
            id="passportno"
            type="text"
            name="passportno"
            className="form-input-application"
            placeholder=""
            value={values.passportno}
            onChange={handleChange}
          />
          {error.passportno && <p>{error.passportno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="passportExpireDate" className="form-label-application">
            Passport Expire Date
          </label>
          <input
            id="passportExpireDate"
            type="date"
            name="passportExpireDate"
            className="form-input-application"
            placeholder=""
            value={values.passportExpireDate}
            onChange={handleChange}
          />
          {error.passportExpireDate && <p>{error.passportExpireDate}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="nationality" className="form-label-application">
            Nationality
          </label>
          <input
            id="nationality"
            type="text"
            name="nationality"
            className="form-input-application"
            placeholder=""
            value={values.nationality}
            onChange={handleChange}
          />
          {error.nationality && <p>{error.nationality}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="religion" className="form-label-application">
            Religion
          </label>
          <input
            id="religion"
            type="text"
            name="religion"
            className="form-input-application"
            placeholder=""
            value={values.religion}
            onChange={handleChange}
          />
          {error.religion && <p>{error.religion}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="gender" className="form-label-application">
            Gender
          </label>
          <select
            id="gender"
            type="text"
            name="gender"
            className="form-input-application"
            value={values.logigender}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {error.gender && <p>{error.gender}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="dateofbirth" className="form-label-application">
            Date of Birth
          </label>
          <input
            id="dateofbirth"
            type="date"
            name="dateofbirth"
            className="form-input-application"
            placeholder=""
            value={values.dateofbirth}
            onChange={handleChange}
          />
          {error.dateofbirth && <p>{error.dateofbirth}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="placeofbirth" className="form-label-application">
            Place of Birth
          </label>
          <input
            id="placeofbirth"
            type="text"
            name="placeofbirth"
            className="form-input-application"
            placeholder=""
            value={values.placeofbirth}
            onChange={handleChange}
          />
          {error.placeofbirth && <p>{error.placeofbirth}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="maritalstatus" className="form-label-application">
            Marital Status
          </label>
          <select
            id="maritalstatus"
            type="text"
            name="maritalstatus"
            className="form-input-application"
            value={values.logimaritalstatus}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="married">Married</option>
            <option value="single">Single</option>
          </select>
          {error.maritalstatus && <p>{error.maritalstatus}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="email" className="form-label-application">
            Applicant Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input-application"
            placeholder=""
            value={values.email}
            onChange={handleChange}
          />
          {error.email && <p>{error.email}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="phoneno" className="form-label-application">
            Applicant Phone
          </label>
          <input
            id="phoneno"
            type="text"
            name="phoneno"
            className="form-input-application"
            placeholder=""
            value={values.phoneno}
            onChange={handleChange}
          />
          {error.phoneno && <p>{error.phoneno}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="homeaddress" className="form-label-application">
            Homeland Address
          </label>
          <input
            id="homeaddress"
            type="text"
            name="homeaddress"
            className="form-input-application"
            placeholder=""
            value={values.homeaddress}
            onChange={handleChange}
          />
          {error.homeaddress && <p>{error.homeaddress}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="homephone" className="form-label-application">
            Home Phone Number
          </label>
          <input
            id="homephone"
            type="text"
            name="homephone"
            className="form-input-application"
            placeholder=""
            value={values.homephone}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs-application">
          <label htmlFor="applyuniveristy" className="form-label-application">
            Apply University
          </label>
          <input
            id="applyuniveristy"
            type="text"
            name="applyuniveristy"
            className="form-input-application"
            placeholder=""
            value={values.applyuniveristy}
            onChange={handleChange}
          />
          {error.applyuniveristy && <p>{error.applyuniveristy}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="majorsub" className="form-label-application">
            Major Subject
          </label>
          <input
            id="majorsub"
            type="text"
            name="majorsub"
            className="form-input-application"
            placeholder=""
            value={values.majorsub}
            onChange={handleChange}
          />
          {error.majorsub && <p>{error.majorsub}</p>}
        </div>

        <h1>
        _________________________________
          <br />
          <br />
          Educational Background
        </h1>

        <h2>Educational History 1:</h2>
        <div className="form-inputs-application">
          <label htmlFor="institutename" className="form-label-application">
            Institute Name
          </label>
          <input
            id="institutename"
            type="text"
            name="institutename"
            className="form-input-application"
            placeholder=""
            value={values.institutename}
            onChange={handleChange}
          />
          {error.institutename && <p>{error.institutename}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="fieldofstudy" className="form-label-application">
            Field/Program of study
          </label>
          <input
            id="fieldofstudy"
            type="text"
            name="fieldofstudy"
            className="form-input-application"
            placeholder=""
            value={values.fieldofstudy}
            onChange={handleChange}
          />
          {error.fieldofstudy && <p>{error.fieldofstudy}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="startdate" className="form-label-application">
            From:
          </label>
          <input
            id="startdate"
            type="date"
            name="startdate"
            className="form-input-application"
            placeholder=""
            value={values.startdate}
            onChange={handleChange}
          />
          {error.startdate && <p>{error.startdate}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="enddate" className="form-label-application">
            To:
          </label>
          <input
            id="enddate"
            type="date"
            name="enddate"
            className="form-input-application"
            placeholder=""
            value={values.enddate}
            onChange={handleChange}
          />
          {error.enddate && <p>{error.enddate}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="cgpa" className="form-label-application">
            Obtained CGPA:
          </label>
          <input
            id="cgpa"
            type="text"
            name="cgpa"
            className="form-input-application"
            placeholder=""
            value={values.cgpa}
            onChange={handleChange}
          />
          {error.cgpa && <p>{error.cgpa}</p>}
        </div>

        <br />
        <br />
        <h2>Educational History 2:</h2>
        <div className="form-inputs-application">
          <label htmlFor="institutename2" className="form-label-application">
            Institute Name
          </label>
          <input
            id="institutename2"
            type="text"
            name="institutename2"
            className="form-input-application"
            placeholder=""
            value={values.institutename2}
            onChange={handleChange}
          />
          {error.institutename2 && <p>{error.institutename2}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="fieldofstudy2" className="form-label-application">
            Field/Program of study
          </label>
          <input
            id="fieldofstudy2"
            type="text"
            name="fieldofstudy2"
            className="form-input-application"
            placeholder=""
            value={values.fieldofstudy2}
            onChange={handleChange}
          />
          {error.fieldofstudy2 && <p>{error.fieldofstudy2}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="startdate2" className="form-label-application">
            From:
          </label>
          <input
            id="startdate2"
            type="date"
            name="startdate2"
            className="form-input-application"
            placeholder=""
            value={values.startdate2}
            onChange={handleChange}
          />
          {error.startdate2 && <p>{error.startdate2}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="enddate2" className="form-label-application">
            To:
          </label>
          <input
            id="enddate2"
            type="date"
            name="enddate2"
            className="form-input-application"
            placeholder=""
            value={values.enddate2}
            onChange={handleChange}
          />
          {error.enddate2 && <p>{error.enddate2}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="cgpa2" className="form-label-application">
            Obtained CGPA:
          </label>
          <input
            id="cgpa2"
            type="text"
            name="cgpa2"
            className="form-input-application"
            placeholder=""
            value={values.cgpa2}
            onChange={handleChange}
          />
          {error.cgpa2 && <p>{error.cgpa2}</p>}
        </div>
</div>
<div>
        <h1>
        _________________________________
          <br />
          <br />
          Personal Details
        </h1>

        <div className="form-inputs-application">
          <label htmlFor="profession" className="form-label-application">
            Applicant Profession
          </label>
          <input
            id="profession"
            type="text"
            name="profession"
            className="form-input-application"
            value={values.profession}
            onChange={handleChange}
          />
          {error.profession && <p>{error.profession}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="language" className="form-label-application">
            Mother Language
          </label>
          <input
            id="language"
            type="text"
            name="language"
            className="form-input-application"
            value={values.language}
            onChange={handleChange}
          />
          {error.language && <p>{error.language}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="fathername" className="form-label-application">
            Fathers Name
          </label>
          <input
            id="fathername"
            type="text"
            name="fathername"
            className="form-input-application"
            value={values.fathername}
            onChange={handleChange}
          />
          {error.fathername && <p>{error.fathername}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="mothername" className="form-label-application">
            Mothers Name
          </label>
          <input
            id="mothername"
            type="text"
            name="mothername"
            className="form-input-application"
            value={values.mothername}
            onChange={handleChange}
          />
          {error.mothername && <p>{error.mothername}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="fatherage" className="form-label-application">
            Father's Age
          </label>
          <input
            id="fatherage"
            type="text"
            name="fatherage"
            className="form-input-application"
            value={values.fatherage}
            onChange={handleChange}
          />
          {error.fatherage && <p>{error.fatherage}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="motherage" className="form-label-application">
            Mother's Age
          </label>
          <input
            id="motherage"
            type="text"
            name="motherage"
            className="form-input-application"
            value={values.motherage}
            onChange={handleChange}
          />
          {error.motherage && <p>{error.motherage}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="fatheremployement" className="form-label-application">
            Father's Employment
          </label>
          <input
            id="fatheremployement"
            type="text"
            name="fatheremployement"
            className="form-input-application"
            value={values.fatheremployement}
            onChange={handleChange}
          />
          {error.fatheremployement && <p>{error.fatheremployement}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="motheremployement" className="form-label-application">
            Mother's Employment
          </label>
          <input
            id="motheremployement"
            type="text"
            name="motheremployement"
            className="form-input-application"
            value={values.motheremployement}
            onChange={handleChange}
          />
          {error.motheremployement && <p>{error.motheremployement}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="fathernumber" className="form-label-application">
            Father's Mobile Number
          </label>
          <input
            id="fathernumber"
            type="text"
            name="fathernumber"
            className="form-input-application"
            value={values.fathernumber}
            onChange={handleChange}
          />
          {error.fathernumber && <p>{error.fathernumber}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="mothernumber" className="form-label-application">
            Mother's Mobile Number
          </label>
          <input
            id="mothernumber"
            type="text"
            name="mothernumber"
            className="form-input-application"
            value={values.mothernumber}
            onChange={handleChange}
          />
          {error.mothernumber && <p>{error.mothernumber}</p>}
        </div>

        <div className="form-inputs-application">
          <label htmlFor="wherehearaboutus" className="form-label-application">
            Where did you hear about us?
          </label>
          <input
            id="wherehearaboutus"
            type="text"
            name="wherehearaboutus"
            className="form-input-application"
            value={values.wherehearaboutus}
            onChange={handleChange}
          />
        </div>
        <h1>_________________________________</h1>
        <div className="form-inputs-application">
          <label htmlFor="passportscan" className="form-label-application">
            Passport Scan Copy*
          </label>
          <input
            id="passportscan"
            type="file"
            name="passportscan"
            className="form-input-application"
            value={values.passportscan}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs-application">
          <label htmlFor="academiccertificate" className="form-label-application">
            Last Academic Certificates*
          </label>
          <input
            id="academiccertificate"
            type="file"
            name="academiccertificate"
            className="form-input-application"
            value={values.academiccertificate}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs-application">
          <label htmlFor="transcript" className="form-label-application">
            Last Transcripts 1*
          </label>
          <input
            id="transcript"
            type="file"
            name="transcript"
            className="form-input-application"
            value={values.transcript}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs-application">
          <label htmlFor="transcript2" className="form-label-application">
            Last Transcripts 2 (if have)
          </label>
          <input
            id="transcript2"
            type="file"
            name="transcript2"
            className="form-input-application"
            value={values.transcript2}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs-application">
          <label htmlFor="policyclearance" className="form-label-application">
            Policy Clearance (if have)
          </label>
          <input
            id="policyclearance"
            type="file"
            name="policyclearance"
            className="form-input-application"
            value={values.policyclearance}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs-application">
          <label htmlFor="bankstatement" className="form-label-application">
            Bank Statement 1 (if have)
          </label>
          <input
            id="bankstatement"
            type="file"
            name="bankstatement"
            className="form-input-application"
            value={values.bankstatement}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs-application">
          <label htmlFor="bankstatement2" className="form-label-application">
            Bank Statement 2 (if have)
          </label>
          <input
            id="bankstatement2"
            type="file"
            name="bankstatement2"
            className="form-input-application"
            value={values.bankstatement2}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs-application">
          <label htmlFor="englishprofeciencydoc" className="form-label-application">
            English Proficiency Document (if have)
          </label>
          <input
            id="englishprofeciencydoc"
            type="file"
            name="englishprofeciencydoc"
            className="form-input-application"
            value={values.englishprofeciencydoc}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs-application">
          <label htmlFor="otherdoc" className="form-label-application">
            Any Other Document (if have)
          </label>
          <input
            id="otherdoc"
            type="file"
            name="otherdoc"
            className="form-input-application"
            value={values.otherdoc}
            onChange={handleChange}
          />
        </div>
        <h1>
          _________________________________
          <br />
          <br />
          ONLY FOR MASTERS & PhD 
        </h1>
        <div className="form-inputs-application">
          <label htmlFor="recommendationletter" className="form-label-application">
          Recommendation Letter
          </label>
          <input
            id="recommendationletter"
            type="file"
            name="recommendationletter"
            className="form-input-application"
            value={values.recommendationletter}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs-application">
          <label htmlFor="recommendationletter2" className="form-label-application">
          Recommendation Letter 2
          </label>
          <input
            id="recommendationletter2"
            type="file"
            name="recommendationlette2r"
            className="form-input-application"
            value={values.recommendationletter2}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs-application">
          <label htmlFor="recommendationletter3" className="form-label-application">
          Recommendation Letter 3
          </label>
          <input
            id="recommendationletter3"
            type="file"
            name="recommendationletter3"
            className="form-input-application"
            value={values.recommendationletter3}
            onChange={handleChange}
          />
        </div>

        <div className="form-inputs-application">
          <label htmlFor="studyplan" className="form-label-application">
          Study Plan / Research Proposal
          </label>
          <input
            id="studyplan"
            type="file"
            name="studyplan"
            className="form-input-application"
            value={values.studyplan}
            onChange={handleChange}
          />
        </div>
        </div>
        </div>
        <button className="form-input-apply-application" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default ApplicationForm;
