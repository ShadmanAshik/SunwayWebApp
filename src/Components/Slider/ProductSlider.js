import React, { Component } from "react";
import Slider from "react-slick";
import Cards from "../Card/ProductCards";
import { Container } from "react-bootstrap";

export default class ProgramSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      // centerPadding: "60px",
      // leftPadding: "40px",
      bottompadding: "40px",
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const settings2 = {
      dots: true,
      infinite: true,
      // centerPadding: "60px",
      // leftPadding: "40px",
      bottompadding: "40px",
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
    const settings3 = {
      dots: true,
      infinite: true,
      // centerPadding: "60px",
      // leftPadding: "40px",
      bottompadding: "40px",
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1000,
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
          <h2 className="subheading">Primary School</h2>
          <Slider {...settings}>
            <div>
              <Cards
                title="Class 1"
                imgSrc="/static/digitalEducation/class(1).png"
                price="2000"
                btn="View"
                btn2="Buy"
                link="static/digitalEducation/DigitalContent/BanglaVersion1to10V2.jpeg"
              />
            </div>

            <div>
              <Cards
                title="Class 2"
                imgSrc="/static/digitalEducation/class(2).png"
                price=""
                btn="View"
                btn2="Buy"
                link="static/digitalEducation/DigitalContent/BanglaVersion1to10V2.jpeg"
              />
            </div>

            <div>
              <Cards
                title="Class 3"
                imgSrc="/static/digitalEducation/class(3).png"
                price=""
                btn="View"
                btn2="Buy"
                link="static/digitalEducation/DigitalContent/BanglaVersion1to10V2.jpeg"
              />
            </div>

            <div>
              <Cards
                title="Class 4"
                imgSrc="/static/digitalEducation/class(4).png"
                price=""
                btn="View"
                btn2="Buy"
                link="static/digitalEducation/DigitalContent/BanglaVersion1to10V2.jpeg"
              />
            </div>

            <div>
              <Cards
                title="Class 5"
                imgSrc="/static/digitalEducation/class(5).png"
                price=""
                btn="View"
                btn2="Buy"
                link="static/digitalEducation/DigitalContent/BanglaVersion1to10V2.jpeg"
              />
            </div>
          </Slider>
          <h2 className="subheading">Secondary School</h2>
          <Slider {...settings}>
            <div>
              <Cards
                title="Class 6"
                imgSrc="/static/digitalEducation/class(6).png"
                price=""
                btn="View"
                btn2="Buy"
                link="static/digitalEducation/DigitalContent/BanglaVersion1to10V2.jpeg"
              />
            </div>

            <div>
              <Cards
                title="Class 7"
                imgSrc="/static/digitalEducation/class(7).png"
                price=""
                btn="View"
                btn2="Buy"
                link="static/digitalEducation/DigitalContent/BanglaVersion1to10V2.jpeg"
              />
            </div>

            <div>
              <Cards
                title="Class 8"
                imgSrc="/static/digitalEducation/class(8).png"
                price=""
                btn="View"
                btn2="Buy"
                link="static/digitalEducation/DigitalContent/BanglaVersion1to10V2.jpeg"
              />
            </div>

            <div>
              <Cards
                title="Class 9 & 10"
                imgSrc="/static/digitalEducation/class(9&10).png"
                price=""
                btn="View"
                btn2="Buy"
                link="static/digitalEducation/DigitalContent/BanglaVersion1to10V2.jpeg"
              />
            </div>
          </Slider>
          <h2 className="subheading">English Version</h2>
          <Slider {...settings2}>
            <div>
              <Cards
                title="Class 1"
                imgSrc="/static/digitalEducation/class(1).png"
                price=""
                btn="View"
                btn2="Buy"
                link="static\digitalEducation\DigitalContent\EnglishVersion1&2V2.jpeg"
              />
            </div>

            <div>
              <Cards
                title="Class 2"
                imgSrc="/static/digitalEducation/class(2).png"
                price=""
                btn="View"
                btn2="Buy"
                link="static\digitalEducation\DigitalContent\EnglishVersion1&2V2.jpeg"
              />
            </div>

          </Slider>
          <h2 className="subheading2">Tab Based Education</h2>
          <Slider {...settings3}>
            <div>
              <Cards
                title="Bangla Content"
                imgSrc="static\digitalEducation\DeviceContent\tab.jpeg"
                price=""
                btn="View"
                btn2="Buy"
                link="static\digitalEducation\DeviceContent\BanglaContent2.jpeg"
              />
            </div>

            <div>
              <Cards
                title="English Content"
                imgSrc="static\digitalEducation\DeviceContent\tab.jpeg"
                price=""
                btn="View"
                btn2="Buy"
                link="static\digitalEducation\DeviceContent\EnglishContent3.jpeg"
              />
            </div>

            <div>
              <Cards
                title="English Version Content"
                imgSrc="static\digitalEducation\DeviceContent\tab.jpeg"
                price=""
                btn="View"
                btn2="Buy"
                link="static\digitalEducation\DeviceContent\TabEnglish Version(1-2).jpeg"
              />
            </div>
          </Slider>
        </div>
      </Container>
    );
  }
}
