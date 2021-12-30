import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../../ContactForm/ContactForm";
import HeroImg from "../../HeroSection/HeroImg";
import Slider from "react-slick";
import "./Testimonial.css"

export default class ProgramSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true, //
      centerPadding: "60px",
      leftPdding: "40px",
      speed: 2000,
      slidesToShow: 2.5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 500,
      pauseOnHover: true,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    };
    
    return (
      <>
      <div>
        <Container className="testimonial-container">
          <HeroImg imgSrc="/img/banner1.jpg" />
          <div>
            <div class="row">
              <div className="sliderContainer col-lg-8 col-md-6 col-sm-12">
              <h1 className="title">Testimonials</h1>
                <Slider {...settings}>
                  <div>
                    <figure class="snip1192">
                      <blockquote>
                        Calvin: Sometimes when I'm talking with others, my words
                        can't keep up with my thoughts. I wonder why we think
                        faster than we speak. Hobbes: Probably so we can think
                        twice.{" "}
                      </blockquote>
                      <div class="author">
                        <img
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
                          alt="sq-sample1"
                        />
                        <h5>Pelican Steve</h5>
                      </div>
                    </figure>
                  </div>
                  <div>
                    <figure class="snip1192">
                      <blockquote>
                        Thank you. before I begin, I'd like everyone to notice
                        that my report is in a professional, clear plastic
                        binder...When a report looks this good, you know it'll
                        get an A. That's a tip kids. Write it down.
                      </blockquote>
                      <div class="author">
                        <img
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg"
                          alt="sq-sample24"
                        />
                        <h5>Max Conversion</h5>
                      </div>
                    </figure>
                  </div>
                  <div>
                    <figure class="snip1192">
                      <blockquote>
                        My behaviour is addictive functioning in a disease
                        process of toxic co-dependency. I need holistic healing
                        and wellness before I'll accept any responsibility for
                        my actions.
                      </blockquote>
                      <div class="author">
                        <img
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg"
                          alt="sq-sample29"
                        />
                        <h5>Eleanor Faint</h5>
                      </div>
                    </figure>
                  </div>
                  <div>
                    <figure class="snip1192">
                      <blockquote>
                        My behaviour is addictive functioning in a disease
                        process of toxic co-dependency. I need holistic healing
                        and wellness before I'll accept any responsibility for
                        my actions.
                      </blockquote>
                      <div class="author">
                        <img
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg"
                          alt="sq-sample29"
                        />
                        <h5>Eleanor Faint</h5>
                      </div>
                    </figure>
                  </div>
                </Slider>
                <Slider {...settings}>
                  <div>
                    <figure class="snip1192">
                      <blockquote>
                        Calvin: Sometimes when I'm talking with others, my words
                        can't keep up with my thoughts. I wonder why we think
                        faster than we speak. Hobbes: Probably so we can think
                        twice.{" "}
                      </blockquote>
                      <div class="author">
                        <img
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
                          alt="sq-sample1"
                        />
                        <h5>Pelican Steve</h5>
                      </div>
                    </figure>
                  </div>
                  <div>
                    <figure class="snip1192">
                      <blockquote>
                        Thank you. before I begin, I'd like everyone to notice
                        that my report is in a professional, clear plastic
                        binder...When a report looks this good, you know it'll
                        get an A. That's a tip kids. Write it down.
                      </blockquote>
                      <div class="author">
                        <img
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg"
                          alt="sq-sample24"
                        />
                        <h5>Max Conversion</h5>
                      </div>
                    </figure>
                  </div>
                  <div>
                    <figure class="snip1192">
                      <blockquote>
                        My behaviour is addictive functioning in a disease
                        process of toxic co-dependency. I need holistic healing
                        and wellness before I'll accept any responsibility for
                        my actions.
                      </blockquote>
                      <div class="author">
                        <img
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg"
                          alt="sq-sample29"
                        />
                        <h5>Eleanor Faint</h5>
                      </div>
                    </figure>
                  </div>
                  <div>
                    <figure class="snip1192">
                      <blockquote>
                        My behaviour is addictive functioning in a disease
                        process of toxic co-dependency. I need holistic healing
                        and wellness before I'll accept any responsibility for
                        my actions.
                      </blockquote>
                      <div class="author">
                        <img
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg"
                          alt="sq-sample29"
                        />
                        <h5>Eleanor Faint</h5>
                      </div>
                    </figure>
                  </div>
                </Slider>
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
  }
}
