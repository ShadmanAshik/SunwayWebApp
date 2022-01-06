import { React, useState } from "react";
import { Button, Carousel, Container } from "react-bootstrap";
import Popup from "reactjs-popup";
import AgentForm from "../Pages/Agent/AgentForm";
import "./HeroSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="hero">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={"5000"}
        pause="hover"
        wrap="true"
      >
        <Carousel.Item>
          <img
            id="carouselImage"
            className="d-block w-100"
            src="https://i.ibb.co/S7TTrs6/Welcome.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="caurousel-caption ">
            <h1>Welcome to Sunway Study Group</h1>
            <Button
              href="/about"
              className="heroBtn"
              id="explore"
              variant="secondary"
            >
              Explore more
            </Button>
            <Button
              href="/about"
              className="heroBtn"
              id="btn2"
              variant="secondary"
            >
              Register Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/mHLYzXR/worldwide.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="caurousel-caption">
            <h1>World Wide Admission</h1>
            <Button
              href="/AdmissionForm"
              className="heroBtn"
              id="explore"
              variant="secondary"
            >
              Explore more
            </Button>
            <Button
              href="/AdmissionForm"
              className="heroBtn"
              id="btn2"
              variant="secondary"
            >
              Apply Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/sb5Snv8/Language.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="caurousel-caption">
            <h1>Enrich Your Language Proficiency</h1>
            <Button
              href="/language"
              className="heroBtn"
              id="explore"
              variant="secondary"
            >
              Explore more
            </Button>
            <Button
              href="/language"
              className="heroBtn"
              id="btn2"
              variant="secondary"
            >
              Apply Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/HGyryKv/skills.jpg"
            alt="Forth slide"
          />
          <Carousel.Caption className="caurousel-caption">
            <h1>Develop Your Skills</h1>
            <Button
              href="/skillDev"
              className="heroBtn"
              id="explore"
              variant="secondary"
            >
              Explore more
            </Button>
            <Button
              href="/skillDev"
              className="heroBtn"
              id="btn2"
              variant="secondary"
            >
              Apply Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/tz71NLN/tuition.jpg"
            alt="Forth slide"
          />
          <Carousel.Caption className="caurousel-caption">
            <h1>Tutoring Z-Generation</h1>
            <Button
              href="/tuition"
              className="heroBtn"
              id="explore"
              variant="secondary"
            >
              Hire A Tutor
            </Button>
            <Button
              href="/tuition"
              className="heroBtn"
              id="btn2"
              variant="secondary"
            >
              Become A Tutor
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/pbK8B2R/Be-our-Global-Agent.jpg"
            alt="Fifth slide"
          />
          <Carousel.Caption className="caurousel-caption ">
            <h1>Be Our Global Agent</h1>
            <Button
              href="/agent"
              className="heroBtn"
              id="explore"
              variant="secondary"
            >
              Explore more
            </Button>
            <Popup
              trigger={<Button className="heroBtn" id="btn2" variant="secondary">Register Now</Button>}
              modal
              contentStyle
              lockScroll
              overlayStyle
            >
              <AgentForm />
            </Popup>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSection;
