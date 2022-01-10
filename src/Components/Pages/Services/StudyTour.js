import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./StudyTour.css";

const StudyTour = () => {
  return (
    <>
      <Container>
        <HeroImg imgSrc="/img/banner1.jpg" />
        <div>
          <div className="StudyTour-container">
            <div class="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <h1> Study Tour</h1>
                <div>
                  <div class="row">
                    <div class=" col-sm-12">
                      <img
                        className="StudyTour-listImg"
                        src="/img/StudyTour.png"
                        alt="Image"
                      />
                    </div>
                    <div class="col-sm-12">
                      <p className="StudyTour-listPara">
                        
                        <strong>Benefits of study tour:</strong>
                        <ol>
                          <li>Effective of learning</li>
                          <li>Exchange of Ideas</li>
                          <li>Personal development</li>
                          <li>Enhances perspective</li>
                          <li>Global networking</li>
                        </ol>
                        Study tour is an experience where students study abroad
                        as an alternative to traditional classroom based
                        learning. Students are required to meet course
                        objectives and graded on specific learning outcomes
                        based on the class syllabus. A study tour helps students
                        appreciate their field of study more and it really helps
                        them better realize the interaction between their chosen
                        field of study to the rest of the world. Study tours
                        help them open themselves to many possibilities that are
                        not just contained in one geographical location or
                        culture. SSG meets your needs by arranging study tours
                        at home and abroad.
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

export default StudyTour;
