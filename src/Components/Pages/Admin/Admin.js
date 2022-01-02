import React from "react";
import "./Admin.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./Admin.css";

function Admin() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/admin">Admin Page</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="adminNavItem" to="contactUsData">
              <Nav.Item>Contact Data</Nav.Item>
            </Link>
            <Link className="adminNavItem" to="agentData">
              <Nav.Item>Agent Data</Nav.Item>
            </Link>            
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Admin;
