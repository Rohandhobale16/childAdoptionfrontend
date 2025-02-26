import React from "react";
import { Link } from "react-router-dom";

const SchemesAndGuidelinesPage = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2>Schemes & Guidelines for Child Adoption</h2>
        <p className="lead">
          Learn about the adoption process, eligibility criteria, and government
          schemes that make adoption easier and more accessible for families.
        </p>
      </div>

      {/* Adoption Process */}
      <div className="row">
        <div className="col-md-12">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-primary text-white">
              <h4>1. Adoption Process Overview</h4>
            </div>
            <div className="card-body">
              <h5>Step 1: Registration</h5>
              <p>
                Parents must register with the relevant adoption authorities to
                initiate the adoption process.
              </p>
              <h5>Step 2: Screening & Assessment</h5>
              <p>
                A thorough assessment of the prospective adoptive parents is
                conducted, including background checks, home visits, and
                interviews.
              </p>
              <h5>Step 3: Matching & Placement</h5>
              <p>
                After screening, adoptive parents are matched with children in
                need of a home. Once matched, the placement process begins.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Criteria */}
      <div className="row">
        <div className="col-md-12">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-success text-white">
              <h4>2. Eligibility Criteria</h4>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Prospective parents must be at least 25 years old.
                </li>
                <li className="list-group-item">
                  There must be a stable income source to provide for the child.
                </li>
                <li className="list-group-item">
                  Parents must be in good health and have a clean criminal
                  record.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Government Schemes */}
      <div className="row">
        <div className="col-md-12">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-info text-white">
              <h4>3. Government Schemes</h4>
            </div>
            <div className="card-body">
              <p>
                Various government schemes are in place to support child
                adoption and provide financial aid to adoptive parents. These
                include:
              </p>
              <ol>
                <li>
                  Adoption Allowance: A monthly allowance for the child’s care
                  and education.
                </li>
                <li>
                  Reimbursement of Adoption Fees: Support for covering the cost
                  of the adoption process.
                </li>
                <li>
                  Tax Benefits: Adoptive parents may be eligible for tax
                  deductions based on adoption expenses.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Guidelines for Adoption Agencies */}
      <div className="row">
        <div className="col-md-12">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-warning text-white">
              <h4>4. Guidelines for Adoption Agencies</h4>
            </div>
            <div className="card-body">
              <p>
                Adoption agencies must follow strict guidelines to ensure the
                safety and well-being of the child. These guidelines include:
              </p>
              <ul>
                <li>Strict background checks on adoptive parents.</li>
                <li>
                  Regular monitoring of the child's welfare after placement.
                </li>
                <li>Maintaining transparency in the adoption process.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="row">
        <div className="col-md-12 text-center">
          <Link to="/contactus" className="btn btn-primary btn-lg mt-4">
            Contact Adoption Authority
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SchemesAndGuidelinesPage;
