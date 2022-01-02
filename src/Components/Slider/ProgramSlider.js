import React, { Component } from "react";
import Slider from "react-slick";
import Cards from "../Card/Cards";

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
              imgSrc="/img/language.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              btn="See More"
              link="/language"
            />
          </div>
          <div>
            <Cards
              title="Skill Development"
              imgSrc="/img/Skill-Development.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              btn="See More"
              link="/skilldev"
            />
          </div>
          <div>
            <Cards
              title="Tuition Media"
              imgSrc="/img/tution-media.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              btn="See More"
              link="/tuition"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
