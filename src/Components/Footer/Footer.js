import React from "react";
import "./Footer.css";
import { BrowserRouter, Link } from "react-router-dom";
import AboutUS from "../../Components/Pages/AboutUs/AboutUS";

function Footer() {
  return (
    <>
      <BrowserRouter>
        <div className="footer-part-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12 ">
                <div className="footer-column">
                  <h3 className="footer-title">Be Our Partner</h3>
                  <a href="/">Global Business Partner</a>
                  <br />
                  <a href="/">Bangladeshi Business Partner</a>
                  <br />
                  <a href="/">Bangladeshi Individual Partner</a>
                  <br />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 ">
                <div className="footer-column">
                  <h3 className="footer-title">Important Links</h3>
                  <a href="https://www.qs.com/rankings/">QS Ranking</a>
                  <br />
                  <a href="https://www.britishcouncil.org/">British Council</a>
                  <br />
                  <a href="https://cscuk.fcdo.gov.uk/apply/masters-scholarships/">
                    Commonwealth Scholarship
                  </a>
                  <br />
                  <a href="https://www.cic.gc.ca/english/helpcentre/results-by-topic.asp?top=29">
                    Canada Express Entry
                  </a>
                  <br />
                  <a href="https://www.gov.uk/browse/visas-immigration">
                    Living in UK
                  </a>
                  <br />
                  <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html">
                    Study in Canada
                  </a>
                  <br />
                  <a href="https://bangladesh.embassy.gov.au/daca/home.html">
                    Australian High Commission
                  </a>
                  <br />
                  <a href="https://www.internationalstudent.com/study_usa/">
                    Study in USA
                  </a>
                  <br />
                  <a href="https://www.biman-airlines.com/">
                    Bangladesh Airlines
                  </a>
                  <br />
                  <a href="https://www.timeshighereducation.com/">
                    Times Higher Education
                  </a>
                  <br />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="footer-column">
                  <h3 className="footer-title">Address</h3>
                  <p>
                    <i className="far fa-building" id="contactIcon"></i>
                    Plaza, Level - 12, Suit - C, 08 Shahid Sangbadik Salina
                    Parvin Sarak, Mogbazar, Dhaka-1217.
                  </p>
                  <p>
                    <i className="far fa-envelope" id="contactIcon"></i>
                    info@educationhub-bd.com
                    <br />
                  </p>
                  <p>
                    <i className="fas fa-phone-alt" id="contactIcon"></i>
                    +8801721764149
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="footer-column">
                  <h3 className="footer-title">Social</h3>
                  <div className="fb-page">
                    <div className="btn-bk">
                      <div className="fb-btn">
                        <div
                          class="fb-like"
                          data-href="https://www.facebook.com/Sunway-Study-Group-104714155413603"
                          data-width=""
                          data-layout="button"
                          data-action="like"
                          data-size="large"
                          data-share="true"
                        ></div>
                      </div>
                    </div>
                    <div className="social-icons-container">
                      <div className="row">
                        <div className="col-sm-3">
                          <a href="https://www.facebook.com/Sunway-Study-Group-103946112131280">
                            <img
                              className="icons"
                              src="/img/icons/fb.png"
                              alt="fb"
                            ></img>
                          </a>
                        </div>
                        <div className="col-sm-3">
                          <a href="">
                            <img
                              className="icons"
                              src="/img/icons/yt.png"
                              alt="linkedin"
                            ></img>
                          </a>
                        </div>
                        <div className="col-sm-3">
                          <a href="">
                            <img
                              className="icons"
                              src="/img/icons/twitter.png"
                              alt="twitter"
                            ></img>
                          </a>
                        </div>
                        <div className="col-sm-3">
                          <a href="">
                            <img
                              className="icons"
                              src="/img/icons/linkedin.png"
                              alt="linkedin"
                            ></img>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-2">
          <p>Copyright ©2021 All rights reserved |</p>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Footer;
