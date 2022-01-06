import React from "react";
import { Card } from "react-bootstrap";
import "./PhotoCards.css"

const PhotoCards = (props) => {
  return (
    <div className="photo-card-containter">
      <Card style={{ width: "90%" }}>
        <Card.Img className="photo-cardImg" variant="top" src={props.imgSrc} alt="Card Image" />
        <Card.Body>
          
          <Card.Text className="photo-cardText">
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PhotoCards;