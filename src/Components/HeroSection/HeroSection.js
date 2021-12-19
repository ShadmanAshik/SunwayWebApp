import { React, useState } from "react";
import { Button, Carousel, Container } from "react-bootstrap";
import "./HeroSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Container>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={"5000"}
          pause="hover"
          wrap="true"
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/Slider1.JPG"
              alt="First slide"
            />
            <Carousel.Caption className="caurousel-caption ">
              <h1>Welcome to SSG</h1>
              <Button className="heroBtn" id="explore" variant="secondary" >
                Explore more
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/Slider1.JPG"
              alt="Second slide"
            />
            <Carousel.Caption className="caurousel-caption">
              <h1>World Wide Admission</h1>
              <Button className="heroBtn" id="explore" variant="secondary">
                Explore more
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/Slider1.JPG"
              alt="Third slide"
            />
            <Carousel.Caption className="caurousel-caption">
              <h1>Enrich Your Language Proficiency</h1>
              <Button className="heroBtn" id="explore" variant="secondary">
                Explore more
              </Button>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/Slider1.JPG"
              alt="Forth slide"
            />
            <Carousel.Caption className="caurousel-caption">
              <h1>Develop Your Skills</h1>
              <Button className="heroBtn" id="explore" variant="secondary">
                Explore more
              </Button>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/Slider1.JPG"
              alt="Fifth slide"
            />
            <Carousel.Caption className="caurousel-caption ">
              <h1>Be Our Partner</h1>
              <Button className="heroBtn" id="explore" variant="secondary" >
                Explore more
              </Button>
              <Button className="heroBtn" id="apply" variant="secondary">
                Apply
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default HeroSection;
