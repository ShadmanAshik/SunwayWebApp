import React, { Component } from "react";
import Slider from "react-slick";
import Cards from "../Card/Cards";

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
      <div className="sliderContainer">
        <Slider {...settings}>
          <div>
            <Cards
              title="Student Counceling"
              imgSrc="https://i.ibb.co/SyZcpJh/Student-Counselling.jpg"
              text="Most of the students applying for further education abroad can not go through the right way to success. It’s a crucial point."
              btn="See More"
              link='/studentCounseling'
            />
          </div>
          <div>
            <Cards
              title="Application Processing"
              imgSrc="https://i.ibb.co/brV74WX/Application-Processing.jpg"
              text="Send your students documents over our online system or  by email. After  sending an email please notify our consultant."
              btn="See More"
              link='/applicationProcessing'
            />
          </div>
          <div>
            <Cards
              title="Visa Application"
              imgSrc="https://i.ibb.co/L883z2q/visa-application-assistance.png"
              text="Once student admission is done the next step is visa processing. Different countries have different requirements."
              btn="See More"
              link="/visaApplication"
            />
          </div>
          <div>
            <Cards
              title="Study Tour"
              imgSrc="https://i.ibb.co/brbhntY/Study-Tour.png"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              btn="See More"
              link="/studyTour"
            />
          </div>
          <div>
            <Cards
              title="Scholarship Support"
              imgSrc="https://i.ibb.co/NTy6p6P/scholarship-Support.jpg"
              text="Scholarships are financial support granted to students depending on their academic performance and other criteria."
              btn="See More"
              link="/scholarshipSupport"
            />
          </div>
          <div>
            <Cards
              title="Advocacy"
              imgSrc="https://i.ibb.co/Wf59WZt/Advocacy.png"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              btn="See More"
              link="/advocacy"
            />
          </div>
          <div>
            <Cards
              title="Admission Support"
              imgSrc="https://i.ibb.co/6Y4W9dV/Admission-Support.jpg"
              text="Admission application is the most important part for a student aspiring for further education considering  this a first introduction to the  University authority."
              btn="See More"
              link="/admissionSupport"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
