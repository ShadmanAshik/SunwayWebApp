import React, {useState} from 'react'
import ApplicationForm from './ApplicationForm'
import AdmissionFormSuccess from "./AdmissionFormSuccess";
import "./Application.css"

function Application() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
      setIsSubmitted(true);
    }
    return (
      <>
      <div>
      </div>
        <div className="form-container-application">
          {!isSubmitted ? (
            <ApplicationForm submitForm={submitForm} />
          ) : (
            <AdmissionFormSuccess />
          )}
        </div>
      </>
    );
}
export default Application;
