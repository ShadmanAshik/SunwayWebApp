import React from "react";
import { Outlet } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import "./AdminDashboard.css";
import Sidebar from "./SideNav/Sidebar";

function AdminDashboard() {
  return (
    <div className="sidebar">
      <div className="row">
        <div className="col-sm-2">
         <Sidebar/>
        </div>
        <div className="col-sm-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
