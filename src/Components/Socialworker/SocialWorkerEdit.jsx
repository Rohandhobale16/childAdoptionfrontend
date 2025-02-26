import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SocialworkerSlider from "./Socialworker_Slider";
import { useAuth } from "../Authenticate/AuthContext";
import { toast } from "react-toastify";
import {
  getSocialworkerProfile,
  updateSocialworker,
} from "../../services/SocialWorkerService";

const SocialWorkerEdit = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <SocialworkerSlider />
        </div>

        <div className="col-10 ms-auto p-4">
          <Content />
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    password: "",
    houseNo: "",
    street: "",
    district: "",
    state: "",
    pincode: "",
    city: "",
    id: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      debugger;
      if (user) {
        try {
          const response = await getSocialworkerProfile(user);
          const data = response;
          console.log(data);

          setFormData((prevData) => ({
            ...prevData,
            fname: data.u.fname,
            lname: data.u.lname,
            mobile: data.u.mobile,
            email: data.u.email,
            password: data.u.password,
            houseNo: data.u.address.houseNo,
            street: data.u.address.street,
            district: data.u.address.district,
            state: data.u.address.state,
            pincode: data.u.address.pincode,
            city: data.u.address.city,
            id: data.id,
          }));
        } catch (error) {
          console.error("Error fetching data:", error);
          // toast.error("Failed to fetch data");
        }
      }
    };

    fetchData();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateSocialworker(formData.id, formData, user);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <div>
      <h2 className="text-center text-primary mb-4">
        Edit Social Worker Details
      </h2>
      <form
        onSubmit={handleSubmit}
        className="shadow-lg p-4 rounded-lg bg-light"
      >
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
        </div>
        <div className="input-group">
          <input
            className="form-control"
            onChange={handleChange}
            value={formData.password}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Mobile No:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.mobile}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>Addresse</label>
          <br />
          <label>House No:</label>
        </div>
        <div className="input-group">
          <input
            className="form-control"
            value={formData.houseNo}
            onChange={handleChange}
            type="text"
            name="houseno"
            id="houseno"
            placeholder="House Number"
          />
        </div>

        <div className="form-group">
          <label>Street :</label>
        </div>
        <div className="input-group">
          <input
            className="form-control"
            value={formData.street}
            onChange={handleChange}
            type="text"
            name="street"
            id="street"
            placeholder="Street "
          />
        </div>

        <div className="form-group">
          <label>District :</label>
        </div>
        <div className="input-group">
          <input
            value={formData.district}
            className="form-control"
            onChange={handleChange}
            type="text"
            name="district"
            id="district"
            placeholder="District "
          />
        </div>

        <div className="form-group">
          <label>City :</label>
        </div>
        <div className="input-group">
          <input
            className="form-control"
            value={formData.city}
            onChange={handleChange}
            type="text"
            name="city"
            id="city"
            placeholder="City "
          />
        </div>
        <div className="form-group">
          <label>State :</label>
        </div>
        <div className="input-group">
          <input
            className="form-control"
            value={formData.state}
            onChange={handleChange}
            type="text"
            name="state"
            id="state"
            placeholder="State "
          />
        </div>

        <div className="form-group">
          <label>Pincode :</label>
        </div>
        <div className="input-group">
          <input
            className="form-control"
            value={formData.pincode}
            onChange={handleChange}
            type="number"
            name="pincode"
            id="pincode"
            placeholder="Pincode "
          />
        </div>
        {/* 
        <div className="mb-3">
          <label hiddden htmlFor="childhomeid" className="form-label">
            Child Home ID:
          </label>
          <input
            hiddden
            type="text"
            id="childhomeid"
            name="childhomeid"
            value={formData.childhomeid}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div> */}

        <button type="submit" className="btn btn-primary w-100 mt-3">
          Update
        </button>
      </form>
    </div>
  );
};

export default SocialWorkerEdit;
