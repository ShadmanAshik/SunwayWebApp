import React from "react";
import { Container } from "react-bootstrap";
import LookTutor from "../../Forms/TuitionFroms/HireTutor/LookTutor";
import BeTutor from "../../Forms/TuitionFroms/TutorReg/BeTutor";
import HeroImg from "../../HeroSection/HeroImg";
import "./Tuition.css";




const Tuition = (props) => {
  let base_url=props.base_url;
  console.log("tuition bs=>", base_url)
  return (
    <>
      <Container>
        <HeroImg imgSrc="/static/banner1.jpg" />
        <div>
          <div className="tuition-container">
            <div class="row">
              <div className="col">
                <h1>Tuition Media</h1>
                <div>
                  <div class="row">
                    <div class=" col-sm-12">
                      <img
                        className="tuition-listImg"
                        src="/static/tution-media.jpg"
                        alt="Tuition-Media"
                      />
                    </div>
                    <div class="col-sm-12">
                      <p className="tuition-listPara">
                        In Bangladesh science the competition is very high, the
                        system of our education becoming more exam centric,
                        Parents are increasingly concerned about their
                        Children’s education. Many want to ensure their Children
                        are getting that bit of extra help and so look for
                        hiring tutors but finding a good quality teacher is
                        difficult. At the same time many of the qualified
                        educated unemployed people are looking for the
                        alternative to survive. Tuition media always plays a big
                        role in this field by finding tuition to earn. SSG is
                        taking the responsibilities to meet the requirements of
                        both the tutor and guardian.
                      </p>
                    </div>
                  </div>
                  <div
                  className="TuitionForms">
                    <div className="TutorRegForm col-6 mt-5"><BeTutor base_url={base_url}/></div>
                    
                    <div className="HireTutorForm col-6 mt-5"><LookTutor base_url={base_url}/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Tuition;
