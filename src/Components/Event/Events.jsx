import React, { useEffect, useState } from "react";
import { fetchEvents } from "../../services/Eventservice";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchEvents();
        console.log("API Response:", response);

        if (Array.isArray(response)) {
          const formattedEvents = response.map((event) => ({
            id: event.id,
            title: event.eventName || "No Title",
            date: event.eventDate || "Unknown Date",
            description: event.eventDescription || "No description available",
          }));

          setEvents(formattedEvents);
        } else {
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <div className="row">
        {events.map((event) => (
          <div key={event.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.description}</p>
                <p className="card-text">
                  <small className="text-muted">{event.date}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
