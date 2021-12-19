import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./Mission.css";

const Mission = () => {
  return (
    <>
      <Container>
        <HeroImg imgSrc="/img/about.gif" />
        <div className="mission-container">
          <div class="row">
            <div class="col-lg-8 col-md-7 col-sm-12">
              <h1>Our Mission and Vision</h1>
              <div className="missionVission">
                <img
                  className="sectionImg"
                  src="/img/mission1.png"
                  alt="Mission"
                />
                <div class="row">
                  <div class="col-lg-4 col-md-12">
                    <div className="points">
                      <img
                        className="icon"
                        src="/img/mission2.png"
                        alt="Mission"
                      />
                      <p>
                        Conveying international education information to
                        students and creating faster university admission
                        opportunity throughout the globe.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12">
                    <div className="points">
                      <img
                        className="icon"
                        src="/img/mission3.png"
                        alt="Mission"
                      />
                      <p>
                        Conveying international education information to
                        students and creating faster university admission
                        opportunity throughout the globe.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12">
                    <div className="points">
                      <img
                        className="icon"
                        src="/img/mission4.png"
                        alt="Mission"
                      />
                      <p>
                        Conveying international education information to
                        students and creating faster university admission
                        opportunity throughout the globe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="missionVission">
                <img
                  className="sectionImg"
                  src="/img/vision.png"
                  alt="Mission"
                />
                <div class="row">
                  <div class="col-lg-4 col-md-12">
                    <div className="points">
                      <img
                        className="icon"
                        src="/img/vision1.png"
                        alt="Mission"
                      />
                      <p>
                        To become one of the most reputed and reliable names
                        worldwide in educational consultation and overseas
                        admission service.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12">
                    <div className="points">
                      <img
                        className="icon"
                        src="/img/vision2.png"
                        alt="Mission"
                      />
                      <p>
                        Conveying international education information to
                        students and creating faster university admission
                        opportunity throughout the globe.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12">
                    <div className="points">
                      <img
                        className="icon"
                        src="/img/vision3.png"
                        alt="Mission"
                      />
                      <p>
                        Conveying international education information to
                        students and creating faster university admission
                        opportunity throughout the globe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-5 col-sm-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Mission;
