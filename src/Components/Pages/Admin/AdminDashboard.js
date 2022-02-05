import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="sidebar">
      <div className="row">
        <div className="col-md-2">
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
              <MenuItem>
                  LogOut
                  <Link to="logout" />
                </MenuItem>
            </Menu>
          </ProSidebar>
        </div>
        <div className="col-md-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
