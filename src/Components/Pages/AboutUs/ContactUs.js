import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../Forms/ContactUs/ContactUsForm";
import GoogleMap from "../../GoogleMap/GoogleMap";
import HeroImg from "../../HeroSection/HeroImg";

import "./ContactUs.css";
const ContactUs = (props) => {
  let base_url=props.base_url;
  console.log(base_url);
  return (
    <div>
      <Container>
        <HeroImg imgSrc="/static/banner1.jpg" />

        <div className="conatact-container">
          <div class="row">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <h1>Bangladesh Office Address</h1>
              <div className="contacts col-lg-7">
                <h3>Address:</h3>
                <p>
                  <i class="fas fa-home"></i> Gulfeshan Plaza, Level - 12, Suit - C, 08 Shahid Sangbadik Salina Parvin Sarak, Mogbazar, Dhaka-1217.
                </p>
                  <a href="mailto:sunwaystudy@gmail.com">
                    <i className="far fa-envelope"></i>
                    sunwaystudy@gmail.com
                    <br />
                  </a>
                  <a href="mailto:info@sunwaystudygroup.com">
                    <i className="far fa-envelope"></i>
                    info@sunwaystudygroup.com
                    <br />
                    <br />
                  </a>
                  <a href="tel:+8809642676767">
                    <i class="fas fa-headset"></i>+8809642676767
                    <br />
                  </a>
              </div>
              <div className="col-lg-12">
                <h3>Office Location:</h3>
                <GoogleMap />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <ContactForm base_url={base_url}/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
