import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import HeroImg from "../../HeroSection/HeroImg";
import "./VideoGallery.css";

const VideoGallery = () => {
  return (
    <>
      <div>
        <Container className="video-container">
          <HeroImg imgSrc="/img/banner1.jpg" />
          <div>
            <div class="row">
              <div class="col-lg-8 col-md-6 col-sm-12">
                <h1 className="videoHeader">Video Gallery</h1>
                <div className="listItem">
                  <div class="row">
                    <div class="col-sm-12">
                    <h2>Justin Bieber - Baby (Official Music Video) ft. Ludacris</h2>
                      <iframe
                        class="col-12"
                        width="560"
                        height="350"
                        src="https://www.youtube.com/embed/kffacxfA7G4"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div class="col-sm-12">
                      <p className="listPara">
                        Sunway Study Group (SSG) is one of the most innovative
                        organizations in overseas education consultancy. It
                        works to turn the dreams and personal ambitions of
                        global students into a reality helping them with career
                        counselling, admissions, visa processing, ticketing,
                        pre-departure briefings and accommodation. We envision
                        to be the most authentic and transparent consultancy and
                        to be a pathway of your dream in studying abroad.
                      </p>
                    </div>
                    <div class="col-sm-12">
                      <h2>Baby Shark Dance</h2>
                      <iframe
                        class="col-12"
                        width="560"
                        height="350"
                        src="https://www.youtube.com/embed/XqZsoesa55w"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div class="col-sm-12">
                      <p className="listPara">
                        Sunway Study Group (SSG) is one of the most innovative
                        organizations in overseas education consultancy. It
                        works to turn the dreams and personal ambitions of
                        global students into a reality helping them with career
                        counselling, admissions, visa processing, ticketing,
                        pre-departure briefings and accommodation. We envision
                        to be the most authentic and transparent consultancy and
                        to be a pathway of your dream in studying abroad.
                      </p>
                    </div>
                    <div class="col-sm-12">
                      <h2>Rick Astley - Never Gonna Give You Up</h2>
                      <iframe
                        class="col-12"
                        width="560"
                        height="350"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div class="col-sm-12">
                      <p className="listPara">
                        Sunway Study Group (SSG) is one of the most innovative
                        organizations in overseas education consultancy. It
                        works to turn the dreams and personal ambitions of
                        global students into a reality helping them with career
                        counselling, admissions, visa processing, ticketing,
                        pre-departure briefings and accommodation. We envision
                        to be the most authentic and transparent consultancy and
                        to be a pathway of your dream in studying abroad.
                      </p>
                    </div>
                    <div class="col-sm-12">
                      <h2>Okey</h2>
                      <iframe
                        class="col-12"
                        width="560"
                        height="350"
                        src="https://www.youtube.com/embed/BW1aX0IbZOE"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div class="col-sm-12">
                      <p className="listPara">
                        Sunway Study Group (SSG) is one of the most innovative
                        organizations in overseas education consultancy. It
                        works to turn the dreams and personal ambitions of
                        global students into a reality helping them with career
                        counselling, admissions, visa processing, ticketing,
                        pre-departure briefings and accommodation. We envision
                        to be the most authentic and transparent consultancy and
                        to be a pathway of your dream in studying abroad.
                      </p>
                    </div>
                    <div class="col-sm-12">
                      <h2>Ovuvuevuevue enyetuenwuevue ugbemugbem osas</h2>
                      <iframe
                        class="col-12"
                        width="560"
                        height="350"
                        src="https://www.youtube.com/embed/W85F-UmnbF4"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div class="col-sm-12">
                      <p className="listPara">
                        Sunway Study Group (SSG) is one of the most innovative
                        organizations in overseas education consultancy. It
                        works to turn the dreams and personal ambitions of
                        global students into a reality helping them with career
                        counselling, admissions, visa processing, ticketing,
                        pre-departure briefings and accommodation. We envision
                        to be the most authentic and transparent consultancy and
                        to be a pathway of your dream in studying abroad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default VideoGallery;