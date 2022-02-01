import React from "react";
import { Container } from "react-bootstrap";
import HeroImg from "../../../HeroSection/HeroImg";
import "./Application.css";
import ApplicationForm from "./ApplicationForm";

function Application(props) {
  // const [isSubmitted, setIsSubmitted] = useState(false);

let base_url=props.base_url;
console.log("base_url",base_url);
  return (
    <>
      <Container>
        <HeroImg imgSrc="static/banner1.jpg" />
        <div className="ApplicationForm">
          <ApplicationForm base_url={base_url}/>
        </div>
      </Container>
    </>
  );
}
export default Application;
