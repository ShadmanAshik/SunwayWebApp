import React from "react";
import {Container } from "react-bootstrap";
import HeroSection from "../../HeroSection/HeroSection";
import Sliders from "../../Slider/Sliders";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Container>
        <HeroSection />
        <div class="row">
          <div class="col-md-12">
            <div className="cardContainer">
              <h1 className="title">Explore Our Services</h1>
              <Container>
                <Sliders/>  
              </Container>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
