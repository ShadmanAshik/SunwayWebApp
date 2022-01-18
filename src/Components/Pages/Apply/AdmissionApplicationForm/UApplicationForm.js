import React from "react";
import "./Application.css";
import validate from "./validateinfo";
import useForm from "./useForm";

const ApplicationForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, error } = useForm(
    submitForm,
    validate
  );
<div className="Application-input col-6">
              <input
                required
                id="fieldofstudy"
                type="text"
                name="fieldofstudy"
                className="Application-input-field"
                placeholder=""
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label htmlFor="fieldofstudy" className="Application-input-label">
                Field/Program of study
              </label>
            </div>
          </div>

          <input
                required
                id="institutename"
                type="text"
                name="institutename"
                className="Application-input-field"
                placeholder=""
                value={demo}
                onChange={(e) => setdemo(e.target.value)}
              />
              <label
                htmlFor="institutename"
                className="Application-input-label"
              >
                Institute Name
              </label>
  return (
    <div className="form-content-application">
      <form className="form-application" onSubmit={handleSubmit}>
        <h1>Fill out the required information for applying for a degree.</h1>
        <div className="formdata" >
        <div>
        


        

        
        

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
          <input required
            id="profession"
            type="text"
            name="profession"
            className="Application-input-field"
            value={demo}
            onChange={(e) => setdemo(e.target.value)}
          />
          <label htmlFor="profession" className="Application-input-label">
            Applicant Profession
          </label>
        </div>

        <div className="Application-input col-6">
          <input required
            id="language"
            type="text"
            name="language"
            className="Application-input-field"
            value={demo}
            onChange={(e) => setdemo(e.target.value)}
          />
          <label htmlFor="language" className="Application-input-label">
            Mother Language
          </label>
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

        
        <h1>
          _________________________________
          <br />
          <br />
          ONLY FOR MASTERS & PhD 
        </h1>
        <div className="Application-input col-6">
          
          <input required
            id="recommendationletter"
            type="file"
            name="recommendationletter"
            className="Application-input-field"
            value={demo}
            onChange={(e) => setdemo(e.target.value)}
          />
          <label htmlFor="recommendationletter" className="Application-input-label">
          Recommendation Letter
          </label>
        </div>

        <div className="Application-input col-6">
          
          <input required
            id="recommendationletter2"
            type="file"
            name="recommendationlette2r"
            className="Application-input-field"
            value={demo}
            onChange={(e) => setdemo(e.target.value)}
          />
          <label htmlFor="recommendationletter2" className="Application-input-label">
          Recommendation Letter 2
          </label>
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
