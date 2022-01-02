import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./Language.css";

const Language = () => {
  return (
    <>
      <Container>
        <HeroImg imgSrc="/img/banner1.jpg" />
        <div>
          <div className="language-container">
            <div class="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <h1> Language</h1>
                <div>
                  <div class="row">
                    <div class=" col-sm-12">
                      <img
                        className="language-listImg"
                        src="/img/language.jpg"
                        alt="Image"
                      />
                    </div>
                    <div class="col-sm-12">
                      <p className="language-listPara">
                        Renovation on progress.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Language;
