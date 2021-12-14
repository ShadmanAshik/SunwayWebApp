import React from "react";
import "./Footer.css";
import { BrowserRouter, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Footer() {
  return (
    <>
      <BrowserRouter>
        <div className="footer-part-1">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-15 ">
                <h3 class="footer-title">Be Our Partner</h3>
                <a href="/">Global Business Partner</a><br />
                <a href="/">Bangladeshi Business Partner</a><br />
                <a href="/">Bangladeshi Individual Partner</a>
                <br />
              </div>
              <div class="col-md-2 col-sm-15 ">
                <h3 class="footer-title">About Us</h3>
                <a href="/">About SSG</a>
                <br />
                <a href="/">Why SSG</a>
                <br />
                <a href="/">Misson</a>
                <br />
                <a href="/">Vision</a>
                <br />
                <a href="/">Our Team</a>
                <br />
                <a href="/">Quality Policy</a>
                <br />
                <a href="/">Privacy Policy</a>
                <br />
              </div>
              <div class="col-md-3 col-sm-15 ">
                <h3 class="footer-title">Important Links</h3>
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
              <div class="col-md-2 col-sm-15">
                <h3 class="footer-title">Address</h3>
                <p>
                  <i class="far fa-building" id="contactIcon"></i>
                  Plaza, Level - 12, Suit - C,
                  08 Shahid Sangbadik Salina Parvin Sarak,
                  Mogbazar, Dhaka-1217.
                </p>
                <p>
                  <i class="far fa-envelope" id="contactIcon"></i>
                  info@educationhub-bd.com
                  <br />
                </p>
                <p>
                  <i class="fas fa-phone-alt" id="contactIcon"></i>
                  +8801721764149
                </p>
              </div>
              <div class="col-md-2 col-sm-15">
                <h3 class="footer-title">Social</h3>
                <a href="/">
                  <i class="fab fa-facebook"></i>Facebook
                </a>
                <br />
                <a href="/">
                  <i class="fab fa-youtube"></i>Youtube
                </a>
                <br />
                <a href="/">
                  <i class="fab fa-twitter"></i>Twitter
                </a>
                <br />

                <a href="/">
                  <i class="fab fa-linkedin"></i>LinkedIn
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div class="footer-2">
          <p>Copyright ©2021 All rights reserved |</p>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Footer;
