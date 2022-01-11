import React from "react";
import { Container } from "react-bootstrap";
import LangForm from "./LangForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./Language.css";

const Language = () => {
  return (
    <>
      <Container>
        <HeroImg imgSrc="/img/banner1.jpg" />
        <div>
          <div className="language-container">
            <div class="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <h1>Language Proficiency</h1>
                <div>
                  <div class="row">
                    <div class=" col-sm-12">
                      <img
                        className="language-listImg"
                        src="/img/languageProficiency.jpg"
                        alt="Image"
                      />
                    </div>
                    <div class="textlanguage col-sm-12">
                      <ol>
                        <h3>Key Issues:</h3>
                        <li>
                          Language proficiency is multidimensional and entails
                          linguistic, cognitive, and socio-cultural factors.
                        </li>
                        <li>
                          As students learn a second language, they progress at
                          different rates along a continuum of predictable
                          stages.
                        </li>
                        <li>
                          <strong>CAN DO</strong> Descriptors depict what
                          students can do with language at different levels of
                          language proficiency.
                        </li>
                        <li>
                          Communicative competence involves more than linguistic
                          or grammatical competence.
                        </li>
                        <li>
                          Native languages, cultures, and life experiences are
                          resources to be tapped and provide a solid foundation
                          for learning language and content.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12 mt-5 mb-5">
                <LangForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Language;
