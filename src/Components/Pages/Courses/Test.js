import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CommonForm from "../../Forms/CommonForm/CommonForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./AcademicEnglish.css";

const Test = (props) => {
  let base_url = props.base_url;
  useEffect(() => {
    viewPost();
  }, []);

  const [ispost, setpost] = useState([]);
  const viewPost = () => {
    axios
      .get("http://127.0.0.1:8000/editor/post/", )
      .then((response) => {
        console.log("==> response: ", response);
        setpost(response.data);
      })
      .catch((errors) => {
        console.log("===> errors: ", errors);
      });

  };
  return (
    <>
      <div>
        <Container>
          <HeroImg imgSrc="/static/banner1.jpg" />
          <div>
            <div class="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <h1>
                  {" "}
                  BOKA <span> CHODA </span> text editor{" "}
                </h1>

                {ispost.map((item, index) => (
                  <div className="post__list" key={index}>
                    <h2>{item.title}</h2>

                    <div
                      className="post__description"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    <Link to={`/Edit/${item.id}`} className="btn btn__theme">
                      {" "}
                      Edit{" "}
                    </Link>
                  </div>
                ))}
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

export default Test;
