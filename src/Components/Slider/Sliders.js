import React, { Component } from "react";
import Slider from "react-slick";
import Cards from "../Card/Cards";

export default class Sliders extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      // centerPadding: "60px",
      leftPdding:"40px",
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
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="sliderContainer">
        <Slider {...settings}>
          <div>
            <Cards
              title="Student Counceling"
              imgSrc="/img/FS 8.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              btn="See More"
            />
          </div>
          <div>
            <Cards
              title="Application Processing"
              imgSrc="/img/FS 10.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              btn="See More"
            />
          </div>
          <div>
            <Cards
              title="Visa Application"
              imgSrc="/img/visa.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              btn="See More"
            />
          </div>
          <div>
            <Cards
              title="Education Program"
              imgSrc="/img/SF 4.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              btn="See More"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
