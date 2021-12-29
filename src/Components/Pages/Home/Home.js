import React from "react";
import { Container } from "react-bootstrap";
import ActionAreaCard from "../../Card/ActionCard";
import Cards from "../../Card/Cards";
import ContactForm from "../../ContactForm/ContactForm";
import HeroSection from "../../HeroSection/HeroSection";
import ProgramSlider from "../../Slider/ProgramSlider";
import ServicesSlider from "../../Slider/ServicesSlider";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Container>
        <HeroSection />
        <div class="row">
          <div className="cardContainer">
            <div class="row">
              <div class="col-lg-8 col-md-6 col-sm-12">
                <h1 className="title">Explore Our Programs</h1>
                <ProgramSlider />
                <h1 className="title">Explore Our Services</h1>
                <ServicesSlider />
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
