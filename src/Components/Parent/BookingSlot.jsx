import { useEffect, useState } from "react";
import axios from "axios";
import Parent_Slider from "./Parent_Slider";
import "../Parent/Parent_Slider.css";
import { useAuth } from "../Authenticate/AuthContext";
import { createUrl } from "../../util";

const BookingSlot = () => {
  const url = createUrl(`api/parent/childhomes`);
  const { user } = useAuth();
  const [childHomes, setChildHomes] = useState([]);
  const [selectedChildHome, setSelectedChildHome] = useState(null);

  useEffect(() => {
    fetchChildHomes();
  }, []);

  const fetchChildHomes = async () => {
    try {
      
      if (!user.jwt) {
        console.error("No token found, please log in.");
        return;
      }

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
        withCredentials: true, 
      });

      setChildHomes(response.data); 
    } catch (error) {
      console.error("Error fetching child homes:", error.response?.data || error.message);
    }
  };

  const openModal = (childHome) => {
    setSelectedChildHome(childHome);
    const modal = new window.bootstrap.Modal(
      document.getElementById("bookSlotModal")
    );
    modal.show();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Parent_Slider />
        </div>
        <div className="col-10 ms-auto p-4">
          <BookSlotTable childHomes={childHomes} onBookSlot={openModal} />
        </div>
      </div>

      {/* Bootstrap Modal */}
      <BookSlotModal selectedChildHome={selectedChildHome} />
    </div>
  );
};

const BookSlotTable = ({ childHomes, onBookSlot }) => {
  return (
    <div>
      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Sr.No.</th>
            <th>NAME OF CHILD HOMES</th>
            <th>STATE</th>
            <th>ADDRESS</th>
            <th>CONTACT DETAILS</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {childHomes.length > 0 ? (
            childHomes.map((home, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{home.houseName}</td>
                <td>{home.state}</td>
                <td>{`${home.street}, ${home.city}, ${home.district}, ${home.pincode}`}</td>
                <td>{home.userMobile}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => onBookSlot(home.houseName)}
                  >
                    Book Slot
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No Child Homes Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const BookSlotModal = ({ selectedChildHome }) => {
 
  const { user } = useAuth();
  const url = createUrl(`api/parent/parent/bookSlot/${user.id}`);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");


  const getNextFourSundays = () => {
    let dates = [];
    let today = new Date();
    for (let i = 0; i < 4; i++) {
      today.setDate(today.getDate() + ((7 - today.getDay() + 7) % 7 || 7));
      dates.push(today.toISOString().split("T")[0]);
    }
    return dates;
  };

  const handleSubmit = async () => {
    try {
        if (!user.jwt) {
            console.error("No token found, please log in.");
            return;
        }

        const bookingData = {
           
            childHomeName: selectedChildHome,
            date: selectedDate,
            slot: selectedSlot.toUpperCase(), 
        };

        console.log("Booking Data:", bookingData);
        console.log("JWT Token:", user.jwt);

        await axios.post(url, bookingData, {
            headers: {
                Authorization: `Bearer ${user.jwt}`,
                "Content-Type": "application/json",
            },
        });

        alert("Slot booked successfully!");
    } catch (error) {
        console.error("Error booking slot:", error.response?.data || error.message);
    }
};

  return (
    <div
      className="modal fade"
      id="bookSlotModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Book Slot</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Child Home Name</label>
              <input
                type="text"
                className="form-control"
                value={selectedChildHome || ""}
                readOnly
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Select Date</label>
              <select
                className="form-select"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              >
                <option value="">Select a Sunday</option>
                {getNextFourSundays().map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Select Slot</label>
              <select
                className="form-select"
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
              >
                <option value="">Select a Slot</option>
                <option value="Morning">Morning</option>
                <option value="Evening">Evening</option>
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSlot;
