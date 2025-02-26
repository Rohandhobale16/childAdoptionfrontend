import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImageSlideshow from "../ImageSlideshow/ImageSlideshow";

const Home = () => {
  const [childHomeCount, setChildHomeCount] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const childHomeResponse = await fetch(
          "http://localhost:8080/childhome/childhomecount",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        
        const employeeResponse = await fetch(
          "http://localhost:8080/childhome/employeecount",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        
        if (!childHomeResponse.ok || !employeeResponse.ok) {
          throw new Error("Failed to fetch counts");
        }

        const childHomeData = await childHomeResponse.json();
        const employeeData = await employeeResponse.json();

        setChildHomeCount(childHomeData);
        setEmployeeCount(employeeData);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div>
      <ImageSlideshow />
      <div className="container my-1" style={{ paddingTop: "20px" }}>
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 col-12 text-center text-lg-start">
            <h1 className="display-4 fw-bold">
              Welcome to <span className="text-primary">HomeForHeart</span>
            </h1>
            <p className="lead text-muted">
              Building families, one adoption at a time. Join us to provide
              love, care, and a safe home for every child.
            </p>
            <div className="d-flex flex-column flex-lg-row align-items-center">
              <Link to="/Applicantreg" className="btn btn-primary btn-lg mb-3 mb-lg-0 me-lg-3">
                Become a Parent
              </Link>
              <Link to="/Childhomereg" className="btn btn-outline-primary btn-lg">
                Register a Child Home
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-12 text-center mt-4 mt-lg-0">
            <img
              src="Logo/family.jpeg"
              alt="A happy family symbolizing adoption"
              className="img-fluid rounded"
            />
          </div>
        </div>

        <div className="row text-center mb-5">
          <div className="col-md-4">
            <img src="Logo/care.jpeg" alt="Care" className="mb-3" style={{ height: "60px" }} />
            <h4>Care & Compassion</h4>
            <p className="text-muted">
              Ensuring every child finds a family filled with love and support.
            </p>
          </div>
          <div className="col-md-4">
            <img src="Logo/guidance.jpeg" alt="Guidance" className="mb-3" style={{ height: "60px" }} />
            <h4>Guidance & Support</h4>
            <p className="text-muted">
              Step-by-step assistance for adoptive parents and child homes.
            </p>
          </div>
          <div className="col-md-4">
            <img src="Logo/community.png" alt="Community" className="mb-3" style={{ height: "60px" }} />
            <h4>Connected Community</h4>
            <p className="text-muted">
              Join a network of parents, volunteers, and child welfare experts.
            </p>
          </div>
        </div>

        <div className="bg-light py-5 rounded text-center">
          <div className="row">
            <div className="col-md-3">
              <h2 className="fw-bold">1,500+</h2>
              <p className="text-muted">Children Adopted</p>
            </div>
            <div className="col-md-3">
              <h2 className="fw-bold">{childHomeCount}</h2>
              <p className="text-muted">Child Homes Registered</p>
            </div>
            <div className="col-md-3">
              <h2 className="fw-bold">{employeeCount}</h2>
              <p className="text-muted">Volunteers</p>
            </div>
            <div className="col-md-3">
              <h2 className="fw-bold">100+</h2>
              <p className="text-muted">Court Orders Simplified</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <h3 className="fw-bold">Ready to Make a Difference?</h3>
          <p className="text-muted">
            Whether you want to adopt, donate, or support our mission, we are
            here to guide you.
          </p>
          <Link to="/donate" className="btn btn-primary btn-lg me-3">
            Donate Now
          </Link>
          <Link to="/contactus" className="btn btn-outline-primary btn-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
