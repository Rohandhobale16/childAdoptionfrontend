import Parent_Slider from "./Parent_Slider";
import { useState } from "react";
import "../Parent/Parent_Slider.css";

const ParentFeedback = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 ">
          <Parent_Slider />
        </div>
        <div className="col-10 ms-auto p-4">
          <Content />
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    if (feedback.trim() === "") {
      alert("Please enter your feedback before submitting.");
      return;
    }
    console.log("Submitted Feedback:", feedback);
    alert("Thank you for your feedback!");
    setFeedback(""); // Clear textarea after submission
  };

  return (
    <div>
      <h1>
        <center>Feedback</center>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Write your feedback here about Child Home"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
        <center>
          <button type="submit" className="btn btn-primary mt-3">
            Submit Feedback
          </button>
        </center>
      </form>
    </div>
  );
};

export default ParentFeedback;
