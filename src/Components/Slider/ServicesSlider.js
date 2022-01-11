import React, { Component } from "react";
import Slider from "react-slick";
import Cards from "../Card/Cards";
import { Container } from "react-bootstrap";
import "./Slider.css"

export default class ServicesSlider extends Component {
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
      <Container>
        <div className="sliderContainer">
          <Slider {...settings}>
            <div>
              <Cards
                title="Student Counseling"
                imgSrc="/img/Student-Counselling.jpg"
                text="Most of the students applying for further education abroad can not go through the right way to success. It’s a crucial point."
                btn="See More"
                link='/studentCounseling'
              />
            </div>
            <div>
              <Cards
                title="Application Processing"
                imgSrc="/img/Application-Processing.jpg"
                text="Send your students documents over our online system or  by email. After  sending an email please notify our consultant."
                btn="See More"
                link='/applicationProcessing'
              />
            </div>
            <div>
              <Cards
                title="Visa Application"
                imgSrc="/img/visa-application-assistance.png"
                text="Once student admission is done the next step is visa processing. Different countries have different requirements."
                btn="See More"
                link="/visaApplication"
              />
            </div>
            <div>
              <Cards
                title="Study Tour"
                imgSrc="/img/StudyTour.png"
                text="Study tour is an experience where students study abroad as an alternative to traditional classroom based learning. . . ."
                btn="See More"
                link="/studyTour"
              />
            </div>
            <div>
              <Cards
                title="Scholarship Support"
                imgSrc="/img/scholarship-Support.jpg"
                text="Scholarships are financial support granted to students depending on their academic performance and other criteria."
                btn="See More"
                link="/scholarshipSupport"
              />
            </div>
            <div>
              <Cards
                title="Advocacy"
                imgSrc="/img/Advocacy.png"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                btn="See More"
                link="/advocacy"
              />
            </div>
            <div>
              <Cards
                title="Admission Support"
                imgSrc="/img/Admission-Support.jpg"
                text="Admission application is the most important part for a student aspiring for further education considering  this a first introduction to the  University authority."
                btn="See More"
                link="/admissionSupport"
              />
            </div>
          </Slider>
        </div>
      </Container>
    );
  }
}
