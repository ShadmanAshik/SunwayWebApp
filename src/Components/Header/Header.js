import React from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="navbar-container">
      <div className="scrwaller">
        <Marquee  className="marquee"speed="80" gradientColor={0,0,0} pauseOnHover="true">
          <i class="fas fa-plane"></i> | Admission is going on |
          <Link to="/login">
            <Button className="signinBtn" variant="outline-warning" size="sm">
              Sign In / Register
            </Button>
          </Link>
        </Marquee>
      </div>
      <Navbar className="nav" expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <Link to="/home" >
              <img className="img-logo" src="/img/logo.png" alt="logo"></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="navItem" to="/home">
                <Nav.Item id="navlink">Home</Nav.Item>
              </Link>

              <NavDropdown
                renderMenuOnMount={true}
                title={<span> About Us<i class="fas fa-angle-down"></i></span>}
                
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/about">
                    <div className="highlightItem">About Us</div>
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/whyssg">
                    <div className="highlightItem">Why SSG</div>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/mission">
                    <div className="highlightItem">Mission &amp; Vission</div>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/policy">
                    <div className="highlightItem">Policy</div>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/ourteam">
                    <div className="highlightItem">Our Team</div>
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/contact">
                    <div className="highlightItem">Contact Us</div>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                renderMenuOnMount={true}
                title={<span> Programs<i class="fas fa-angle-down"></i></span>}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/overseas">
                    <div className="highlightItem">Overseas Admission</div>
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/language">
                    <div className="highlightItem">Language Proficiency</div>
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/skilldev">
                    <div className="highlightItem">Skill Development</div>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/tuition">
                    <div className="highlightItem">Tuition Media</div>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                renderMenuOnMount={true}
                title={<span> Services<i class="fas fa-angle-down"></i></span>}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/studentCounseling">
                    <div className="highlightItem">Student Counseling</div>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/applicationProcessing">
                    <div className="highlightItem">Application Processing</div>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/visaApplication">
                    <div className="highlightItem">
                      Visa Application Assistance
                    </div>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/scholarshipSupport">
                    <div className="highlightItem">Scholarship Support</div>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/admissionSupport">
                    <div className="highlightItem">Admission Support</div>
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/studyTour">
                    <div className="highlightItem">Study Tour</div>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                renderMenuOnMount={true}
                title={<span> University<i class="fas fa-angle-down"></i></span>}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/BDUni">
                    <div className="highlightItem">Bangladeshi University</div>
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/GUni">
                    <div className="highlightItem">Global University</div>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                renderMenuOnMount={true}
                title={<span> Courses<i class="fas fa-angle-down"></i></span>}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/EnglishSpoken">
                    <div className="highlightItem">English Spoken</div>
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/CommunicativeEnglish">
                    <div className="highlightItem">Communicative English</div>
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/AcademicEnglish">
                    <div className="highlightItem">Academic English</div>
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/IELTSPreparation">
                    <div className="highlightItem">IELTS Preparation</div>
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/LanguageCourses">
                    <div className="highlightItem">Language Courses</div>
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Link
                    className="dropdownItem"
                    to="/ProfessionalGraphicDesign"
                  >
                    <div className="highlightItem">
                      Professional Graphic Design
                    </div>
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/WebDesignAndDevelopment">
                    <div className="highlightItem">
                      Web Design & Development
                    </div>
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/DigitalMarketing">
                    <div className="highlightItem">Digital Marketing</div>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                renderMenuOnMount={true}
                title={<span>News & Media<i class="fas fa-angle-down"></i></span>}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/Blog">
                    <div className="highlightItem">Blog</div>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/Events">
                    <div className="highlightItem">Events</div>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/News">
                    <div className="highlightItem">News</div>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/Offer">
                    <div className="highlightItem">Offer</div>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/PhotoGallery">
                    <div className="highlightItem">Photo Gallery</div>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/Testimonial">
                    <div className="highlightItem">Testimonial</div>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/VideoGallery">
                    <div className="highlightItem">Video Gallery</div>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                renderMenuOnMount={true}
                title={<span>Apply<i class="fas fa-angle-down"></i></span>}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/AdmissionForm">
                    <div className="highlightItem">Admission</div>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Link className="dropdownItem" to="/ScholarshipForm">
                    <div className="highlightItem">Scholarship</div>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
