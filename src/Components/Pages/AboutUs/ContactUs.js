import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import HeroImg from "../../HeroSection/HeroImg";

const ContactUs = () => {
  return (
    <div>
      <Container>
        <HeroImg imgSrc="/img/about.gif" />
        <div>
          <div class="row">
            <div className="col-lg-8 col-md-6 col-sm-12"></div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
