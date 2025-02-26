import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { feedback } from "../../services/admin_services";
import "../Admin/Admin_Slider.css";
import { useAuth } from "../Authenticate/AuthContext";
import AdminSidebar from "./AdminSidebar";

// import './card.css'; // Optional: For styling

const Feedback = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSidebar />
        </div>
        <div className="col-10 ms-auto p-4">
          <Content />
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <main className="col-10 ms-auto ">
        <section>
          <CardComponent />
        </section>
      </main>
    </div>
  );
};
const CardComponent = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const { user } = useAuth();

  const onLoadItems = async () => {
    const result = await feedback(id,user);
    if (result.message === "success") {
      setItems(result);
    } else {
      toast.error(result["error"]);
    }
  };
  useEffect(() => {
    console.log(id);
    onLoadItems();
  }, []);
  return (
    <div className="card ">
      <h2>Request ID: {items.id}</h2>
      <p>Description: {items.feedback}</p>
    </div>
  );
};

export default Feedback;
