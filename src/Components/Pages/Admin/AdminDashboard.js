import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Menu, MenuItem, ProSidebar, SubMenu } from "react-pro-sidebar";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./SideNav/Sidebar";

function AdminDashboard() {
  return (
    <div className="sidebar">
        {/* <div className="row">
          <div className="col-lg-3">
            <Sidebar/>
            <Outlet/>
          </div>
          <div className="col-lg-9">
          <h1>Sidebar</h1>
          </div>
        </div> */}
        
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

export default AdminDashboard;
