import React from "react";
import { Container } from "react-bootstrap";
import CommonForm from "../../Forms/CommonForm/CommonForm";

import HeroImg from "../../HeroSection/HeroImg";
import "./BangladeshUniversity.css";

function BangladeshUniversity(props) {
  let base_url = props.base_url;
  return (
    <div>
      <div>
        <Container>
          <HeroImg imgSrc="/static/banner1.jpg" />
          <div>
            <div class="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <h1 className="renovation">Renovation in progress...</h1>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
              <CommonForm base_url={base_url} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default BangladeshUniversity;
