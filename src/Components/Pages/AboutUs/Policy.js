import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./Policy.css";

const Policy = () => {
  return (
    <>
      <Container>
        <HeroImg imgSrc="/img/banner1.jpg" />
        <div>
          <div class="row">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <div className="policy-container">
                <h3> Quality Policy</h3>
                <p>
                To provide our students with superior services that meet the highest standards of professional performance, satisfy their requirements, and deliver exceptional value. We achieve this by team work and by striving continuously to improve our services. We ensure that our services comply with requirements and meet or exceed student expectations.	
                </p>
                <h3> Privacy Policy</h3>
                <p>
                We will only collect personal information by lawful and fair means. Personal information may be collected directly from you or your authorized representative or may be collected from a third party such as a licensee or representative authorized by us to provide services to you. You may supply your personal information to us when communicating with us via social networks, e.g. through your Facebook, Twitter, Instagram, Youtube, and Website. 
                <br />
                <br />
                We do not collect personal and sensitive information unless the information is reasonably necessary for our business functions or activities. We will obtain your consent before collecting any sensitive information.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Policy;
