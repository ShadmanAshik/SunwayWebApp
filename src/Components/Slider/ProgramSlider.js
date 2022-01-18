import React, { Component } from "react";
import Slider from "react-slick";
import Cards from "../Card/Cards";
import "./Slider.css"
import { Container } from "react-bootstrap";

export default class ProgramSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      // centerPadding: "60px",
      leftPdding: "40px",
      speed: 2000,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Container>
        <div className="sliderContainer">
          <Slider {...settings}>
            <div>
              <Cards
                title="Overseas Admission"
                imgSrc="/img/Overseas.jpg"
                text="You, the aspiring students, cherish the dream of further
                education abroad as studying abroad will give you incredible experiences."
                btn="See More"
                link="/overseas"
              />
            </div>
            <div>
              <Cards
                title="Language Proficiency"
                imgSrc="/img/languageProficiency.jpg"
                text="Language proficiency is multidimensional and entails linguistic, cognitive, and socio-cultural factors. . . ."
                btn="See More"
                link="/language"
              />
            </div>
            <div>
              <Cards
                title="Skill Development"
                imgSrc="/img/Skill-Development.jpg"
                text="Competing in today’s global economy is complex. Countries not only need advanced technical and vocational skills. . ."
                btn="See More"
                link="/skilldev"
              />
            </div>
            <div>
              <Cards
                title="Tuition Media"
                imgSrc="/img/tution-media.jpg"
                text="In Bangladesh science the competition is very high, the system of our education becoming more exam centric, Parents are increasingly concerned. . ."
                btn="See More"
                link="/tuition"
              />
            </div>
          </Slider>
        </div>
      </Container>
    );
  }
}
