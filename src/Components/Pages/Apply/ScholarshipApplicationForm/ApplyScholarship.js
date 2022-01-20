import React from "react";
import { Container } from "react-bootstrap";
import ScholarshipForm from "../../../Forms/ScholarshipApplication/ScholarshipForm";
import HeroImg from "../../../HeroSection/HeroImg";
import "./ScholarshipForm.css";


export const ApplyScholarship = (props) => {
  let base_url=props.base_url;
  return (
    <>
      <Container>
        <HeroImg imgSrc="/img/banner1.jpg" />
        <div className="ScholarshipForm">
          <ScholarshipForm base_url={base_url}/>
        </div>
      </Container>
    </>
  );
};
export default ApplyScholarship;
