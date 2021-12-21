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

                  <NavDropdown title="About Us" id="basic-nav-dropdown" >
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/about">
                        About Us 
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/whyssg">
                        Why SSG
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/mission">
                        Mission &amp; Vission
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/policy">
                        Policy
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/ourteam">
                        Our Team
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/contact">
                        Contact Us
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Programs" id="basic-nav-dropdown">
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/overseas">
                        Overseas Admission
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/language">
                        Student Counselling
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/language">
                        Application Processing
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/language">
                        Visa Application Assistance
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/language">
                        Scholarship Assistance
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/language">
                        Language Courses
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/skilldev">
                        Skill Development
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="University" id="basic-nav-dropdown">
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/BDUni">
                        Bangladeshi University
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/GUni">
                        Global University
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Courses" id="basic-nav-dropdown">
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/EnglishSpoken">
                        English Spoken
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/CommunicativeEnglish">
                        Communicative English
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/AcademicEnglish">
                        Academic English
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/IELTSPreparation">
                        IELTS Preparation
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/LanguageCourses">
                        Language Courses
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="dropdownItem">
                      <Link
                        className="dropdownItem"
                        to="/ProfessionalGraphicDesign"
                      >
                        Professional Graphic Design
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="dropdownItem">
                      <Link
                        className="dropdownItem"
                        to="/WebDesignAndDevelopment"
                      >
                        Web Design & Development
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/DigitalMarketing">
                        Digital Marketing
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="News & Media" id="basic-nav-dropdown">
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/Blog">
                        Blog
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/Events">
                        Events
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/News">
                        News
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/Offer">
                        Offer
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/PhotoGallery">
                        Photo Gallery
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/Testimonial">
                        Testimonial
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/VideoGallery">
                        Video Gallery
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Apply" id="basic-nav-dropdown">
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/AdmissionForm">
                        Admission
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdownItem">
                      <Link className="dropdownItem" to="/ScholarshipForm">
                        Scholarship
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.3"
                    >
                      Legal Support
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
