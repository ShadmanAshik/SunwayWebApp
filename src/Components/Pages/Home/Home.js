import React from "react";
import { Container } from "react-bootstrap";
import ActionAreaCard from "../../Card/ActionCard";
import Cards from "../../Card/Cards";
import ContactForm from "../../ContactForm/ContactForm";
import HeroSection from "../../HeroSection/HeroSection";
import Sliders from "../../Slider/Sliders";
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
                <h1 className="title">Explore Our Services</h1>
                <Container>
                  <Sliders />
                </Container>
                <h1 className="title">Education Programs</h1>
                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <div className="card-item">
                      <ActionAreaCard
                        imgSrc="/img/dummy.jpg"
                        title="Under Graduate"
                      />
                    </div>
                  </div>
                  <div class=" col-md-6 col-sm-12">
                    <div className="card-item">
                      <ActionAreaCard
                        imgSrc="/img/dummy.jpg"
                        title="Post Graduate"
                      />
                    </div>{" "}
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <div className="card-item">
                      <ActionAreaCard imgSrc="/img/dummy.jpg" title="Diploma" />
                    </div>
                  </div>
                  <div class=" col-md-6 col-sm-12">
                    <div className="card-item">
                      <ActionAreaCard imgSrc="/img/dummy.jpg" title="MBBS" />
                    </div>
                  </div>
                  <div class=" col-md-6 col-sm-12">
                    <div className="card-item">
                      <ActionAreaCard
                        imgSrc="/img/dummy.jpg"
                        title="Doctor of Philosophy"
                      />
                    </div>
                  </div>
                  <div class=" col-md-6 col-sm-12">
                    <div className="card-item">
                      <ActionAreaCard
                        imgSrc="/img/dummy.jpg"
                        title="Skill Development"
                      />
                    </div>
                  </div>
                </div>
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
