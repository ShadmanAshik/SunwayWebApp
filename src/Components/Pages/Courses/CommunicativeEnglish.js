import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./CommunicativeEnglish.css";

const CommunicativeEnglish = () => {
  return (
    <>
      <div>
      <Container>
        <HeroImg imgSrc="/img/banner1.jpg" />
        <div>
          <div class="row">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <h1 className="renovation">Renovation in progress...</h1>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
    </>
  );
};

export default CommunicativeEnglish;
