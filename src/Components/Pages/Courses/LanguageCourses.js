import React from "react";
import { Container } from "react-bootstrap";
import CommonForm from "../../Forms/CommonForm/CommonForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./LanguageCourses.css";

const LanguageCourses = (props) => {
  let baseurl = props.base_url;
  return (
    <>
      <div>
        <Container>
          <HeroImg imgSrc="/static/banner1.jpg" />
          <div>
            <div class="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <h1 className="renovation">Renovation in progress...</h1>
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

export default LanguageCourses;
