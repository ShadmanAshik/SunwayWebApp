import { React, useState } from "react";
import { Button, Carousel, Container } from "react-bootstrap";
import "./HeroSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
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
            <Carousel.Caption className="caurousel-caption d-none d-md-block">
              <h1>Welcome to SSG</h1>
              <p>
                SSG is one of the most innovative organizations in overseas
                education consultancy. It works to turn the dreams and personal
                ambitions of global students into a reality helping them with
                career counselling, admissions, visa processing, ticketing,
                pre-departure briefings and accommodation. We envision to be the
                most authentic and transparent consultancy and to be a pathway
                of your dream in studying abroad.
              </p>
              <Button className="heroBtn" id="explore" variant="secondary">
                Explore more
              </Button>
              <Button className="heroBtn" id="apply" variant="secondary">
                Apply
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/Slider1.JPG"
              alt="Second slide"
            />
            <Carousel.Caption className="caurousel-caption d-none d-md-block">
              <h1>World Wide Admission</h1>
              <p>
                You, the aspiring students, cherish the dream of further
                education abroad as studying abroad will give you incredible
                experiences, a new perspective, a new worldview and a new
                appreciation for other cultures and people. It is actually a
                journey to discover the new world. But almost 90% of you are not
                aware of admission procedure to reach out to success.
              </p>
              <Button className="heroBtn" id="explore" variant="secondary">
                Explore more
              </Button>
              <Button className="heroBtn" id="apply" variant="secondary">
                Apply
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/Slider1.JPG"
              alt="Third slide"
            />
            <Carousel.Caption className="caurousel-caption d-none d-md-block">
              <h1>Enrich Your Language Proficiency</h1>
              <Button className="heroBtn" id="explore" variant="secondary">
                Explore more
              </Button>
              <Button className="heroBtn" id="apply" variant="secondary">
                Apply
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/Slider1.JPG"
              alt="Forth slide"
            />
            <Carousel.Caption className="caurousel-caption d-none d-md-block">
              <h1>Develop Your Skills</h1>
              <Button className="heroBtn" id="explore" variant="secondary">
                Explore more
              </Button>
              <Button className="heroBtn" id="apply" variant="secondary">
                Apply
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/Slider1.JPG"
              alt="Fifth slide"
            />
            <Carousel.Caption className="caurousel-caption d-none d-md-block">
              <h1>Be Our Partner</h1>
              <p>
                SSG is a Global Edu-Aid platform where you can grow your
                business, no matter which country you are applying from. If you
                already have your own business setup with total communication
                system, you can apply for being a Global Business Agent with
                SSG. And you will be empowered to refer students wishing to
                study abroad and can provide them advice and assistance.
              </p>
              <Button className="heroBtn" id="explore" variant="secondary">
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
