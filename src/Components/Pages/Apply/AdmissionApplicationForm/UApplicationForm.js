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
        


        


        <div className="Application-input col-6">
          
          <input required
            id="homeaddress"
            type="text"
            name="homeaddress"
            className="Application-input-field"
            placeholder=""
            value={demo}
            onChange={(e) => setdemo(e.target.value)}
          />
          <label htmlFor="homeaddress" className="Application-input-label">
            Homeland Address
          </label>
        </div>

        <div className="Application-input col-6">
          
          <input required
            id="homephone"
            type="text"
            name="homephone"
            className="Application-input-field"
            placeholder=""
            value={demo}
            onChange={(e) => setdemo(e.target.value)}
          />
          <label htmlFor="homephone" className="Application-input-label">
            Home Phone Number
          </label>
        </div>

        <div className="Application-input col-6">
          <label htmlFor="applyuniveristy" className="Application-input-label">
            Apply University
          </label>
          <input required
            id="applyuniveristy"
            type="text"
            name="applyuniveristy"
            className="Application-input-field"
            placeholder=""
            value={values.applyuniveristy}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.applyuniveristy && <p>{error.applyuniveristy}</p>}
        </div>

        <div className="Application-input col-6">
          <label htmlFor="majorsub" className="Application-input-label">
            Major Subject
          </label>
          <input required
            id="majorsub"
            type="text"
            name="majorsub"
            className="Application-input-field"
            placeholder=""
            value={values.majorsub}
            onChange={(e) => setdemo(e.target.value)}
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
        <div className="Application-input col-6">
          <label htmlFor="institutename" className="Application-input-label">
            Institute Name
          </label>
          <input required
            id="institutename"
            type="text"
            name="institutename"
            className="Application-input-field"
            placeholder=""
            value={values.institutename}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.institutename && <p>{error.institutename}</p>}
        </div>

        <div className="Application-input col-6">
          <label htmlFor="fieldofstudy" className="Application-input-label">
            Field/Program of study
          </label>
          <input required
            id="fieldofstudy"
            type="text"
            name="fieldofstudy"
            className="Application-input-field"
            placeholder=""
            value={values.fieldofstudy}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.fieldofstudy && <p>{error.fieldofstudy}</p>}
        </div>

        <div className="Application-input col-6">
          <label htmlFor="startdate" className="Application-input-label">
            From:
          </label>
          <input required
            id="startdate"
            type="date"
            name="startdate"
            className="Application-input-field"
            placeholder=""
            value={values.startdate}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.startdate && <p>{error.startdate}</p>}
        </div>

        <div className="Application-input col-6">
          <label htmlFor="enddate" className="Application-input-label">
            To:
          </label>
          <input required
            id="enddate"
            type="date"
            name="enddate"
            className="Application-input-field"
            placeholder=""
            value={values.enddate}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.enddate && <p>{error.enddate}</p>}
        </div>

        <div className="Application-input col-6">
          <label htmlFor="cgpa" className="Application-input-label">
            Obtained CGPA:
          </label>
          <input required
            id="cgpa"
            type="text"
            name="cgpa"
            className="Application-input-field"
            placeholder=""
            value={values.cgpa}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.cgpa && <p>{error.cgpa}</p>}
        </div>

        <br />
        <br />
        <h2>Educational History 2:</h2>
        <div className="Application-input col-6">
          <label htmlFor="institutename2" className="Application-input-label">
            Institute Name
          </label>
          <input required
            id="institutename2"
            type="text"
            name="institutename2"
            className="Application-input-field"
            placeholder=""
            value={values.institutename2}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.institutename2 && <p>{error.institutename2}</p>}
        </div>

        <div className="Application-input col-6">
          <label htmlFor="fieldofstudy2" className="Application-input-label">
            Field/Program of study
          </label>
          <input required
            id="fieldofstudy2"
            type="text"
            name="fieldofstudy2"
            className="Application-input-field"
            placeholder=""
            value={values.fieldofstudy2}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.fieldofstudy2 && <p>{error.fieldofstudy2}</p>}
        </div>

        <div className="Application-input col-6">
          <label htmlFor="startdate2" className="Application-input-label">
            From:
          </label>
          <input required
            id="startdate2"
            type="date"
            name="startdate2"
            className="Application-input-field"
            placeholder=""
            value={values.startdate2}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.startdate2 && <p>{error.startdate2}</p>}
        </div>

        <div className="Application-input col-6">
          <label htmlFor="enddate2" className="Application-input-label">
            To:
          </label>
          <input required
            id="enddate2"
            type="date"
            name="enddate2"
            className="Application-input-field"
            placeholder=""
            value={values.enddate2}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.enddate2 && <p>{error.enddate2}</p>}
        </div>

        <div className="Application-input col-6">
          <label htmlFor="cgpa2" className="Application-input-label">
            Obtained CGPA:
          </label>
          <input required
            id="cgpa2"
            type="text"
            name="cgpa2"
            className="Application-input-field"
            placeholder=""
            value={values.cgpa2}
            onChange={(e) => setdemo(e.target.value)}
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

        <div className="Application-input col-6">
          <label htmlFor="profession" className="Application-input-label">
            Applicant Profession
          </label>
          <input required
            id="profession"
            type="text"
            name="profession"
            className="Application-input-field"
            value={values.profession}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.profession && <p>{error.profession}</p>}
        </div>

        <div className="Application-input col-6">
          <label htmlFor="language" className="Application-input-label">
            Mother Language
          </label>
          <input required
            id="language"
            type="text"
            name="language"
            className="Application-input-field"
            value={values.language}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.language && <p>{error.language}</p>}
        </div>

        <div className="Application-input col-6">
          <label htmlFor="fathername" className="Application-input-label">
            Fathers Name
          </label>
          <input required
            id="fathername"
            type="text"
            name="fathername"
            className="Application-input-field"
            value={values.fathername}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.fathername && <p>{error.fathername}</p>}
        </div>

        <div className="Application-input col-6">
          <label htmlFor="mothername" className="Application-input-label">
            Mothers Name
          </label>
          <input required
            id="mothername"
            type="text"
            name="mothername"
            className="Application-input-field"
            value={values.mothername}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.mothername && <p>{error.mothername}</p>}
        </div>

        <div className="Application-input col-6">
          <label htmlFor="fatherage" className="Application-input-label">
            Father's Age
          </label>
          <input required
            id="fatherage"
            type="text"
            name="fatherage"
            className="Application-input-field"
            value={values.fatherage}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.fatherage && <p>{error.fatherage}</p>}
        </div>

        <div className="Application-input col-6">
          <label htmlFor="motherage" className="Application-input-label">
            Mother's Age
          </label>
          <input required
            id="motherage"
            type="text"
            name="motherage"
            className="Application-input-field"
            value={values.motherage}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.motherage && <p>{error.motherage}</p>}
        </div>

        <div className="Application-input col-6">
          <label htmlFor="fatheremployement" className="Application-input-label">
            Father's Employment
          </label>
          <input required
            id="fatheremployement"
            type="text"
            name="fatheremployement"
            className="Application-input-field"
            value={values.fatheremployement}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.fatheremployement && <p>{error.fatheremployement}</p>}
        </div>

        <div className="Application-input col-6">
          <label htmlFor="motheremployement" className="Application-input-label">
            Mother's Employment
          </label>
          <input required
            id="motheremployement"
            type="text"
            name="motheremployement"
            className="Application-input-field"
            value={values.motheremployement}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.motheremployement && <p>{error.motheremployement}</p>}
        </div>

        <div className="Application-input col-6">
          <label htmlFor="fathernumber" className="Application-input-label">
            Father's Mobile Number
          </label>
          <input required
            id="fathernumber"
            type="text"
            name="fathernumber"
            className="Application-input-field"
            value={values.fathernumber}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.fathernumber && <p>{error.fathernumber}</p>}
        </div>

        <div className="Application-input col-6">
          <label htmlFor="mothernumber" className="Application-input-label">
            Mother's Mobile Number
          </label>
          <input required
            id="mothernumber"
            type="text"
            name="mothernumber"
            className="Application-input-field"
            value={values.mothernumber}
            onChange={(e) => setdemo(e.target.value)}
          />
          {error.mothernumber && <p>{error.mothernumber}</p>}
        </div>

        <div className="Application-input col-6">
          <label htmlFor="wherehearaboutus" className="Application-input-label">
            Where did you hear about us?
          </label>
          <input required
            id="wherehearaboutus"
            type="text"
            name="wherehearaboutus"
            className="Application-input-field"
            value={values.wherehearaboutus}
            onChange={(e) => setdemo(e.target.value)}
          />
        </div>
        <h1>_________________________________</h1>
        <div className="Application-input col-6">
          <label htmlFor="passportscan" className="Application-input-label">
            Passport Scan Copy*
          </label>
          <input required
            id="passportscan"
            type="file"
            name="passportscan"
            className="Application-input-field"
            value={values.passportscan}
            onChange={(e) => setdemo(e.target.value)}
          />
        </div>

        <div className="Application-input col-6">
          <label htmlFor="academiccertificate" className="Application-input-label">
            Last Academic Certificates*
          </label>
          <input required
            id="academiccertificate"
            type="file"
            name="academiccertificate"
            className="Application-input-field"
            value={values.academiccertificate}
            onChange={(e) => setdemo(e.target.value)}
          />
        </div>

        <div className="Application-input col-6">
          <label htmlFor="transcript" className="Application-input-label">
            Last Transcripts 1*
          </label>
          <input required
            id="transcript"
            type="file"
            name="transcript"
            className="Application-input-field"
            value={values.transcript}
            onChange={(e) => setdemo(e.target.value)}
          />
        </div>

        <div className="Application-input col-6">
          <label htmlFor="transcript2" className="Application-input-label">
            Last Transcripts 2 (if have)
          </label>
          <input required
            id="transcript2"
            type="file"
            name="transcript2"
            className="Application-input-field"
            value={values.transcript2}
            onChange={(e) => setdemo(e.target.value)}
          />
        </div>

        <div className="Application-input col-6">
          <label htmlFor="policyclearance" className="Application-input-label">
            Policy Clearance (if have)
          </label>
          <input required
            id="policyclearance"
            type="file"
            name="policyclearance"
            className="Application-input-field"
            value={values.policyclearance}
            onChange={(e) => setdemo(e.target.value)}
          />
        </div>

        <div className="Application-input col-6">
          <label htmlFor="bankstatement" className="Application-input-label">
            Bank Statement 1 (if have)
          </label>
          <input required
            id="bankstatement"
            type="file"
            name="bankstatement"
            className="Application-input-field"
            value={values.bankstatement}
            onChange={(e) => setdemo(e.target.value)}
          />
        </div>

        <div className="Application-input col-6">
          <label htmlFor="bankstatement2" className="Application-input-label">
            Bank Statement 2 (if have)
          </label>
          <input required
            id="bankstatement2"
            type="file"
            name="bankstatement2"
            className="Application-input-field"
            value={values.bankstatement2}
            onChange={(e) => setdemo(e.target.value)}
          />
        </div>

        <div className="Application-input col-6">
          <label htmlFor="englishprofeciencydoc" className="Application-input-label">
            English Proficiency Document (if have)
          </label>
          <input required
            id="englishprofeciencydoc"
            type="file"
            name="englishprofeciencydoc"
            className="Application-input-field"
            value={values.englishprofeciencydoc}
            onChange={(e) => setdemo(e.target.value)}
          />
        </div>

        <div className="Application-input col-6">
          <label htmlFor="otherdoc" className="Application-input-label">
            Any Other Document (if have)
          </label>
          <input required
            id="otherdoc"
            type="file"
            name="otherdoc"
            className="Application-input-field"
            value={values.otherdoc}
            onChange={(e) => setdemo(e.target.value)}
          />
        </div>
        <h1>
          _________________________________
          <br />
          <br />
          ONLY FOR MASTERS & PhD 
        </h1>
        <div className="Application-input col-6">
          <label htmlFor="recommendationletter" className="Application-input-label">
          Recommendation Letter
          </label>
          <input required
            id="recommendationletter"
            type="file"
            name="recommendationletter"
            className="Application-input-field"
            value={values.recommendationletter}
            onChange={(e) => setdemo(e.target.value)}
          />
        </div>

        <div className="Application-input col-6">
          <label htmlFor="recommendationletter2" className="Application-input-label">
          Recommendation Letter 2
          </label>
          <input required
            id="recommendationletter2"
            type="file"
            name="recommendationlette2r"
            className="Application-input-field"
            value={values.recommendationletter2}
            onChange={(e) => setdemo(e.target.value)}
          />
        </div>

        <div className="Application-input col-6">
          <label htmlFor="recommendationletter3" className="Application-input-label">
          Recommendation Letter 3
          </label>
          <input required
            id="recommendationletter3"
            type="file"
            name="recommendationletter3"
            className="Application-input-field"
            value={values.recommendationletter3}
            onChange={(e) => setdemo(e.target.value)}
          />
        </div>

        <div className="Application-input col-6">
          <label htmlFor="studyplan" className="Application-input-label">
          Study Plan / Research Proposal
          </label>
          <input required
            id="studyplan"
            type="file"
            name="studyplan"
            className="Application-input-field"
            value={values.studyplan}
            onChange={(e) => setdemo(e.target.value)}
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
