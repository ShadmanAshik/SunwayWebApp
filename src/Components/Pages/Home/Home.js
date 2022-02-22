import React from "react";
import { Container } from "react-bootstrap";
import CommonForm from "../../Forms/CommonForm/CommonForm";
import HeroSection from "../../HeroSection/HeroSection";
import ProgramSlider from "../../Slider/ProgramSlider";
import ServicesSlider from "../../Slider/ServicesSlider";
import ProductSlider from "../../Slider/ProductSlider";
import "./Home.css";
const Home = (props) => {
  let base_url=props.base_url;
  return (
    <>
      <Container>
        <HeroSection base_url={base_url}/>
        <div class="row">
          <div className="cardContainer">
            <div class="row">
              <div class="col-lg-8 col-md-6 col-sm-12">
                <h1 className="title">Explore Our Programs</h1>
                <ProgramSlider />
                <h1 className="title">Explore Our Services</h1>
                <ServicesSlider />
                <h1 className="title">Our Digital Educational Content</h1>
                <ProductSlider/>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <CommonForm base_url={base_url}/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
