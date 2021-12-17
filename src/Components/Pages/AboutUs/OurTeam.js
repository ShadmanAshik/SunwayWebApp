import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import GoogleMap from "../../GoogleMap/GoogleMap";
import HeroImg from "../../HeroSection/HeroImg";
import "./OurTeam.css"

const OurTeam = () => {
  return (
    <div>
      <Container>
        <HeroImg imgSrc="/img/about.gif" />
        <div>
          <div class="row">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <div class="team-container">
                <GoogleMap/>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurTeam;
