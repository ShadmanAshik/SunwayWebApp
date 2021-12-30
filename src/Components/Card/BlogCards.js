import React from "react";
import { Button, Card } from "react-bootstrap";
import "./BlogCards.css"

const BlogCards = (props) => {
  return (
    <div className="BlogCard-containter">
      <Card style={{ width: "100%" }}>
        <div className="row">
          <Card.Body className="col-8 m-2">
            <Card.Title className="cardtitleBlog">{props.title}</Card.Title>
            <Card.Text className="cardTextBlog">
              {props.text}
            </Card.Text>
            <Button variant="primary">{props.btn}</Button>
          </Card.Body>
          <Card.Img className="cardImgBlog col" variant="left" src={props.imgSrc} alt="Card Image" />
        </div>
      </Card>
    </div>
  );
};

export default BlogCards;
