import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import EventCards from "../../Card/EventCards.js";

import ContactForm from "../../ContactForm/ContactForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./Events.css";

const Events = () => {
  return (
    <>
      <div>
        <Container>
          <HeroImg imgSrc="/img/banner1.jpg" />
          <div>
            <div class="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <h1 className="photoHeader">Events</h1>
                <Row xs={1} sm={1} md={2} className="news-container">
                  <Col>
                    <EventCards
                      imgSrc="/img/dummy.jpg"
                      // title="Event Detail"
                      text="Event Detail"
                    />
                  </Col>
                  <Col>
                    <EventCards imgSrc="/img/dummy.jpg" text="Event Detail" />
                  </Col>
                  <Col>
                    <EventCards imgSrc="/img/dummy.jpg" text="Event Detail" />
                  </Col>
                  <Col>
                    <EventCards imgSrc="/img/dummy.jpg" text="Event Detail" />
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

export default Events;
