import React from "react";
import { Container } from "react-bootstrap";

import HeroImg from "../../HeroSection/HeroImg";
import "./Blog.css";
import Cards from "../../Card/BlogCards";
import CommonForm from "../../Forms/CommonForm/CommonForm";

const Blog = (props) => {
  let baseurl = props.base_url;
  return (
    <>
      <div>
        <Container>
          <HeroImg imgSrc="/static/banner1.jpg" />
          <div>
            <div class="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <div className="blog-container">
                  <h1>Blog</h1>
                  <div className="BlogItems">
                    <Cards
                      imgSrc="/static/dummy.jpg"
                      title="A placeat totam"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quos itaque pariatur perspiciatis. A placeat totam sint fugiat enim voluptates, deleniti maxime illum voluptatibus natus modi ducimus esse facilis laboriosam, quisquam fuga temporibus alias neque soluta excepturi minus? Nam, quis magnam itaque doloribus sit facilis officia quasi accusamus praesentium vitae."
                      btn="Read More"
                    ></Cards>
                    <Cards
                      imgSrc="/static/dummy.jpg"
                      title="Lorem ipsum dolor"
                      text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quos itaque pariatur perspiciatis. A placeat totam sint fugiat enim voluptates, deleniti maxime illum voluptatibus nodi ducimus esse facilis laboriosam, quisquam fuga temporibus alias neque soluta excepturi minus? Nam, quis magnam itaque doloribus sit facilis officia quasi accusamus praesentium vitae."
                      btn="Read More"
                    ></Cards>
                    <Cards
                      imgSrc="/static/dummy.jpg"
                      title="Nam, quis magnam"
                      text="Lorem ipsum dolor sit, amet esse facilis laboriosam, quisquam fuga temporibus alias neque soluta excepturi minus? Nam, quis magnam itaque doloribus sit facilis officia quasi accusamus praesentium vitae."
                      btn="Read More"
                    ></Cards>
                    <Cards
                      imgSrc="/static/dummy.jpg"
                      title="Similique quos itaque"
                      text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quos itaque pariatur perspiciatis. A placeat totam sint fugiat enim voluptates, deleniti maxime illum voluptatibus natus modi ducimus esse facilis laboriosam, quisquam fuga temporibus alias neque soluta excepturi minus? Nam, quis magnam itaque doloribus sit facilis officia quasi accusamus praesentium vitae."
                      btn="Read More"
                    ></Cards>
                    <Cards
                      imgSrc="/static/dummy.jpg"
                      title="Conoribus alias"
                      text="Lorem ipsum dolor sit, amet conoribus alias neque soluta excepturi minus? Nam, quis magnam itaque doloribus sit facilis officia quasi accusamus praesentium vitae."
                      btn="Read More"
                    ></Cards>
                  </div>
                </div>
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

export default Blog;
