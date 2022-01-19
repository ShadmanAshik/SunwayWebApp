import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../Card/Cards";
import CommonForm from "../../Forms/CommonForm/CommonForm";

import HeroImg from "../../HeroSection/HeroImg";
import "./News.css";

const News = (props) => {
  let baseurl = props.base_url;
  return (
    <>
      <div>
        <Container>
          <HeroImg imgSrc="/static/banner1.jpg" />
          <div>
            <div class="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
              <h1 className="photoHeader">News</h1>
                <Row xs={1} sm={1} md={2} className="news-container">
                  <Col>
                    <Cards
                      imgSrc="/static/dummy.jpg"
                      title="News Title"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      btn="See More"
                    />
                  </Col>
                  <Col>
                    <Cards
                      imgSrc="/static/dummy.jpg"
                      title="News Title"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      btn="See More"
                    />
                  </Col>
                  <Col>
                    <Cards
                      imgSrc="/static/dummy.jpg"
                      title="News Title"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      btn="See More"
                    />
                  </Col>
                  <Col>
                    <Cards
                      imgSrc="/static/dummy.jpg"
                      title="News Title"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      btn="See More"
                    />
                  </Col>
                  <Col>
                    <Cards
                      imgSrc="/static/dummy.jpg"
                      title="News Title"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      btn="See More"
                    />
                  </Col>
                </Row>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
              <CommonForm base_url={baseurl} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default News;
