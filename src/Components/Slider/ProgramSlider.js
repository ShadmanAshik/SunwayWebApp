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
              imgSrc="https://i.ibb.co/T1PKFp3/Overseas.jpg"
              text="You, the aspiring students, cherish the dream of further
              education abroad as studying abroad will give you incredible experiences."
              btn="See More"
              link="/overseas"
            />
          </div>
          <div>
            <Cards
              title="Language Proficiency"
              imgSrc="https://i.ibb.co/sb5Snv8/Language.jpg"
              text="LANGUAGE PROFICIENCY AND COMMUNICATIVE COMPETENCE: Key Issues: Language proficiency is multidimensional and entails linguistic. . ."
              btn="See More"
              link="/language"
            />
          </div>
          <div>
            <Cards
              title="Skill Development"
              imgSrc="https://i.ibb.co/CJVP9z9/Skill-Development.jpg"
              text="CHALLENGES AND OPPORTUNITIES FOR SKILLS DEVELOPMENT: Competing in today’s global economy is complex. Countries not only need. . ."
              btn="See More"
              link="/skilldev"
            />
          </div>
          <div>
            <Cards
              title="Tuition Media"
              imgSrc="https://i.ibb.co/HBz9GWg/tution-media.jpg"
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
