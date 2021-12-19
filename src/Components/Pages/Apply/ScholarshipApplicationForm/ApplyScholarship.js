import React, { useState } from "react";
import ApplyScholarshipForm from "./ApplyScholarshipForm";
import FormSuccess from "./FormSuccess";
import "./ScholarshipForm.css";

export const ApplyScholarship = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      
      <div className="form-container-schlr">
        <h1>Scholarship Application Form</h1>
        {!isSubmitted ? (
          <ApplyScholarshipForm submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}

        
      </div>
      
    </>
  );
};
export default ApplyScholarship;
