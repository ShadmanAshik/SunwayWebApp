import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Cards.css"

const PhotoCards = (props) => {
  return (
    <div className="card-containter">
      <Card style={{ width: "90%" }}>
        <Card.Img className="cardImg" variant="top" src={props.imgSrc} alt="Card Image" />
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

export default PhotoCards;