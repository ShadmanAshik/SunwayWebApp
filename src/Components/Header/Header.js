import React from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import AboutUS from "../About US/about us/AboutUS";
import { Link } from "react-router-dom";
import WhySSG from "../About US/why ssg/WhySSG";
import MissionVision from "../About US/mission & vission/MissionVision";

const Header = () => {
  return (
    <div>
      <div className="scrwaller"><marquee scrollamount="5">Admision is going on</marquee> </div>
      <BrowserRouter>
        <div>         
          <Navbar className="nav-bg" expand="lg">          
            <Container>
              <Navbar.Brand href="#home">
                <img className="logo" src="https://i.ibb.co/XxzXZFN/Whats-App-Image-2021-12-05-at-8-06-48-PM.jpg"
                  alt="Logo"
                  border="0"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Link className="Nav-bar" to='/home'>
                    Home
                  </Link>

                  <NavDropdown
                    title={<span className="Nav-bar">About Us</span>}
                    id="basic-nav-dropdown"
                  >
                    <Link className="DropDownItem company-dropdown" to="/about">
                      About SSG
                    </Link>{" "}
                    <NavDropdown.Divider className="seperator"></NavDropdown.Divider>
                    <Link className="DropDownItem company-dropdown" to="/whyssg">
                      Why SSG ?
                    </Link>{" "}<br />
                    <Link
                      className="DropDownItem company-dropdown" to="/missionvision">
                      Mission & Vision
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/missionvision"
                    >
                      Our Team
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/missionvision"
                    >
                      Quality Policy
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/missionvision"
                    >
                      Privacy Policy
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/missionvision"
                    >
                      Contact Us
                    </Link>{" "}
                    <br />
                  </NavDropdown>
                  <NavDropdown
                    title={<span className="Nav-bar">Programs</span>}
                    id="basic-nav-dropdown"
                  >
                    <Link className="DropDownItem company-dropdown" to="/about">
                      Overseas
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/whyssg"
                    >
                      Language
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/missionvision"
                    >
                      Skill Development
                    </Link>{" "}
                    <br />
                  </NavDropdown>
                  <NavDropdown
                    title={<span className="Nav-bar">University</span>}
                    id="basic-nav-dropdown"
                  >
                    <Link className="DropDownItem company-dropdown" to="/about">
                      Bangladeshi University
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/whyssg"
                    >
                      International University
                    </Link>{" "}
                    <br />
                  </NavDropdown>
                  <NavDropdown
                    title={<span className="Nav-bar">Scholarship</span>}
                    id="basic-nav-dropdown"
                  >
                    <Link className="DropDownItem company-dropdown" to="/about">
                      Doctor of Philosophy (PhD)
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/whyssg"
                    >
                      Master of Philosophy (MPhil)
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/whyssg"
                    >
                      Post Graduate
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/whyssg"
                    >
                      Post graduate diploma
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/whyssg"
                    >
                      Under graduate
                    </Link>{" "}
                    <br />
                  </NavDropdown>

                  <NavDropdown
                    title={<span className="Nav-bar">Courses</span>}
                    id="basic-nav-dropdown"
                  >
                    <Link className="DropDownItem company-dropdown" to="/about">
                      English Spoken
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/whyssg"
                    >
                      Communivative English
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/missionvision"
                    >
                      Academic English
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/missionvision"
                    >
                      IELTS Preparation
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/missionvision"
                    >
                      Language Courses
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/missionvision"
                    >
                      Professional Graphic Design
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/missionvision"
                    >
                      Web Design and Development
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/missionvision"
                    >
                      Digital Marketing
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/missionvision"
                    >
                      Interior Design
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/missionvision"
                    >
                      Online Outsourcing
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/missionvision"
                    >
                      Career Counselling
                    </Link>{" "}
                    <br />
                  </NavDropdown>

                  <NavDropdown
                    title={<span className="Nav-bar">News & Media</span>}
                    id="basic-nav-dropdown"
                  >
                    <Link className="DropDownItem company-dropdown" to="/about">
                      Blog
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/whyssg"
                    >
                      News
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/missionvision"
                    >
                      Offer
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/missionvision"
                    >
                      Events
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/missionvision"
                    >
                      Photo Gallery
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/missionvision"
                    >
                      Video Gallery
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/missionvision"
                    >
                      Testimonial
                    </Link>{" "}
                    <br />
                  </NavDropdown>
                  <NavDropdown
                    title={<span className="Nav-bar">Apply</span>}
                    id="basic-nav-dropdown"
                  >
                    <Link className="DropDownItem company-dropdown" to="/about">
                      Admission
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/whyssg"
                    >
                      Scholarship
                    </Link>{" "}
                    <br />
                    <Link
                      className="DropDownItem company-dropdown"
                      to="/whyssg"
                    >
                      Legal Support
                    </Link>{" "}
                    <br />
                  </NavDropdown>
                  <Link className="Nav-bar" to="/home">
                  <Button id='signin'className="btn" variant="outline-dark" size="sm">Sign In</Button>
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
          <Route exact path="missionvision" element={<MissionVision />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Header;
