import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Admin/Admin_Slider.css";
const AdminSidebar = () => {
  return (
    <div>
      <div className="nav-items" style={{ borderRadius: "2px" }}>
        <Link id="admin_slider_link" className="nav-link active" to="/admin">
          Admin Dashboard
        </Link>
        <Link
          id="admin_slider_link"
          className="nav-link"
          to="/admin/parentdetails"
        >
          Parents Detail
        </Link>
        <Link
          id="admin_slider_link"
          className="nav-link"
          to="/admin/childhomedetails"
        >
          ChildHome Detail
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
