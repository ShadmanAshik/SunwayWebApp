import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./Overseas.css";

const Overseas = () => {
  return (
    <>
      <Container>
        <HeroImg imgSrc="/img/banner1.jpg" />
        <div>
          <div className="overseas-container">
            <div class="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <h1 className="renovation"> Overseas Admission</h1>
                <div>
                  <div class="row">
                    <div class=" col-sm-12">
                      <img
                        className="overseas-listImg"
                        src="/img/Overseas.jpg"
                        alt="Image"
                      />
                    </div>
                    <div class="col-sm-12">
                      <p className="overseas-listPara">
                        You, the aspiring students, cherish the dream of further
                        education abroad as studying abroad will give you
                        incredible experiences, a new perspective, a new
                        worldview and a new appreciation for other cultures and
                        people. It is actually a journey to discover the new
                        world. But almost 90% of you are not aware of admission
                        procedure to reach out to success. 
                        <br />
                        So if you want to be
                        spontaneous in life and give your education life a new
                        meaning, then join SSG to mold your career in the best
                        possible means. This will be one of the best decisions
                        that will take you closer to your dream. We continuously
                        endeavor to provide our clients with the right path
                        towards higher education in foreign countries like the
                        USA, the UK, Canada, Australia, New Zealand, and many
                        more. You will get the smartest solution with the help
                        of our experienced immigration consultants. Our skilled
                        team will also steer you towards a unique preparation
                        for all the foreign examinations like SAT, GRE, GMAT,
                        TOEFL, IELTS, etc.
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

export default Overseas;
