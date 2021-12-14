import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import "./AboutUS.css";

function AboutUS() {
  return (
    <div>
      <HeroSection />
      <div className="about-container">
        <div className="about-container-left">
          <h1>About SSG</h1>
          
          <div className="section1">
            <p>
              SSG is one of the most innovative organizations in overseas
              education consultancy. It works to turn the dreams and personal
              ambitions of global students into a reality helping them with
              career counselling, admissions, visa processing, ticketing,
              pre-departure briefings and accommodation. We envision to be the
              most authentic and transparent consultancy and to be a pathway of
              your dream in studying abroad.
            </p>
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div className="section2">
            <img
              src="https://images.pexels.com/photos/5428264/pexels-photo-5428264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
            <p>
              SSG is also working with the goal to assist learners in developing
              their language proficiency which they need to become successful in
              graduate schools and in their professional lives. It focuses on
              implementing student-cantered and creative language teaching
              techniques by developing modules based on students’ proficiency
              level. It also ensures small classes with excellent interaction
              between teachers and learners.
            </p>
          </div>
          <div className="section3">
            <p>
              In the 21st century, skills are a major differentiator for
              employ-ability and success in life. A study found that 80% of
              achievements in career are determined by soft skills and 20% by
              hard skills. So SSG’s timely initiative is Skill Development
              Program (SDP) to develop the Z-Generation to get competitive
              advantage in their work place. SSG ensures knowledge, skills and
              attitude through Competency Based Training (CBT).{" "}
            </p>
            <img src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
          </div>
        </div>
        <div className="about-container-right">
          <div>The form will be given here</div>
        </div>
      </div>
    </div>
  );
}

export default AboutUS;
