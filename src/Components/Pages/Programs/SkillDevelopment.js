import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./SkillDevelopment.css";
import SkillDevForm from "./SkillDevForm";

const SkillDevelopment = () => {
  return (
    <>
      <Container>
        <HeroImg imgSrc="/img/banner1.jpg" />
        <div>
          <div className="skillDev-container">
            <div class="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <h1>Skill Development</h1>
                <div>
                  <div class="row">
                    <div class=" col-sm-12">
                      <img
                        className="skillDev-listImg"
                        src="/img/Skill-Development.jpg"
                        alt="Image"
                      />
                    </div>
                    <div class="textSkillDev col-sm-12">
                      <div className="skillDev-listPara">
                      Competing in today’s global economy is complex. Countries not only need advanced technical and vocational skills, but also a flexible workforce that can adjust to rapid shifts in demand.
                      </div>
                      <div className="skillDev-listPara">
                      As you know, the demand for job-specific skills has been growing around the world.
                      </div>
                      <div className="skillDev-listPara">
                      Employers around the world are demanding that new hires have both technical and “soft” skills.
                      </div>
                      <div className="skillDev-listPara">Today’s global economy requires advanced, flexible and fungible skills. Workers must be able to adjust not only to domestic shifts in demand but also to what is happening in the global economy and labor market. With the right skills in the workforce, firms can be more productive and competitive and the economy can grow faster, creating more and better jobs. The other side of this coin is that skills are essential both to reduce poverty and to improve personal well-being.  There is international evidence that cognitive, social, and technical skills affect wage premiums, earnings, and employment and occupation status.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-5">
                <SkillDevForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SkillDevelopment;
