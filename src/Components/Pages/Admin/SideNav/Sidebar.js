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
            <SubMenu title="Components">
              <Link to='commonFormData'>
                <MenuItem>Common Form</MenuItem>
              </Link>

              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
        
      </div>
    );
  }
}

export default Sidebar;
