import React from "react";
import { Button, Card } from "react-bootstrap";
import "./EventCards.css"
import {Link} from "react-router-dom";
const EventCards = (props) => {
  return (
    <div className="event-card-containter">
      <Card style={{ width: "90%" }}>
        <Link to="/">
          <Card.Img className="event-cardImg" variant="top" src={props.imgSrc} alt="Card Image" />
        </Link>
        <Card.Body>
            {/* <Card.Title className="cardtitle">{props.title}</Card.Title> */}
            <Card.Text className="cardText">
              {props.text}
            </Card.Text>
          </Card.Body>
      </Card>
    </div>
  );
};

export default EventCards;