import { React, useState } from "react";
import { Button, Carousel} from "react-bootstrap";
import Popup from "reactjs-popup";
import AgentForm from "../Pages/Agent/AgentForm";
import "./HeroSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginandSignup from "../Pages/LoginandSignup/LoginAndSignup";
import TutorRegForm from "../Forms/TuitionFroms/TutorRegForm";
import HireTutorForm from "../Forms/TuitionFroms/HireTutorForm";
import ApplicationForm from "../Pages/Apply/AdmissionApplicationForm/ApplicationForm"
import SkillDevForm from "../Forms/SkillDev/SkillDevForm";
import LangForm from "../Forms/LanguageForm/LangForm";


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
            src="/static/Welcome.jpg"
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
            <Popup
              className="regbtn"
              trigger={
                <Button className="heroBtn" id="btn2" variant="secondary">
                  Register Now
                </Button>
              }
              modal
              contentStyle
              lockScroll
              overlayStyle
            >
              <LoginandSignup></LoginandSignup>
            </Popup>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/static/worldwide.jpg"
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
            <Popup
              className="regbtn"
              trigger={
                <Button className="heroBtn" id="btn2" variant="secondary">
                  Register Now
                </Button>
              }
              modal
              contentStyle
              lockScroll
              overlayStyle
            >
              <ApplicationForm></ApplicationForm>
            </Popup>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/static/language.jpg"
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
            <Popup
              className="applybtn"
              trigger={
                <Button className="heroBtn" id="btn2" variant="secondary">
                  Apply Now
                </Button>
              }
              modal
              contentStyle
              lockScroll
              overlayStyle
            >
              <LangForm />
            </Popup>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/static/skills.jpg"
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
            <Popup
            className="applybtn"
              trigger={
                <Button className="heroBtn" id="btn2" variant="secondary">
                  Apply Now
                </Button>
              }
              modal
              contentStyle
              lockScroll
              overlayStyle
            >
              <SkillDevForm />
            </Popup>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/static/tuition.jpg"
            alt="Forth slide"
          />
          <Carousel.Caption className="caurousel-caption">
            <h1>Tutoring Z-Generation</h1>
            <Popup
              className="applybtn"
              trigger={
                <Button className="heroBtn" id="btn2" variant="secondary">
                  Hire a Tutor
                </Button>
              }
              modal
              contentStyle
              lockScroll
              overlayStyle
            >
              <HireTutorForm />
            </Popup>
            <Popup
              className="applybtn"
              trigger={
                <Button className="heroBtn" id="btn2" variant="secondary">
                  Become a Tutor
                </Button>
              }
              modal
              contentStyle
              lockScroll
              overlayStyle
            >
              <TutorRegForm />
            </Popup>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/static/Be-our-Global-Agent.jpg"
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
              trigger={
                <Button className="heroBtn" id="btn2" variant="secondary">
                  Register Now
                </Button>
              }
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
