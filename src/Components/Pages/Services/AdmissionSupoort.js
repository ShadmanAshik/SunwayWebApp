import React from "react";
import { Container } from "react-bootstrap";
import CommonForm from "../../Forms/CommonForm/CommonForm";
import HeroImg from "../../HeroSection/HeroImg";
import './AdmissionSupoort.css'

const AdmissionSupoort = (props) => {
  let base_url = props.base_url;
  return (
    <div>
        <Container>
          <HeroImg imgSrc="/static/banner1.jpg" />
          <div>
            <div className="Admission-container">
              <div class="row">
                <div className="col-lg-8 col-md-6 col-sm-12">
                  <h1 className="renovation">Admission Support</h1>
                  <div>
                    <div class="row">
                      <div class=" col-sm-12">
                        <img
                          className="Admission-listImg"
                          src="/static/Admission-Support.jpg"
                          alt="Image"
                        />
                      </div>
                      <div class="col-sm-12">
                        <p className="Admission-listPara">
                        Admission application is the most important part for a student aspiring for further education considering  this a first introduction to the  University authority. Our counselor helps students to make it properly and send it to the university.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <CommonForm base_url={base_url} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
  );
};

export default AdmissionSupoort;
