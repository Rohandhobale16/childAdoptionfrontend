import React, { useEffect, useState } from "react";
import { getChildList } from "../../services/Childhomeservice";

const ChildHomeTable = () => {
  const [childHomes, setChildHomes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchData = await getChildList();
      setChildHomes(fetchData);
    }

    fetchData();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Child Homes List</h2>
      <table className="table table-bordered table-hover table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>ID</th>
            <th>Child Home Name</th>
            <th>State</th>
            <th>Address</th>
            <th>Contact Details</th>
          </tr>
        </thead>
        <tbody>
          {childHomes.map((home, index) => (
            <tr key={home.id || index} className="text-dark">
              <td>{index + 1}</td>
              <td>{home.houseName}</td>
              <td>{home.u.address.state}</td>
              <td>
                {home.u.address.state +
                  " " +
                  home.u.address.houseNo +
                  " " +
                  home.u.address.street +
                  " " +
                  home.u.address.city}
              </td>
              <td>{home.u.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChildHomeTable;
