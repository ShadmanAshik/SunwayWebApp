import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


function Footer(props) {
  return (
    <>
      <div className="footer-part-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 ">
              <div className="footer-column">
                <h3 className="footer-title">Quick Links</h3>

                <Link to="/agent">Be an Agent</Link>
                <br />
                <Link to="/AdmissionForm">Admission</Link>
                <br />
                <Link to="/ScholarshipForm">Scholarship</Link>
                <br />
                <Link to="/contact">Contact Us</Link>
                <br />
                <Link to="/login">Login</Link>
                <br />
                <Link to="/login">Register</Link>
                <br />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 ">
              <div className="footer-column">
                <h3 className="footer-title">Important Links</h3>
                <a target="_blank" href="https://www.qs.com/rankings/" rel="noreferrer">
                  QS Ranking
                </a>
                <br />
                <a target="_blank" href="https://www.britishcouncil.org/" rel="noreferrer">
                  British Council
                </a>
                <br />
                <a
                  target="_blank"
                  href="https://cscuk.fcdo.gov.uk/apply/masters-scholarships/" rel="noreferrer"
                >
                  Commonwealth Scholarship
                </a>
                <br />
                <a
                  target="_blank"
                  href="https://www.cic.gc.ca/english/helpcentre/results-by-topic.asp?top=29" rel="noreferrer"
                >
                  Canada Express Entry
                </a>
                <br />
                <a
                  target="_blank"
                  href="https://www.gov.uk/browse/visas-immigration" rel="noreferrer"
                >
                  Living in UK
                </a>
                <br />
                <a
                  target="_blank"
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html" rel="noreferrer"
                >
                  Study in Canada
                </a>
                <br />
                <a
                  target="_blank"
                  href="https://bangladesh.embassy.gov.au/daca/home.html" rel="noreferrer"
                >
                  Australian High Commission
                </a>
                <br />
                <a
                  target="_blank"
                  href="https://www.internationalstudent.com/study_usa/" rel="noreferrer"
                >
                  Study in USA
                </a>
                <br />
                <a target="_blank" href="https://www.biman-airlines.com/" rel="noreferrer">
                  Bangladesh Airlines
                </a>
                <br />
                <a target="_blank" href="https://www.timeshighereducation.com/" rel="noreferrer">
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
                  Gulfeshan Plaza, Level - 12, Suit - C, 08 Shahid Sangbadik
                  Salina Parvin Sarak, Mogbazar, Dhaka-1217.
                </p>
                <a href="mailto:sunwaystudy@gmail.com">
                  <i className="far fa-envelope" id="contactIcon"></i>
                  sunwaystudy@gmail.com
                  <br />
                </a>
                <a href="mailto:info@sunwaystudygroup.com">
                  <i className="far fa-envelope" id="contactIcon"></i>
                  info@sunwaystudygroup.com
                  <br />
                  <br />
                </a>
                <a href="tel:+8809638224455">
                  <i id="contactIcon" class="fas fa-phone-alt"></i>
                  +8809638224455
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="footer-column">
                <h3 className="footer-title">Social</h3>
                <div className="fb-page">
                  <div className="btn-bk">
                      <div
                        class="fb-like"
                        data-href="https://www.facebook.com/Sunway.Study.Group/"
                        data-layout="button"
                        data-action="like"
                        data-size="large"
                        data-share="true"
                      />
                  </div>
                  <div className="social-icons-container">
                    <div className="row">
                      <div className="social-icons-container">
                        <a
                          target="_blank"
                          href="https://www.facebook.com/Sunway.Study.Group/" rel="noreferrer"
                        >
                          <img
                            className="icons"
                            src="/static/fb.png"
                            alt="fb"
                          ></img>
                        </a>

                        <a
                          target="_blank"
                          href="https://www.youtube.com/channel/UCerSddy20Rx9ic7TB9tIznw" rel="noreferrer"
                        >
                          <img
                            className="icons"
                            src="/static/youtube.png"
                            alt="youtube"
                          ></img>
                        </a>

                        <a
                          target="_blank"
                          href="https://www.instagram.com/sunway_study_group/" rel="noreferrer"
                        >
                          <img
                            className="icons"
                            src="/static/instagram.png"
                            alt="instagram"
                          ></img>
                        </a>

                        <a target="_blank" href="https://www.linkedin.com/company/sunway-study-group/" rel="noreferrer">
                          <img
                            className="icons"
                            src="/static/linkedin.png"
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
        <p class="col">
          Copyright ©2021 All rights reserved | IT Partner
          <a target="_blank" href="http://www.ositsltd.com/index.html" rel="noreferrer">
            <img className="ositimg" src="/static/osit.png" alt="osit" />
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
