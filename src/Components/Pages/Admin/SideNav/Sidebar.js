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
            <Menu>
              <MenuItem>
                Admin AdminDashboard
                <Link to="/adminDashboard" />
              </MenuItem>

              <SubMenu title="Form Data">
                <MenuItem>
                  Admission Form
                  <Link to="admissionFormData" />
                </MenuItem>
                <MenuItem>
                  Business Agents
                  <Link to="busAgentData" />
                </MenuItem>
                <MenuItem>
                  Individual Agents
                  <Link to="indAgentData" />
                </MenuItem>
                <MenuItem>
                  Common Form
                  <Link to="commonFormData" />
                </MenuItem>
                <MenuItem>
                  Contact Us Form
                  <Link to="contactUsData" />
                </MenuItem>
                <MenuItem>
                  Language Form
                  <Link to="languageFormData" />
                </MenuItem>
                <MenuItem>
                  Scholarship Form
                  <Link to="scholarshipFormData" />
                </MenuItem>
                <MenuItem>
                  Skill Form
                  <Link to="skillFormData" />
                </MenuItem>
                <MenuItem>
                  Hire Tutor Form
                  <Link to="tuitionData" />
                </MenuItem>
                <MenuItem>
                  Become Tutor Form
                  <Link to="tutorData" />
                </MenuItem>
              </SubMenu>
              
              <SubMenu title="Edit Pages">
                <SubMenu title="Courses">
                  <MenuItem>
                    English Spken
                    <Link to="add"/>
                  </MenuItem>
                  <MenuItem>
                    Communicative English
                    <Link to="add"/>
                  </MenuItem>
                  <MenuItem>
                    Academic English
                    <Link to="add"/>
                  </MenuItem>
                  <MenuItem>
                    IELTS Preparation
                    <Link to="add"/>
                  </MenuItem>
                  <MenuItem>
                    Language Courses
                    <Link to="add"/>
                  </MenuItem>
                  <MenuItem>
                    Professional Graphic Design
                    <Link to="add"/>
                  </MenuItem>
                  <MenuItem>
                    Web Design & Development
                    <Link to="add"/>
                  </MenuItem>
                  <MenuItem>
                    Digital Marketing
                    <Link to="add"/>
                  </MenuItem>
                </SubMenu>
              </SubMenu>

              <MenuItem>
                  LogOut
                  <Link to="logout" />
                </MenuItem>
            </Menu>
          </ProSidebar>
        
      </div>
    );
  }
}

export default Sidebar;
