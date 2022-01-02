import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./WhySSG.css";

const WhySSG = () => {
  return (
    <>
      <Container>
        <HeroImg imgSrc="/img/banner1.jpg"></HeroImg>

        <div class="row">
          <div class="col-lg-8 col-md-6 col-sm-12">
            <div className="container-whyssgs">
              <h1> Why Choose SSG?</h1>
              <div>
                <div class="row">
                  <div class=" col-sm-12">
                    <img
                      className="whyssg-listImg"
                      src="/img/Why-SSG.jpg"
                      alt="Image"
                    />
                  </div>
                  <div class="col-sm-12">
                    <ul className="whyssg-listPara">
                      <li>
                        We do research courses, teaching modules, opportunities,
                        universities and their locations, campus life and
                        employment prospects. We ensure you get accurate and
                        unbiased advice.
                      </li>
                      <li>
                        We are offering a complete 360-degree custom solution.
                        If you need to take an English test such as IELTS to
                        qualify for your course, SSG will help you to practice
                        hard to get good grades.
                      </li>
                      <li>
                        We always remain in touch with our students and support
                        them in every related context.
                      </li>
                      <li>
                        We work on a case-by-case basis to give proper
                        credential services for both students and education
                        providers. The principles of good governance are
                        practiced to ensure the best management practices,
                        client services and academic freedom.
                      </li>
                      <li>
                        We ensure the right investment of hard-earned money of
                        the respected parents.
                      </li>
                      <li>
                        You can easily make an appointment with one of the SSG
                        counsellors certified professionally, friendly and
                        personally experienced. Your counsellor will work
                        through all the big and small details to ensure the best
                        possible fit between you and your area of study.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  );
};

export default WhySSG;
