import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./OnlineOutsourcing.css";

const WhySSG = () => {
  return (
    <>
      <Container>
        <HeroImg imgSrc="/img/slider1.svg"></HeroImg>
        <div className="whyssg-container">
          <div class="row">
            <div class="col-lg-8 col-md-6 col-sm-12">
              <h1>Online Outsourcing</h1>
              <div className="listItem">
                <div class="row">
                  <div class=" col-sm-12">
                    <img className="listImg" src="/img/FS 17.jpg" alt="Image" />
                  </div>
                  <div class="col-sm-12">
                    <p className="listPara">
                      We do research courses, teaching modules, opportunities,
                      universities and their locations, campus life and
                      employment prospects. We ensure you getting an accurate
                      and unbiased advice.
                    </p>
                  </div>
                </div>
              </div>
              <div className="listItem">
                <div class="row">
                  <div class=" col-sm-12">
                    <img className="listImg" src="/img/FS 17.jpg" alt="Image" />
                  </div>
                  <div class="col-sm-12">
                    <p className="listPara">
                      We are offering a complete 360-degree custom solutions. If
                      you need to take an English test such as IELTS to qualify
                      for your course, SSG will help you to practice hard to get
                      good grades.
                    </p>
                  </div>
                </div>
              </div>
              <div className="listItem">
                <div class="row">
                  <div class=" col-sm-12">
                    <img className="listImg" src="/img/FS 17.jpg" alt="Image" />
                  </div>
                  <div class="col-sm-12">
                    <p className="listPara">
                      We always remain in touch with our students and support
                      them in every related context.
                    </p>
                  </div>
                </div>
              </div>
              <div className="listItem">
                <div class="row">
                  <div class=" col-sm-12">
                    <img className="listImg" src="/img/FS 17.jpg" alt="Image" />
                  </div>
                  <div class="col-sm-12">
                    <p className="listPara">
                      We work on a case by case basis to give proper credential
                      services for both students and education providers. The
                      principles of good governance is practiced to ensure the
                      best management practices, client services and academic
                      freedom.
                    </p>
                  </div>
                </div>
              </div>
              <div className="listItem">
                <div class="row">
                  <div class=" col-sm-12">
                    <img className="listImg" src="/img/FS 17.jpg" alt="Image" />
                  </div>
                  <div class="col-sm-12">
                    <p className="listPara">
                      We ensure the right investment of hard-earnt money of the
                      respected parents.
                    </p>
                  </div>
                </div>
              </div>
              <div className="listItem">
                <div class="row">
                  <div class=" col-sm-12">
                    <img className="listImg" src="/img/FS 17.jpg" alt="Image" />
                  </div>
                  <div class="col-sm-12">
                    <p className="listPara">
                      You can easily make an appointment with one of the SSG
                      counsellors certified professionally, friendly and
                      personally experienced. Your counsellor will work through
                      all the big and small details to ensure the best possible
                      fit between you and your area of study.
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
};

export default WhySSG;
