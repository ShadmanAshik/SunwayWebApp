import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./AboutUS.css";

function AboutUS() {
  return (
    <>
      <Container>
        <HeroImg imgSrc="/img/banner1.jpg"></HeroImg>
        <div className="aboutus-container">
          <div class="row">
            <div class="col-lg-8 col-md-6 col-sm-12">
              <h1> About Us</h1>
              <div className="listItem">
                <div class="row">
                  <div class=" col-sm-12">
                    <img className="listImg" src="/img/list.jpg" alt="Image" />
                  </div>
                  <div class="col-sm-12">
                    <p className="listPara">
                      Sunway Study Group (SSG) is one of the most innovative
                      organizations in overseas education consultancy. It works
                      to turn the dreams and personal ambitions of global
                      students into a reality helping them with career
                      counselling, admissions, visa processing, ticketing,
                      pre-departure briefings and accommodation. We envision to
                      be the most authentic and transparent consultancy and to
                      be a pathway of your dream in studying abroad.
                    </p>
                    <p className="listPara">
                      Sunway Study Group (SSG) is also working with the goal to
                      assist learners in developing their language proficiency
                      which they need to become successful in graduate schools
                      and in their professional lives. It focuses on
                      implementing student-cantered and creative language
                      teaching techniques by developing modules based on
                      students’ proficiency level. It also ensures small classes
                      with excellent interaction between teachers and learners.
                    </p>
                    <p className="listPara">
                      In the 21st century, skills are a major differentiator for
                      employability and success in life. A study found that 80%
                      of achievements in career are determined by soft skills
                      and 20% by hard skills. So SSG’s timely initiative is
                      Skill Development Program (SDP) to develop the
                      Z-Generation to get competitive advantage in their work
                      place. SSG ensures knowledge, skills and attitude through
                      Competency Based Training (CBT).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AboutUS;
