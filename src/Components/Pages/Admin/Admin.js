import React from "react";
import "./Admin.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./Admin.css";

function Admin( ) {
  return (
    <div>
      <Navbar bg="light" variant="light">
        
          
          <Nav className="m-auto">
            <Link className="adminNavItem" to="commonFormData">
              <Nav.Item>Common Data</Nav.Item>
            </Link>
            <Link className="adminNavItem" to="contactUsData">
              <Nav.Item>Contact_Us Data</Nav.Item>
            </Link> 
            <Link className="adminNavItem" to="languageFormData">
              <Nav.Item>Language_Form Data </Nav.Item>
            </Link> 
            <Link className="adminNavItem" to="skillFormData">
              <Nav.Item>Skills_From Data </Nav.Item>
            </Link> 
            <Link className="adminNavItem" to="scholarshipFormData">
              <Nav.Item>Scholarship Applications </Nav.Item>
            </Link>  
            <Link className="adminNavItem" to="admissionFormData">
              <Nav.Item>Admission Applications </Nav.Item>
            </Link>
            <Link className="adminNavItem" to="tuitionData">
              <Nav.Item>Tuition Data </Nav.Item>
            </Link>  
            <Link className="adminNavItem" to="tutorData">
              <Nav.Item>Tutor Data </Nav.Item>
            </Link> 
                 
          </Nav>
       
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Admin;
