import React from "react";

const AnnualReportPage = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="text-primary">Annual Report - 2025</h2>
        <p className="lead text-muted">
          A summary of our key achievements, financial growth, and future plans
          for the year 2025.
        </p>
      </div>

      {/* Overview Section */}
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card shadow-lg border-primary">
            <div className="card-header bg-primary text-white">
              <h4>Overview</h4>
            </div>
            <div className="card-body">
              <p>
                The year 2025 has been a transformative year for our
                organization. We have expanded our operations, improved our
                services, and strengthened our presence in the industry. Our
                focus has been on enhancing customer satisfaction and investing
                in sustainable practices to drive long-term growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Achievements Section */}
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card shadow-lg border-success">
            <div className="card-header bg-success text-white">
              <h4>Key Achievements</h4>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  Launched a new product line that increased revenue by 20%.
                </li>
                <li>
                  Expanded our customer base by 35% through targeted marketing
                  campaigns.
                </li>
                <li>Successfully entered 3 new international markets.</li>
                <li>
                  Enhanced our employee training programs, resulting in a 15%
                  increase in productivity.
                </li>
                <li>
                  Reduced operational costs by 10% through process optimization
                  and automation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Summary Section */}
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card shadow-lg border-warning">
            <div className="card-header bg-warning text-dark">
              <h4>Financial Summary</h4>
            </div>
            <div className="card-body">
              <p>
                <strong>Total Revenue:</strong> $10.5 Million
              </p>
              <p>
                <strong>Net Profit:</strong> $2.3 Million
              </p>
              <p>
                <strong>Operating Expenses:</strong> $7.2 Million
              </p>
              <p>
                <strong>Growth Rate:</strong> 18% year-on-year increase in
                revenue
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Future Plans Section */}
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card shadow-lg border-info">
            <div className="card-header bg-info text-white">
              <h4>Future Plans</h4>
            </div>
            <div className="card-body">
              <p>
                In the coming year, we aim to continue our growth trajectory by:
              </p>
              <ul>
                <li>Expanding into two more international markets.</li>
                <li>
                  Launching a sustainability initiative aimed at reducing our
                  carbon footprint.
                </li>
                <li>Investing in R&D for new innovative products.</li>
                <li>
                  Improving customer engagement through new digital platforms
                  and mobile apps.
                </li>
                <li>
                  Enhancing employee benefits and well-being programs to retain
                  top talent.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Download Report Button */}
      <div className="row mb-4">
        <div className="col-md-12 text-center">
          <a
            href="pdf_files/CARA Annual Report 2021-22 English.pdf"
            className="btn btn-success"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Full Report
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnualReportPage;
