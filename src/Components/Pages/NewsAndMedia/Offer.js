import React from "react";
import { Container } from "react-bootstrap";
import HeroImg from "../../HeroSection/HeroImg";
import "./Offer.css";
import Cards from "../../Card/OfferCards";
import CommonForm from "../../Forms/CommonForm/CommonForm";

const Offer = (props) => {
  let base_url = props.base_url;
  return (
    <>
      <div>
      <Container>
        <HeroImg imgSrc="/img/banner1.jpg" />
        <div>
          <div class="row">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <div className="Offer-container">
                <h1>Offers</h1>
                <div className="OfferItems">
                  <Cards
                  imgSrc="/static/dummy.jpg"
                  title="Nam, quis magnam"
                  text="Lorem ipsum dolor sit, amet esse facilis laboriosam, quisquam fuga temporibus alias neque soluta excepturi minus? Nam, quis magnam itaque doloribus sit facilis officia quasi accusamus praesentium vitae."
                  btn="Read More"></Cards>
                  <Cards
                  imgSrc="/static/dummy.jpg"
                  title="Similique quos itaque"
                  text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quos itaque pariatur perspiciatis. A placeat totam sint fugiat enim voluptates, deleniti maxime illum voluptatibus natus modi ducimus esse facilis laboriosam, quisquam fuga temporibus alias neque soluta excepturi minus? Nam, quis magnam itaque doloribus sit facilis officia quasi accusamus praesentium vitae."
                  btn="Read More"></Cards>
                  <Cards
                  imgSrc="/static/dummy.jpg"
                  title="Conoribus alias"
                  text="Lorem ipsum dolor sit, amet conoribus alias neque soluta excepturi minus? Nam, quis magnam itaque doloribus sit facilis officia quasi accusamus praesentium vitae."
                  btn="Read More"></Cards>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <CommonForm base_url={base_url} />
            </div>
          </div>
        </div>
      </Container>
    </div>
    </>
  );
};

export default Offer;