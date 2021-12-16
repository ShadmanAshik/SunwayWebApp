import React from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutUS from "../Pages/AboutUs/AboutUS";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/SignUp";
import WhySSG from "../Pages/AboutUs/WhySSG";
import Mission from "../Pages/AboutUs/Mission";
import OurTeam from "../Pages/AboutUs/OurTeam";
import Policy from "../Pages/AboutUs/Policy";
import ContactUs from "../Pages/AboutUs/ContactUs";

const Header = () => {
  return (
    <div>
      <div className="scrwaller">
        <marquee scrollamount="10" hspace="15%">
          Admision is going on
        </marquee>
      </div>
      <BrowserRouter>
        <div>
          <Navbar className="nav" expand="lg">
            <Container>
              <Navbar.Brand href="/home">
                <h1 className="logo">SSG</h1>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Link className="navItem" to="/home">
                    <Nav.Item id="navlink">Home</Nav.Item>
                  </Link>

                  <NavDropdown title="About Us" id="basic-nav-dropdown">
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
                    <NavDropdown.Item
                      className="dropdownItem"
                      >
                      <Link className="dropdownItem" to="/contact">
                        Contact Us
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Programs" id="basic-nav-dropdown">
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.1"
                    >
                      Overseas
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.2"
                    >
                      Language
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.3"
                    >
                      Skill Development
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="University" id="basic-nav-dropdown">
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.1"
                    >
                      Bangladeshi University
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.2"
                    >
                      Global University
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Scholarship" id="basic-nav-dropdown">
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.1"
                    >
                      Doctor of Philosphy (PhD)
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.2"
                    >
                      Master of Philosophy(MPhil)
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.3"
                    >
                      Post Graduate
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.4"
                    >
                      Post Graduate Diploma
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.4"
                    >
                      Under Graduate
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Courses" id="basic-nav-dropdown">
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.1"
                    >
                      English Spoken
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.2"
                    >
                      Communicative English
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.3"
                    >
                      Academic English
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.4"
                    >
                      IELTS Preparation
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.4"
                    >
                      Language Courses
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.4"
                    >
                      Professional Graphic Design
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.4"
                    >
                      Web Design & Development
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.4"
                    >
                      Digital Marketing
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.4"
                    >
                      Interior Design
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.4"
                    >
                      Online Outsourcing
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.4"
                    >
                      Career Counselling
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="News & Media" id="basic-nav-dropdown">
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.1"
                    >
                      Blog
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.2"
                    >
                      News
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.3"
                    >
                      Offer
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.3"
                    >
                      Events
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.3"
                    >
                      Photo Gallery
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.3"
                    >
                      Video Gallery
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.3"
                    >
                      Testimonial
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Apply" id="basic-nav-dropdown">
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.1"
                    >
                      Admission
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.2"
                    >
                      Scholarship
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
          <Route exact path="login" element={<Login />} />
          <Route exact path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Header;
