import React, { useState } from "react";
import { Container } from "react-bootstrap";
import HeroImg from "../../../HeroSection/HeroImg";
import "./ScholarshipForm.css";
import ScholarshipForm from "../../Services/ScholarshipForm";

export const ApplyScholarship = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <Container>
        <HeroImg imgSrc="/img/banner1.jpg" />
        <div className="ScholarshipForm">
          <ScholarshipForm />
        </div>
      </Container>
    </>
  );
};
export default ApplyScholarship;
