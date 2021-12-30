import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PhotoCards from "../../Card/PhotoCards.js";

import ContactForm from "../../ContactForm/ContactForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./PhotoGallery.css";

const PhotoGallery = () => {
  return (
    <>
      <div>
        <Container>
          <HeroImg imgSrc="/img/banner1.jpg" />
          <div>
            <div class="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <h1 className="photoHeader">Photo Gallery</h1>
                <Row xs={1} sm={1} md={3} className="news-container">
                  <Col>
                    <PhotoCards
                      imgSrc="/img/dummy.jpg"
                      // title="Photo Title"
                      text="Photo Title"
                    />
                  </Col>
                  <Col>
                    <PhotoCards imgSrc="/img/dummy.jpg" text="Photo Title" />
                  </Col>
                  <Col>
                    <PhotoCards imgSrc="/img/dummy.jpg" text="Photo Title" />
                  </Col>
                  <Col>
                    <PhotoCards imgSrc="/img/dummy.jpg" text="Photo Title" />
                  </Col>
                  <Col>
                    <PhotoCards imgSrc="/img/dummy.jpg" text="Photo Title" />
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

export default PhotoGallery;
