// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import { child, deleteChild } from "../../services/admin_services";
import { useAuth } from "../Authenticate/AuthContext";

// import AdminNavbar from "./adminNavbar";
// // import './card.css'; // Optional: For styling
// const AdminChild = () => {
//   return (
//     <div>
//       <AdminNavbar />
//       <div className="container ">
//         <div className="row">
//           {/* Sidebar */}
//           <aside className="col-2 bg-light shadow-lg position-fixed h-100">
//             <nav className="nav flex-column">
//               <Link className="nav-link active" to="/admin">
//                 Admin
//               </Link>
//               <Link className="nav-link" to="/admin/deletechild">
//                 Delete Child
//               </Link>
//               <Link className="nav-link" to="/admin/deleteparent">
//                 Delete Parent
//               </Link>
//             </nav>
//           </aside>

//           <main className="col-10 ab ">
//             <section>
//               <ChildHomeDetails />
//             </section>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminChild;

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../Admin/Admin_Slider.css";
import AdminSidebar from "./AdminSidebar";

const AdminChild = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSidebar />
        </div>
        <div className="col-10 ms-auto p-4">
          <ChildHomeDetails />
        </div>
      </div>
    </div>
  );
};

// Separated Form Component
function ChildHomeDetails() {
  const [items, setItems] = useState([]);
  const { user } = useAuth();
  const onLoadItems = async () => {
    const result = await child(user);
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
    const result = await deleteChild(id,user);
    if (result.message === "success") {
      toast.success("deleted");
      onLoadItems();
    } else {
      toast.error(result["error"]);
    }
  };
  return (
    <div className="container">
      <div>
        <h1 className="form-title text-primary">child home Details</h1>
      </div>
      {
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>ChildHome Name</th>
              <th>Manager Name</th>
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
                  <td>{item["houseName"]}</td>
                  <td>{item.u.fname}</td>
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

export default AdminChild;
