import React from "react";

const ImportantCourtOrdersPage = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="text-primary">Important Court Orders</h2>
        <p className="lead text-muted">
          Below are some of the landmark court orders and judgments related to
          child adoption and welfare.
        </p>
      </div>

      {/* Court Orders List */}
      <div className="row">
        <div className="col-md-12">
          <div className="card shadow-lg border-info mb-4">
            <div className="card-header bg-info text-white">
              <h4>1. Adoption Act 2015</h4>
            </div>
            <div className="card-body">
              <p>
                <strong>Order Summary:</strong> This order outlines the
                procedure for adoption, eligibility criteria for parents, and
                mandatory checks. It also mandates the establishment of adoption
                agencies to facilitate the process.
              </p>
              <p>
                <strong>Key Points:</strong>
              </p>
              <ul>
                <li>
                  Clear guidelines for domestic and international adoption.
                </li>
                <li>Regulation of adoption fees and procedures.</li>
                <li>Monitoring and follow-up by adoption agencies.</li>
              </ul>
              <a
                href="pdf_files/adoption_act2015.pdf"
                className="btn btn-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Full Order
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card shadow-lg border-info mb-4">
            <div className="card-header bg-info text-white">
              <h4>2. Child Welfare Act 2016</h4>
            </div>
            <div className="card-body">
              <p>
                <strong>Order Summary:</strong> This court order emphasizes
                child welfare and protection during adoption. It establishes the
                right of the child to a secure environment and the
                responsibility of adoptive parents.
              </p>
              <p>
                <strong>Key Points:</strong>
              </p>
              <ul>
                <li>Increased scrutiny of adoptive families.</li>
                <li>Rights of children to adequate care and protection.</li>
                <li>
                  Enforcement of the adoption process to prevent illegal
                  adoptions.
                </li>
              </ul>
              <a
                href="pdf_files/welfareact2016.pdf"
                className="btn btn-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Full Order
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card shadow-lg border-info mb-4">
            <div className="card-header bg-info text-white">
              <h4>3. Landmark Judgment on Inter-Country Adoption</h4>
            </div>
            <div className="card-body">
              <p>
                <strong>Order Summary:</strong> This judgment discusses the
                guidelines and legalities around inter-country adoption,
                addressing issues such as consent, eligibility, and protection
                of children.
              </p>
              <p>
                <strong>Key Points:</strong>
              </p>
              <ul>
                <li>
                  Clarified the process for adopting children across borders.
                </li>
                <li>
                  Required compliance with international conventions and laws.
                </li>
                <li>Safeguards against illegal trafficking of children.</li>
              </ul>
              <a
                href="pdf_files/intercountryadoption.pdf"
                className="btn btn-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Full Judgment
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card shadow-lg border-info mb-4">
            <div className="card-header bg-info text-white">
              <h4>4. Supreme Court Ruling on Foster Care</h4>
            </div>
            <div className="card-body">
              <p>
                <strong>Order Summary:</strong> The Supreme Court ruling in this
                case addresses the legal framework for foster care arrangements
                and the rights of children placed in foster care.
              </p>
              <p>
                <strong>Key Points:</strong>
              </p>
              <ul>
                <li>
                  Clarifies the distinction between foster care and adoption.
                </li>
                <li>
                  Defines the responsibilities of foster parents and agencies.
                </li>
                <li>Sets standards for child care in foster homes.</li>
              </ul>
              <a
                href="pdf_files/fostercare.pdf"
                className="btn btn-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Full Ruling
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <div className="row">
        <div className="col-md-12 text-center">
          <a href="/contact" className="btn btn-primary btn-lg mt-4">
            Contact Court for More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImportantCourtOrdersPage;
