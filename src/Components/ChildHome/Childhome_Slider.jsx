import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Admin/Admin_Slider.css";

const ChildhomeSlider = () => {
  return (
    <div>
      <div className="nav-items" style={{ borderRadius: "2px" }}>
        <Link
          id="admin_slider_link"
          className="nav-link active"
          to="/childhome"
        >
          Initiate Request
        </Link>
        <Link
          id="admin_slider_link"
          className="nav-link"
          to="/childhome/addchild"
        >
          Add Child
        </Link>
        <Link
          id="admin_slider_link"
          className="nav-link"
          to="/childhome/addevent"
        >
          Add Event
        </Link>
        <Link id="admin_slider_link" className="nav-link" to="/childhome/edit">
          Edit Profile
        </Link>
        <Link
          id="admin_slider_link"
          className="nav-link"
          to="/childhome/registerSocialWorker"
        >
          Register Social Worker
        </Link>
        <Link
          hidden
          id="admin_slider_link"
          className="nav-link"
          to="/childhome/uploadcertifiacte"
        >
          Upload Adoption Certificate
        </Link>
      </div>
    </div>
  );
};

export default ChildhomeSlider;
