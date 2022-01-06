import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import HeroImg from "../../HeroSection/HeroImg";
import './ApplicationProcessing.css'

const ApplicationProcessing = () => {
  return (
    <div>
        <Container>
          <HeroImg imgSrc="/img/banner1.jpg" />
          <div>
            <div className="Application-container">
              <div class="row">
                <div className="col-lg-8 col-md-6 col-sm-12">
                  <h1 className="renovation">Application Processing</h1>
                  <div>
                    <div class="row">
                      <div class=" col-sm-12">
                        <img
                          className="Application-listImg"
                          src="/img/Application-Processing.jpg"
                          alt="Image"
                        />
                      </div>
                      <div class="col-sm-12">
                        <p className="Application-listPara">
                        Send your students documents over our online system or  by email. After  sending an email please notify our consultant. Keep in touch with consultants for assistance.
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

export default ApplicationProcessing;
