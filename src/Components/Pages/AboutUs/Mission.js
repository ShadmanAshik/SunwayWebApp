import React from "react";
import { Container } from "react-bootstrap";
import CommonForm from "../../Forms/CommonForm/CommonForm";

import HeroImg from "../../HeroSection/HeroImg";
import "./Mission.css";

const Mission = (props) => {
  let base_url = props.base_url;
  return (
    <>
      <Container>
        <HeroImg imgSrc="/static/banner1.jpg" />

        <div class="row">
          <div class="col-lg-8 col-md-7 col-sm-12">
            <div className="mission-container">
              <h1>Our Mission and Vision</h1>
              <div className="missionVission">
                <img
                  className="sectionImg"
                  src="/static/mission1.png"
                  alt="Mission"
                />
                <div class="row">
                  <div class="col-lg-4 col-md-12">
                    <div className="points">
                      <img
                        className="icon"
                        src="/static/mission2.png"
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
                        src="/static/mission3.png"
                        alt="Mission"
                      />
                      <p>
                        Providing students with opportunities to learn English,
                        Chinese, Japanese, French and Russian language.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12">
                    <div className="points">
                      <img
                        className="icon"
                        src="/static/mission4.png"
                        alt="Mission"
                      />
                      <p>
                        Developing and increasing the effectiveness of human
                        resources through required skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="missionVission">
                <img
                  className="sectionImg"
                  src="/static/vision.png"
                  alt="Mission"
                />
                <div class="row">
                  <div class="col-lg-4 col-md-12">
                    <div className="points">
                      <img
                        className="icon"
                        src="/static/vision1.png"
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
                        src="/static/vision2.png"
                        alt="Mission"
                      />
                      <p>
                        To become a recognized institute in the national and
                        international arena to develop language skills in
                        academic, professional and personal life of the
                        learners.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12">
                    <div className="points">
                      <img
                        className="icon"
                        src="/static/vision3.png"
                        alt="Mission"
                      />
                      <p>
                        To become a resource centre contributing in the
                        development of highly-skilled employable human resources
                        with required skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-5 col-sm-12">
            <CommonForm base_url={base_url} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Mission;
