import React, { useState } from "react";
import { toast } from "react-toastify";
import ChildhomeSlider from "./Childhome_Slider";
import { useAuth } from "../Authenticate/AuthContext";
import { AddEvents } from "../../services/Childhomeservice";
import { useNavigate } from "react-router-dom";

const ChildHomeEvents = () => {
  const { user } = useAuth();
  const navigator = useNavigate();

  const [eventData, setEventData] = useState({
    eventName: "",
    eventDate: "",
    eventDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log();
    const data = {
      eventName: eventData.eventName,
      eventDate: eventData.eventDate,
      eventDescription: eventData.eventDescription,
      chId: user.id,
    };

    try {
      const result = await AddEvents(data, user);
      if (result && result.status === 200) {
        toast.success("Event Added Successfully");
        navigator("/childHome");
      }
    } catch (error) {
      toast.error("An error occurred while adding the event.");
      console.log("Event addition error:", error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <ChildhomeSlider />
        </div>
        <div className="col-10">
          <div className="container_background">
            <div className="registration-container">
              <h1 className="form-title text-primary">Add Event</h1>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="eventName" className="form-label">
                    Event Name:
                  </label>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="eventName"
                    name="eventName"
                    value={eventData.eventName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="eventDate" className="form-label">
                    Event Date:
                  </label>
                </div>
                <div className="input-group">
                  <input
                    type="date"
                    className="form-control"
                    id="eventDate"
                    name="eventDate"
                    value={eventData.eventDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="eventDescription" className="form-label">
                    Event Description:
                  </label>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="eventDescription"
                    name="eventDescription"
                    value={eventData.eventDescription}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Add Event
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildHomeEvents;
