import React from "react";
import { Container } from "react-bootstrap";
import "./HeroSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroImg = (props) => {
  return (
    <div>
      
          <img className="heroImg" src={props.imgSrc} alt="Hero Image"/>    
     
    </div>
  );
};

export default HeroImg;
