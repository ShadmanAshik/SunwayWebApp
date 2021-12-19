import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./BangladeshUniversity.css";

function AboutUS() {
  return (
    <div>
      <Container>
        <HeroImg imgSrc="/img/about.gif"/>
        <div className="about-container">
          <div class="row">
            <div class="col-lg-8 col-md-6 col-sm-12">
              <h1>Bangladeshi Universities</h1>
              <div className="section1">
                <p className="sectionPara">
                  SSG is one of the most innovative organizations in overseas
                  education consultancy. It works to turn the dreams and
                  personal ambitions of global students into a reality helping
                  them with career counselling, admissions, visa processing,
                  ticketing, pre-departure briefings and accommodation. We
                  envision to be the most authentic and transparent consultancy
                  and to be a pathway of your dream in studying abroad.
                </p>
                <img className="sectionImg" src="/img/dummy.jpg" alt="" />
              </div>
              <div className="section2">
                <img  className="sectionImg" src="/img/dummy.jpg" alt="" />
                <p className="sectionPara">
                  SSG is also working with the goal to assist learners in
                  developing their language proficiency which they need to
                  become successful in graduate schools and in their
                  professional lives. It focuses on implementing
                  student-cantered and creative language teaching techniques by
                  developing modules based on students’ proficiency level. It
                  also ensures small classes with excellent interaction between
                  teachers and learners.
                </p>
              </div>
              <div className="section1">
                <p className="sectionPara">
                  In the 21st century, skills are a major differentiator for
                  employ-ability and success in life. A study found that 80% of
                  achievements in career are determined by soft skills and 20%
                  by hard skills. So SSG’s timely initiative is Skill
                  Development Program (SDP) to develop the Z-Generation to get
                  competitive advantage in their work place. SSG ensures
                  knowledge, skills and attitude through Competency Based
                  Training (CBT).{" "}
                </p>
                <img className="sectionImg" src="/img/dummy.jpg" alt="" />
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <ContactForm/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutUS;
