import React from "react";
import { Container } from "react-bootstrap";
import HeroImg from "../../HeroSection/HeroImg";
import "./Agent.css";
import AgentForm from "./AgentForm"


const Agent = () => {
  return (
    <>
      <div>
        <Container>
          <HeroImg imgSrc="/img/banner1.jpg" />
          <div>
            <div className="agent-container">
              <div class="row">
                <div className="col-lg-8 col-md-6 col-sm-12">
                  <h1 className="renovation">Be an Agent</h1>
                  <div>
                    <div class="row">
                      <div class=" col-sm-12">
                        <img
                          className="agent-listImg"
                          src="/img/Agent.jpg"
                          alt="Image"
                        />
                      </div>
                      <div class="col-sm-12">
                        <p className="agent-listPara">
                          SSG is a Global Edu-Aid platform where you can grow
                          your business, no matter which country you are
                          applying from. If you already have your own business
                          setup with a total communication system, you can apply
                          for being a Global Business Agent with SSG. And you
                          will be empowered to refer students wishing to study
                          abroad and can provide them advice and assistance.
                          <br />
                          <br />
                          We also appreciate individual agents only for
                          Bangladeshi Nationality. Your location does not
                          matter, you can work with SSG as an individual agent
                          from any corner on the globe and can gain benefits
                          providing students.
                        </p>
                        <p className="agent-listPara">
                          To become an SSG agent, you should:
                          <ul>
                            <li>Complete the form.</li>
                            <li>Provide the contact details of 2 (two) references.</li>
                            <li>Provide proof of all updated business documents issued from the legal authorities of your country.</li>
                            <li>Provide proof of professional recognitions.</li>
                          </ul>
                          <br />
                          After receiving your application, one of our counsellors will evaluate your submitted documents and contact you within a short period of time. The standard processing time for an agent application is three to four weeks from the receipt of a completed application. If you do not provide all of the information required, your application may be delayed or declined.
                        </p>
                        <p className="agent-listPara">
                        At the approval of your application, we will:
                          <ul>
                            <li>Send you the Agent Agreement for your signature.</li>
                            <li>Request the signed Agreement to be returned for processing.</li>
                          </ul>
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-6 col-sm-12 mt-5 mb-5">
                  <AgentForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Agent;
