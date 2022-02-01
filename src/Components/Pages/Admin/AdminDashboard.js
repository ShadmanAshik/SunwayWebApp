import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./TableNav.css"

function AdminDashboard() {
  return (
    <div className="sidebar">
      {/* <ProSidebar>
          <Menu iconShape="square">
            <Link to="formData">
              <MenuItem> Form Data</MenuItem>
            </Link>
            <MenuItem>Dashboard</MenuItem>
            <SubMenu title="Form Data">
              <Link to='commonFormData'>
                <MenuItem>Common Form</MenuItem>
              </Link>
              <Link to='contactUsData'>
                <MenuItem>Contact Us Form</MenuItem>
              </Link>
              <Link to='scholarshipFormData'>
                <MenuItem>Contact Us Form</MenuItem>
              </Link>
              <Link to='skillFormData'>
                <MenuItem>Skill Dev Form</MenuItem>
              </Link>
              <Link to='languageFormData'>
                <MenuItem>Language Form</MenuItem>
              </Link>
              
              <Link to='tuitionData'>
                <MenuItem>Hire Tutor Form</MenuItem>
              </Link>
              <Link to='tutorData'>
                <MenuItem>Be Tuotr Form</MenuItem>
              </Link>

              
            </SubMenu>
          </Menu>
        </ProSidebar>
        <Outlet/>
        <h1>Sidebar</h1> */}
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
          <Link className="tableNavItem" to="busAgentData">
            <Nav.Item>Business Agent</Nav.Item>
          </Link>
          <Link className="tableNavItem" to="indAgentData">
            <Nav.Item>Individual Agent</Nav.Item>
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
