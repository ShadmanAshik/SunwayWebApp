import React, { useState } from "react";
import ApplicationForm from "./ApplicationForm";
import AdmissionFormSuccess from "./AdmissionFormSuccess";
import "./Application.css";
import { Container } from "react-bootstrap";
import HeroImg from "../../../HeroSection/HeroImg";

function Application() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <Container>
        <HeroImg imgSrc="/img/banner1.jpg" />
        <div className="ApplicationForm">
          <ApplicationForm />
        </div>
      </Container>
    </>
  );
}
export default Application;
