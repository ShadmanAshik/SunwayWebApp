import React from "react";
import "./Header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="navbar-container">
      <div className="scrwaller">
        <div className="marqueeContainer">
          <div className="row" id="head">
            <div className="socials col-lg-4 col-md-6">
              <div className="iconContainer">
                <a
                  target="_blank"
                  href="https://www.facebook.com/Sunway.Study.Group/"
                >
                  <img
                    className="headerIcons"
                    src="/static/fb.png"
                    alt="fb"
                  ></img>
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCerSddy20Rx9ic7TB9tIznw"
                >
                  <img
                    className="headerIcons"
                    src="/static/youtube.png"
                    alt="fb"
                  ></img>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/sunway_study_group/"
                >
                  <img
                    className="headerIcons"
                    src="/static/instagram.png"
                    alt="fb"
                  ></img>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/sunway-study-group/"
                >
                  <img
                    className="headerIcons"
                    src="/static/linkedin.png"
                    alt="fb"
                  ></img>
                </a>

                <a href="tel:+8809638224455">
                  <i class="phonicn fas fa-phone-alt"></i>
                </a>
                <a href="tel:+8809638224455">
                  <p className="HeaderNo">+8809638224455</p>
                </a>
              </div>
            </div>
            <div className="marque col-lg-6 col-md-3">
              <Marquee
                className="marquee"
                speed="80"
                gradientColor={(0, 0, 0)}
                pauseOnHover="true"
              >
                <i class="fas fa-plane"></i> Admission is going on
              </Marquee>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="login row">
                <div className="loginicn">
                  <Link to="/login">
                    <i class="fas fa-user-circle"></i>
                  </Link>
                </div>
                <div className="headerLink">
                  <Link to="/login" className="headerLink">
                    Login/Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navbar collapseOnSelect className="nav" expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <Link to="/home">
              <img className="img-logo" src="/static/logo.png" alt="logo"></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link className="navItem" id="navlink" eventKey="1" as={Link} to="/home">
                  Home
                </Nav.Link>
              </Nav.Item>

              <NavDropdown
                renderMenuOnMount={true}
                title={
                  <span>
                    {" "}
                    About Us<i class="fas fa-angle-down"></i>
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/about">
                    <div className="highlightItem">About SSG</div>
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/whyssg">
                    <div className="highlightItem">Why SSG</div>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/mission">
                    <div className="highlightItem">Mission &amp; Vission</div>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/policy">
                    <div className="highlightItem">Policy</div>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/ourteam">
                    <div className="highlightItem">Our Team</div>
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/contact">
                    <div className="highlightItem">Contact Us</div>
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                renderMenuOnMount={true}
                title={
                  <span>
                    {" "}
                    Programs<i class="fas fa-angle-down"></i>
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/overseas">
                    <div className="highlightItem">Overseas Admission</div>
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/language">
                    <div className="highlightItem">Language Proficiency</div>
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/skilldev">
                    <div className="highlightItem">Skill Development</div>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link}className="dropdownItem" to="/tuition">
                    <div className="highlightItem">Tuition Media</div>
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                renderMenuOnMount={true}
                title={
                  <span>
                    {" "}
                    Services<i class="fas fa-angle-down"></i>
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/studentCounseling">
                    <div className="highlightItem">Student Counselling</div>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/applicationProcessing">
                    <div className="highlightItem">Application Processing</div>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/visaApplication">
                    <div className="highlightItem">
                      Visa Application Assistance
                    </div>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link}className="dropdownItem" to="/scholarshipSupport">
                    <div className="highlightItem">Scholarship Support</div>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/admissionSupport">
                    <div className="highlightItem">Admission Support</div>
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/studyTour">
                    <div className="highlightItem">Study Tour</div>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/advocacy">
                    <div className="highlightItem">Advocacy</div>
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                renderMenuOnMount={true}
                title={
                  <span>
                    {" "}
                    University<i class="fas fa-angle-down"></i>
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/BDUni">
                    <div className="highlightItem">Bangladeshi University</div>
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/GUni">
                    <div className="highlightItem">Global University</div>
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                renderMenuOnMount={true}
                title={
                  <span>
                    {" "}
                    Courses<i class="fas fa-angle-down"></i>
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/EnglishSpoken">
                    <div className="highlightItem">English Spoken</div>
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/CommunicativeEnglish">
                    <div className="highlightItem">Communicative English</div>
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/AcademicEnglish">
                    <div className="highlightItem">Academic English</div>
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/IELTSPreparation">
                    <div className="highlightItem">IELTS Preparation</div>
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/LanguageCourses">
                    <div className="highlightItem">Language Courses</div>
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link}
                    className="dropdownItem"
                    to="/ProfessionalGraphicDesign"
                  >
                    <div className="highlightItem">
                      Professional Graphic Design
                    </div>
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/WebDesignAndDevelopment">
                    <div className="highlightItem">
                      Web Design & Development
                    </div>
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/DigitalMarketing">
                    <div className="highlightItem">Digital Marketing</div>
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                renderMenuOnMount={true}
                title={
                  <span>
                    News & Media<i class="fas fa-angle-down"></i>
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/Blog">
                    <div className="highlightItem">Blog</div>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/Events">
                    <div className="highlightItem">Events</div>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/News">
                    <div className="highlightItem">News</div>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/Offer">
                    <div className="highlightItem">Offer</div>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/PhotoGallery">
                    <div className="highlightItem">Photo Gallery</div>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/Testimonial">
                    <div className="highlightItem">Testimonial</div>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/VideoGallery">
                    <div className="highlightItem">Video Gallery</div>
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                renderMenuOnMount={true}
                title={
                  <span>
                    Apply<i class="fas fa-angle-down"></i>
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/AdmissionForm">
                    <div className="highlightItem">Admission</div>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdownItem">
                  <Nav.Link eventKey="1"  as={Link} className="dropdownItem" to="/ScholarshipForm">
                    <div className="highlightItem">Scholarship</div>
                  </Nav.Link>
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
