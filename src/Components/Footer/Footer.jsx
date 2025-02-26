import React from "react";
// import "bootstrap-icons/font/bootstrap-icons.css";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-image"></div>

      <footer
        className="text-black mt-3 px-4 py-4"
        style={{ backgroundColor: "white" }}
      >
        <div>
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>
                We are dedicated to providing a safe and supportive environment
                for children with special needs. Our center focuses on
                adaptation services that help children thrive in a caring home
                environment.
              </p>
            </div>

            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/about" className="text-dark text-decoration-none">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-dark text-decoration-none"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="/donate" className="text-dark text-decoration-none">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-dark text-decoration-none">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5>Contact Information</h5>
              <p>
                <strong>Phone:</strong> (123) 1234567 <br />
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@childhomecenter.com"
                  className="text-dark text-decoration-none"
                >
                  info@childhomecenter.com
                </a>{" "}
                <br />
                <strong>Address:</strong> Sunbeam Child Ave, Pune, Maharashtra,
                415401
              </p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col text-center">
              <a
                href="https://www.facebook.com"
                className="text-dark mx-2 fs-4"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.twitter.com" className="text-dark mx-2 fs-4">
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com"
                className="text-dark mx-2 fs-4"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col text-center">
              <p className="small m-0">
                &copy; 2025 Child Home Adaptation Center. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
