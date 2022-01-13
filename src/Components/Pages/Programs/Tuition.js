import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import HireTutorForm from "./TuitionFroms/HireTutorForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./Tuition.css";
import TutorRegForm from "./TuitionFroms/TutorRegForm";

const Tuition = () => {
  return (
    <>
      <Container>
        <HeroImg imgSrc="/img/banner1.jpg" />
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
                        src="/img/tution-media.jpg"
                        alt="Image"
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
                  className="row">
                    <div className="TutorRegForm col-6 mt-5"><TutorRegForm/></div>
                    <div className="HireTutorForm col-6 mt-5"><HireTutorForm/></div>
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
