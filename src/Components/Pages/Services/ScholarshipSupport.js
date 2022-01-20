import React from "react";
import { Container } from "react-bootstrap";
import ScholarshipForm from "../../Forms/ScholarshipApplication/ScholarshipForm";
import HeroImg from "../../HeroSection/HeroImg";

import './ScholarshipSupport.css'

const ScholarshipSupport = (props) => {
  let base_url=props.base_url;
  return (
    <div>
        <Container>
          <HeroImg imgSrc="/static/banner1.jpg" />
          <div>
            <div className="ScholarshipSupport-container">
              <div class="row">
                <div className="col-lg-8 col-md-6 col-sm-12">
                  <h1 className="renovation">Scholarship Support</h1>
                  <div>
                    <div class="row">
                      <div class=" col-sm-12">
                        <img
                          className="ScholarshipSupport-listImg"
                          src="/static/scholarship-Support.jpg"
                          alt="scholarship"
                        />
                      </div>
                      <div class="col-sm-12">
                        <p className="ScholarshipSupport-listPara">
                        Scholarships are financial support granted to students depending on their academic performance and other criteria. There are various types of scholarships- Government-funded scholarships, institution-funded scholarships and non-governmental funded scholarships. Most of the scholarships are merit-based or need-based scholarships. The fully-funded scholarships for Bangladeshi students are provided to cover the tuition fees, health cover, accommodation, travel costs and other expenses allied to a student's educational cost through university.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-5">
                  <ScholarshipForm base_url={base_url}/>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
  );
};

export default ScholarshipSupport;