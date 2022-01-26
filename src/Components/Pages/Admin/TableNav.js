import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./TableNav.css";

function TableNav( ) {
  return (
    <div>
      <Navbar bg="light" variant="light">
        
          
          <Nav className="m-auto">
            <Link className="tableNavItem" to="commonFormData">
              <Nav.Item>Common Data</Nav.Item>
            </Link>
            <Link className="tableNavItem" to="contactUsData">
              <Nav.Item>Contact_Us Data</Nav.Item>
            </Link> 
            <Link className="tableNavItem" to="languageFormData">
              <Nav.Item>Language_Form Data </Nav.Item>
            </Link> 
            <Link className="tableNavItem" to="skillFormData">
              <Nav.Item>Skills_From Data </Nav.Item>
            </Link> 
            <Link className="tableNavItem" to="scholarshipFormData">
              <Nav.Item>Scholarship Applications </Nav.Item>
            </Link>  
            <Link className="tableNavItem" to="admissionFormData">
              <Nav.Item>Admission Applications </Nav.Item>
            </Link>
            <Link className="tableNavItem" to="tuitionData">
              <Nav.Item>Tuition Data </Nav.Item>
            </Link>  
            <Link className="tableNavItem" to="tutorData">
              <Nav.Item>Tutor Data </Nav.Item>
            </Link> 
                 
          </Nav>
       
      </Navbar>
      <Outlet />
    </div>
  );
}

export default TableNav;
