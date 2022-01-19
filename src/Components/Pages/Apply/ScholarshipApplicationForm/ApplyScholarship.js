import React from "react";
import { Container } from "react-bootstrap";
import ScholarshipForm from "../../../Forms/ScholarshipApplication/ScholarshipForm";
import HeroImg from "../../../HeroSection/HeroImg";
import "./ScholarshipForm.css";


export const ApplyScholarship = () => {
  

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
