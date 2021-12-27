import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../Card/Cards";
import ContactForm from "../../ContactForm/ContactForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./News.css";

const News = () => {
  return (
    <>
      <div>
        <Container>
          <HeroImg imgSrc="/img/banner1.jpg" />
          <div>
            <div class="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
              <h1 className="photoHeader">News</h1>
                <Row xs={1} sm={1} md={2} className="news-container">
                  <Col>
                    <Cards
                      imgSrc="/img/dummy.jpg"
                      title="News Title"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      btn="See More"
                    />
                  </Col>
                  <Col>
                    <Cards
                      imgSrc="/img/dummy.jpg"
                      title="News Title"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      btn="See More"
                    />
                  </Col>
                  <Col>
                    <Cards
                      imgSrc="/img/dummy.jpg"
                      title="News Title"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      btn="See More"
                    />
                  </Col>
                  <Col>
                    <Cards
                      imgSrc="/img/dummy.jpg"
                      title="News Title"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      btn="See More"
                    />
                  </Col>
                  <Col>
                    <Cards
                      imgSrc="/img/dummy.jpg"
                      title="News Title"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      btn="See More"
                    />
                  </Col>
                </Row>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default News;
