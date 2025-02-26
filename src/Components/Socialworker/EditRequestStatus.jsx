import React, { useState, useEffect } from "react";
import SocialworkerSlider from "./Socialworker_Slider";
import { useAuth } from "../Authenticate/AuthContext";
import {
  getAllRequest,
  changeStatus,
} from "../../services/SocialWorkerService";
const EditRequestStatus = () => {
  const { user } = useAuth();
  const [chStatus, setChStatus] = useState("");

  const [allData, setAllData] = useState([]);
  useEffect(() => {
    if (user) {
      const fecthData = async () => {
        const response = await getAllRequest(user);
        console.log(response);
        // console.log(response.id);
        setAllData(response);
      };

      fecthData();
    }
  }, [user]);

  const changeStatu = async (id, status) => {
    try {
      console.log(id);
      console.log(chStatus);
      const response = await changeStatus(id, status, user);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <SocialworkerSlider />
        </div>
        <div className="col-10 ms-auto p-4">
          <h2 className="text-center mb-4 text-primary">
            Initiate Adoption Request
          </h2>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="thead-light">
                <tr>
                  <th>Parent Id</th>
                  <th>Parent Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Addresse</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allData.map((request, index) => (
                  <tr
                    key={request.p.id}
                    className={
                      index % 2 === 0 ? "table-light" : "table-secondary"
                    }
                  >
                    <td>{request.p.id}</td>
                    <td>{request.p.u.fname}</td>
                    <td>{request.p.u.email}</td>
                    <td>{request.p.u.mobile}</td>
                    <td>{request.p.u.address.houseNo}</td>
                    <td className="text-center">
                      <button
                        onClick={() => {
                          changeStatu(request.id, "verified");
                        }}
                        className="btn btn-primary mx-2 p-2 btn-sm"
                      >
                        OK
                      </button>
                      <button
                        onClick={() => {
                          changeStatu(request.id, "rejected");
                        }}
                        className="btn btn-danger mx-2 p-2 btn-sm"
                      >
                        Rejected
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRequestStatus;
