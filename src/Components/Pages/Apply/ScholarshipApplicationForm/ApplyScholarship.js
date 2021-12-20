import React, { useState } from "react";
import { Container } from "react-bootstrap";
import HeroImg from "../../../HeroSection/HeroImg";
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
      <Container>
        <HeroImg imgSrc="/img/banner1.jpg"/>
      </Container>
      <div className="form-container-schlr">
        
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
