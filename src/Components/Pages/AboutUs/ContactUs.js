import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import GoogleMap from "../../GoogleMap/GoogleMap";
import HeroImg from "../../HeroSection/HeroImg";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div>
      <Container>
        <HeroImg imgSrc="/img/banner1.jpg" />
        
          <div className="conatact-container">
            <div class="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <h1>Bangladesh Office Address</h1>
                <div className="col-lg-7">
                  <h3>Address:</h3>
                  <p>
                    <i class="fas fa-home"></i> Gulfeshan Plaza, Level - 12,
                    Suit - C, 08 Shahid Sangbadik Salina Parvin Sarak, Mogbazar,
                    Dhaka-1217.
                  </p>
                  <p>
                    <i class="fas fa-envelope"></i> info@educationhub-bd.com
                  </p>
                  <p>
                    <i class="fas fa-headset"></i> +8801721764149
                  </p>
                </div>
                <div className="col-lg-12">
                  <h3>Office Location:</h3>
                  <GoogleMap />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <ContactForm />
              </div>
            </div>
          </div>
        
      </Container>
    </div>
  );
};

export default ContactUs;
