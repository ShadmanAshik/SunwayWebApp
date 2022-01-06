import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import HeroImg from "../../HeroSection/HeroImg";
import './VisaApplication.css'

const VisaApplication = () => {
  return (
    <div>
        <Container>
          <HeroImg imgSrc="/img/banner1.jpg" />
          <div>
            <div className="Visa-container">
              <div class="row">
                <div className="col-lg-8 col-md-6 col-sm-12">
                  <h1 className="renovation">Visa Application</h1>
                  <div>
                    <div class="row">
                      <div class=" col-sm-12">
                        <img
                          className="Visa-listImg"
                          src="/img/visa-application-assistance.png"
                          alt="Image"
                        />
                      </div>
                      <div class="col-sm-12">
                        <p className="Visa-listPara">
                        Once student admission is done the next step is visa processing. Different countries have different requirements. We guide you to  fill up the visa application  form as per requirement  and get your documents ready  for submission.
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
      </div>
  );
};

export default VisaApplication;
