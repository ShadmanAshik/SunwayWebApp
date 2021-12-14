import React from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import { Link } from "react-router-dom";
import AboutUS from "../Pages/AboutUs/AboutUS";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/signup";

const Header = () => {
  return (
    <div>
      <div className="scrwaller">
        <marquee scrollamount="10" hspace="15%">
          Admision is going on
        </marquee>{" "}
      </div>
      <BrowserRouter>
        <div>
          <Navbar className="nav" expand="lg">
            <Container>
              <Navbar.Brand  href="/home"><h1 className="logo">SSG</h1></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link id="navlink" href="/home">
                    Home
                  </Nav.Link>
                  <NavDropdown title="About Us" id="basic-nav-dropdown">
                    <NavDropdown.Item className="dropdownItem" href="about">
                      About SSG
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.2"
                    >
                      Why SSG
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.3"
                    >
                      Mission & Vission
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.4"
                    >
                      Policy
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.4"
                    >
                      Our Team
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdownItem"
                      href="#action/3.4"
                    >
                      Contact Us
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
                  <Nav.Link id="navlink" className="dropdownItem" href="/login">
                    Sign In
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="home" element={<Home />} />
          <Route exact path="about" element={<AboutUS />} />
          <Route exact path="login" element={<Login/>} />
          <Route exact path="signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Header;
