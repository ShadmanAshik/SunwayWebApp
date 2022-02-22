import React from "react";
import { Button, Card } from "react-bootstrap";
import "./ProductCards.css";
import Popup from "reactjs-popup";

const Cards = (props) => {
  return (
    <div className="card-containter">
      <Card style={{ width: "95%" }}>
        <Card.Img
          className="cardImg"
          variant="top"
          src={props.imgSrc}
          alt="Card Image"
        />
        <Card.Body>
          <Card.Title className="cardtitle">{props.title}</Card.Title>
          <Card.Text className="cardText">{props.text}</Card.Text>
          <Popup
            className="productbtn"
            trigger={<Button variant="primary">{props.btn}</Button>}
            modal
            contentStyle
            lockScroll
            overlayStyle
          >
            <img className="productImage" src={props.link} />
          </Popup>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Popup
            className="buybtn"
            trigger={<Button variant="primary">{props.btn2}</Button>}
            modal
            contentStyle
            lockScroll
            overlayStyle
          >
            <div>
              <p className="buydetails">
                buy this for the lkfjsdlkjfklsdfklsdjflksjflksdjlkfjlsdjflksdjkprice
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quos! Aliquid porro quos voluptatem deleniti veritatis dolore, hic aspernatur nulla molestias perspiciatis iusto, nobis fugiat vero dolorum, modi deserunt blanditiis placeat similique qui facilis eaque fuga. Error et unde quaerat quia expedita voluptas quasi cum officiis debitis, totam laboriosam. A? {props.price}
              </p>
            </div>
          </Popup>

        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
