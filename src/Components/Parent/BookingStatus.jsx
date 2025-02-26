import { useState, useEffect } from "react";
import axios from "axios";
import Parent_Slider from "./Parent_Slider";
import "../Parent/Parent_Slider.css";
import { useAuth } from "../Authenticate/AuthContext";
import { createUrl } from "../../util";
const BookingStatus = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
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
  const { user } = useAuth(); // Get authenticated user
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [feedbackModal, setFeedbackModal] = useState(false);
  const [feedback, setFeedback] = useState("");
  const url = createUrl(`api/parent/statusrequest/${user.id}`);
  
  
  // Function to Fetch Booking Status
  const fetchBookingStatus = () => {
    if (!user?.jwt) {
      console.error("No authentication token found!");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      })
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          setBooking(response.data[0]); // ✅ Extract first object from array
        } else {
          setBooking(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load booking status.");
        setLoading(false);
      });
  };

  // ✅ Automatically Fetch Data When Component Renders
  useEffect(() => {
    fetchBookingStatus();
  }, []); // Runs once on component mount
  
  // Function to Submit Feedback
  const submitFeedback = () => {
    if (!feedback) {
      alert("Feedback cannot be empty.");
      return;
    }
    const url2 = createUrl(`api/parent/feedback/${booking.id}`);
    axios
      .post(
        url2,
        { feedback }, // ✅ Send only the feedback value
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        alert("Feedback submitted successfully!");
        setFeedback("");
        setFeedbackModal(false);
        fetchBookingStatus(); // Refresh data
      })
      .catch((error) => {
        console.error("Error submitting feedback:", error);
        alert("Failed to submit feedback.");
      });
  };

  return (
    <div>
      <h2 className="text-center mb-4">Booking Status</h2>

      <button className="btn btn-primary mb-3" onClick={fetchBookingStatus}>
        Refresh Status
      </button>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Child Home</th>
            <th>Status</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="3" className="text-center">Loading...</td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="3" className="text-center text-danger">{error}</td>
            </tr>
          ) : booking ? (
            <tr>
              <td>{booking.ch?.houseName || "N/A"}</td> {/* ✅ Child Home Name */}
              <td>{booking.status !== null ? booking.status : "Pending"}</td> {/* ✅ Status */}
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => setFeedbackModal(true)}
                >
                  Give Feedback
                </button>
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan="3" className="text-center text-danger">
                No bookings found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Feedback Modal */}
      {feedbackModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Give Feedback</h4>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Write your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <div className="modal-buttons">
              <button className="btn btn-success mt-2" onClick={submitFeedback}>
                Submit
              </button>
              <button
                className="btn btn-danger mt-2"
                onClick={() => setFeedbackModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingStatus;
