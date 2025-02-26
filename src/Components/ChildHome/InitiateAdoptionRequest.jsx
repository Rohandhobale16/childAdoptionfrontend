import React, { useState, useEffect } from "react";
import ChildhomeSlider from "./Childhome_Slider";
import { useAuth } from "../Authenticate/AuthContext";
import {
  getChildren,
  getParents,
  updateRequestStatus,
} from "../../services/Childhomeservice";

const InitiateAdoptionRequest = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <ChildhomeSlider />
        </div>
        <main className="col-10 ms-auto p-4">
          <section>
            <Content />
          </section>
        </main>
      </div>
    </div>
  );
};

const Content = () => {
  const { user } = useAuth();
  const [children, setChildren] = useState([]);
  const [parents, setParents] = useState([]);
  const [selectedChildren, setSelectedChildren] = useState({});

  useEffect(() => {
    if (user) {
      const fetchParents = async () => {
        try {
          const parentData = await getParents(user);
          console.log(parentData);
          if (Array.isArray(parentData)) {
            setParents(parentData);
          } else {
            console.error("Unexpected response format:", parentData);
          }
        } catch (error) {
          console.error("Error fetching parents:", error);
        }
      };

      const fetchChildren = async () => {
        try {
          const data = await getChildren(user);
          console.log("Children Data:", data);
          if (Array.isArray(data)) {
            setChildren(data);
          } else {
            console.error("Unexpected response format:", data);
          }
        } catch (error) {
          console.error("Error fetching children:", error);
        }
      };

      fetchChildren();
      fetchParents();
    }
  }, [user]);

  const handleChildSelection = (parentId, childId) => {
    setSelectedChildren((prev) => ({
      ...prev,
      [parentId]: childId,
    }));
  };

  const handleSubmit = async (request) => {
    const childId = selectedChildren[request.id];

    if (!childId) {
      alert("Please select a child before submitting.");
      return;
    }

    const requestData = {
      email: request.p.u.email,
      childHomeId: user.id, // Child Home ID comes from logged-in user
      childId: childId,
    };

    try {
      const response = await updateRequestStatus(requestData, user);
      console.log("Update Response:", response);

      if (response) {
        alert("Request status updated successfully!");
      } else {
        alert("Failed to update request status.");
      }
    } catch (error) {
      console.error("Error updating request status:", error);
      alert("An error occurred while updating request status.");
    }
  };

  return (
    <div>
      <h2 className="text-center mb-4 text-primary">
        Initiate Adoption Request
      </h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-light">
            <tr>
              <th>Parent Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Child</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parents.map((request, index) => (
              <tr
                key={request.id}
                className={index % 2 === 0 ? "table-light" : "table-secondary"}
              >
                <td>{request.p.u.fname}</td>
                <td>{request.p.u.email}</td>
                <td>{request.p.u.mobile}</td>
                <td>
                  <select
                    className="form-select"
                    style={{ width: "200px" }}
                    onChange={(e) =>
                      handleChildSelection(request.id, e.target.value)
                    }
                  >
                    <option value="">Select a child</option>
                    {children.map((child) => (
                      <option key={child.id} value={child.id}>
                        {child.id} - {child.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleSubmit(request)}
                    className="btn btn-primary btn-sm"
                  >
                    Submit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InitiateAdoptionRequest;
