import React, { Component } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link, Outlet } from "react-router-dom";
import "./Sidebar.css";

export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ProSidebar>
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
        
      </div>
    );
  }
}

export default Sidebar;
