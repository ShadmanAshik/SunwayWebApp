import React from "react";
import "./Header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutUS from "../Pages/AboutUs/AboutUS";
import Overseas from "../Pages/Programs/Overseas";
import Language from "../Pages/Programs/Language";
import SkillDev from "../Pages/Programs/SkillDevelopment";
import BDUni from "../Pages/University/BangladeshUniversity";
import GUni from "../Pages/University/GlobalUniversity";
import WebDesignAndDevelopment from "../Pages/Courses/WebDesignAndDevelopment";
import ProfessionalGraphicDesign from "../Pages/Courses/ProfessionalGraphicDesign";

import LanguageCourses from "../Pages/Courses/LanguageCourses";
import IELTSPreparation from "../Pages/Courses/IELTSPreparation";
import EnglishSpoken from "../Pages/Courses/EnglishSpoken";
import DigitalMarketing from "../Pages/Courses/DigitalMarketing";
import CommunicativeEnglish from "../Pages/Courses/CommunicativeEnglish";
import AcademicEnglish from "../Pages/Courses/AcademicEnglish";

import Testimonial from "../Pages/NewsAndMedia/Testimonial";
import VideoGallery from "../Pages/NewsAndMedia/VideoGallery";
import PhotoGallery from "../Pages/NewsAndMedia/PhotoGallery";
import Events from "../Pages/NewsAndMedia/Events";
import Offer from "../Pages/NewsAndMedia/Offer";
import News from "../Pages/NewsAndMedia/News";
import Blog from "../Pages/NewsAndMedia/Blog";

import WhySSG from "../Pages/AboutUs/WhySSG";
import Mission from "../Pages/AboutUs/Mission";
import OurTeam from "../Pages/AboutUs/OurTeam";
import Policy from "../Pages/AboutUs/Policy";
import ContactUs from "../Pages/AboutUs/ContactUs";
import LoginAndSignup from "../Pages/LoginandSignup/LoginAndSignup";
import Application from "../Pages/Apply/AdmissionApplicationForm/Application";
import ApplyScholarship from "../Pages/Apply/ScholarshipApplicationForm/ApplyScholarship";

const Header = () => {
  return (
    <div className="navbar-container">
      <div className="scrwaller">
        <marquee scrollamount="10" hspace="10%">
          Admission is going on
        </marquee>
      </div>
      <BrowserRouter>
        <div>
          <Navbar className="nav" expand="lg">
            <Container>
              <Navbar.Brand href="/home">
                <Link to="/home">
                  <img
                    className="img-logo"
                    src="/img/logo.png"
                    alt="logo"
                  ></img>
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
                    title="About Us"
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
                        <div className="highlightItem">
                          Mission &amp; Vission
                        </div>
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
                    title="Programs"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/overseas">
                        <div className="highlightItem">Overseas Admission</div>
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/language">
                        <div className="highlightItem">Student Counselling</div>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/language">
                        <div className="highlightItem">
                          Application Processing
                        </div>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/language">
                        <div className="highlightItem">
                          Visa Application Assistance
                        </div>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/language">
                        <div className="highlightItem">
                          Scholarship Assistance
                        </div>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/language">
                        <div className="highlightItem">Language Courses</div>
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/skilldev">
                        <div className="highlightItem">Skill Development</div>
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    renderMenuOnMount={true}
                    title="University"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/BDUni">
                        <div className="highlightItem">
                          Bangladeshi University
                        </div>
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
                    title="Courses"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/EnglishSpoken">
                        <div className="highlightItem">English Spoken</div>
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/CommunicativeEnglish">
                        <div className="highlightItem">
                          Communicative English
                        </div>
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/AcademicEnglish">
                        <div className="highlightItem">Academic English</div>
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/IELTSPreparation">
                        <div>IELTS Preparation</div>
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
                      <Link
                        className="dropdownItem"
                        to="/WebDesignAndDevelopment"
                      >
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
                    title="News & Media"
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
                        <div className="highlightItem" >Offer</div>
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
                    title="Apply"
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
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.3"
                    >
                      <div className="highlightItem">Legal Support</div>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Link className="navItem" to="/login">
                    <Nav.Item id="navlink">Sign In</Nav.Item>
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="home" element={<Home />} />
          <Route exact path="about" element={<AboutUS />} />
          <Route exact path="whyssg" element={<WhySSG />} />
          <Route exact path="mission" element={<Mission />} />
          <Route exact path="ourteam" element={<OurTeam />} />
          <Route exact path="policy" element={<Policy />} />
          <Route exact path="contact" element={<ContactUs />} />
          <Route exact path="login" element={<LoginAndSignup />} />
          <Route exact path="overseas" element={<Overseas />} />
          <Route exact path="language" element={<Language />} />
          <Route exact path="skilldev" element={<SkillDev />} />
          <Route exact path="BDUni" element={<BDUni />} />
          <Route exact path="GUni" element={<GUni />} />
          <Route
            exact
            path="WebDesignAndDevelopment"
            element={<WebDesignAndDevelopment />}
          />
          <Route
            exact
            path="ProfessionalGraphicDesign"
            element={<ProfessionalGraphicDesign />}
          />
          <Route exact path="LanguageCourses" element={<LanguageCourses />} />
          <Route exact path="IELTSPreparation" element={<IELTSPreparation />} />
          <Route exact path="EnglishSpoken" element={<EnglishSpoken />} />
          <Route exact path="DigitalMarketing" element={<DigitalMarketing />} />
          <Route
            exact
            path="CommunicativeEnglish"
            element={<CommunicativeEnglish />}
          />
          <Route exact path="AcademicEnglish" element={<AcademicEnglish />} />
          <Route exact path="Testimonial" element={<Testimonial />} />
          <Route exact path="VideoGallery" element={<VideoGallery />} />
          <Route exact path="PhotoGallery" element={<PhotoGallery />} />
          <Route exact path="Events" element={<Events />} />
          <Route exact path="Offer" element={<Offer />} />
          <Route exact path="News" element={<News />} />
          <Route exact path="Blog" element={<Blog />} />
          <Route exact path="AdmissionForm" element={<Application />} />
          <Route exact path="ScholarshipForm" element={<ApplyScholarship />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Header;
