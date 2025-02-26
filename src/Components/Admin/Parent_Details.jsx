import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deletes, homeC } from "../../services/admin_services";
import "../Admin/Admin_Slider.css";
import { useAuth } from "../Authenticate/AuthContext";
import AdminSidebar from "./AdminSidebar";

// import AdminNavbar from "./adminNavbar";
// import './card.css'; // Optional: For styling
const AdminParent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 ">
          <AdminSidebar />
        </div>

        <div className="col-10 ms-auto p-4">
          <ParentDetails />
        </div>
      </div>
    </div>
  );
};
function ParentDetails() {
  console.log("parent details calling");
  const [items, setItems] = useState([]);
    const { user } = useAuth();
  
  const onLoadItems = async () => {
    console.log("parent details calling");
    const result = await homeC(user);
    if (result!=null) {
      setItems(result);
    } else {
      toast.error("error");
    }
  };
  useEffect(() => {
    onLoadItems();
  }, []);
  const del = async (id) => {
    const result = await deletes(id,user);
    if (result.message === "success") {
      toast.success("deleted");
      onLoadItems();
    } else {
      toast.error("invalid id");
    }
  };
  return (
    <div>
      <div>
        <h1 className="form-title text-primary">Parent Details</h1>
      </div>
      {
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email id</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item["id"]}</td>
                  <td>{item.u.fname}</td>
                  <td>{item.u.lname}</td>
                  <td>{item.u.email}</td>
                  <td>{item.u.mobile}</td>
                  <td>
                    <button
                      onClick={() => del(item["id"])}
                      className="btn btn-danger btn-sm ms-2"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      }
    </div>
  );
}

export default AdminParent;
