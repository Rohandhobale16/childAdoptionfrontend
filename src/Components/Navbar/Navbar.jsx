import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";
import { useAuth } from "../Authenticate/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
        <div className="container-fluid" id="navbarcontainerfluid">
          <Link
            className="navbar-brand d-flex align-items-center me-4"
            to="/"
            onClick={closeNavbar}
          >
            <img
              id="home_logo"
              src="/logo.jpg"
              alt="logo"
              className="logo-img"
            />
            <span className="navbar-brand-text">HomeForHeart</span>
          </Link>

          <button
            className={`navbar-toggler ${isNavbarOpen ? "" : "collapsed"}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isNavbarOpen}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item dropdown">
                <button
                  className="btn nav-link dropdown-toggle"
                  id="resourcesDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="resourcesDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/schemesAndGuidelinesPage"
                      onClick={closeNavbar}
                    >
                      Schemes & Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/importantCourtOrdersPage"
                      onClick={closeNavbar}
                    >
                      Important Court Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/annualReportPage"
                      onClick={closeNavbar}
                    >
                      Annual Reports
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contactus"
                  onClick={closeNavbar}
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/displayhomes"
                  onClick={closeNavbar}
                >
                  Child Homes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events" onClick={closeNavbar}>
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donate" onClick={closeNavbar}>
                  Donation
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pdf_files/adoption_regulations.pdf"
                  target="_blank"
                  onClick={closeNavbar}
                >
                  Acts & Regulations
                </a>
              </li>

              {user && user.role === "ROLE_CHILDHOME" && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/childHome"
                    onClick={closeNavbar}
                  >
                    ChildHome Dashboard
                  </Link>
                </li>
              )}
              {user && user.role === "ROLE_ADMIN" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin" onClick={closeNavbar}>
                    Admin Dashboard
                  </Link>
                </li>
              )}
              {user && user.role === "ROLE_PARENT" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/parent" onClick={closeNavbar}>
                    Parent Dashboard
                  </Link>
                </li>
              )}
              {user && user.role === "ROLE_EMPLOYEE" && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/socialWorkerProfile"
                    onClick={closeNavbar}
                  >
                    SocialWorker Dashboard
                  </Link>
                </li>
              )}

              {!user && (
                <li className="nav-item dropdown">
                  <button
                    className="btn nav-link dropdown-toggle"
                    id="registrationDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Registration
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="registrationDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Applicantreg"
                        onClick={closeNavbar}
                      >
                        Resident Indian Parents
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Childhomereg"
                        onClick={closeNavbar}
                      >
                        Register Child Home
                      </Link>
                    </li>
                  </ul>
                </li>
              )}

              {user ? (
                <li className="nav-item">
                  <button
                    className="btn btn-danger ms-lg-3"
                    onClick={() => {
                      logout();
                      closeNavbar();
                    }}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <button
                    onClick={() => {
                      navigate("/login");
                      closeNavbar();
                    }}
                    className="btn btn-primary ms-lg-3"
                  >
                    Login
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
