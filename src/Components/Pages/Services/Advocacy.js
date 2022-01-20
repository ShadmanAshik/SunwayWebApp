import React from "react";
import { Container } from "react-bootstrap";
import CommonForm from "../../Forms/CommonForm/CommonForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./Advocacy.css";

const Advocacy = (props) => {
  let base_url = props.base_url;
  return (
    <>
      <Container>
        <HeroImg imgSrc="/static/banner1.jpg" />
        <div>
          <div className="advocacy-container">
            <div class="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <h1>Advocacy</h1>
                <div>
                  <div class="row">
                    <div class=" col-sm-12">
                      <img
                        className="advocacy-listImg"
                        src="/static/Advocacy.png"
                        alt="Image"
                      />
                    </div>
                    <div class="col-sm-12">
                      <p className="advocacy-listPara">
                        Renovation on progress.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
              <CommonForm base_url={base_url} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Advocacy;
