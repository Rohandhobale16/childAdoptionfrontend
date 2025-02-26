import React from "react";
import { Link } from "react-router-dom";
import "../Admin/Admin_Slider.css";

const SocialworkerSlider = () => {
  return (
    <div>
      <div className="nav-items" style={{ borderRadius: "2px" }}>
        <Link
          id="admin_slider_link"
          className="nav-link"
          to="/socialworkerChangeStatus"
        >
          Requests
        </Link>

        <Link id="admin_slider_link" className="nav-link" to="/social/edit">
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default SocialworkerSlider;
