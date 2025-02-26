import React, { useState } from "react";
import "../Registration/Registration.css";
import { toast } from "react-toastify";
import ChildhomeSlider from "../ChildHome/Childhome_Slider";
import { useAuth } from "../Authenticate/AuthContext";
import { registerSocialworker } from "../../services/SocialWorkerService";
import { useNavigate } from "react-router-dom";

const SocialWorkerRegistration = () => {
  const navigator = useNavigate();
  const { user } = useAuth();
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [houseNo, setHouse] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !fname ||
      !lname ||
      !email ||
      !mobile ||
      !password ||
      !houseNo ||
      !street ||
      !district ||
      !city ||
      !state ||
      !pincode
    ) {
      toast.warning("All fields are required.");
      return;
    }
    console.log(user.id);
    const chId = user.id;
    const employeeData = {
      fname,
      lname,
      mobile,
      email,
      password,
      houseNo,
      street,
      district,
      state,
      pincode,
      city,
      chId,
    };
    console.log(employeeData);
    debugger;
    try {
      const result = await registerSocialworker(employeeData, user);
      console.log(result);
      if (result.message === "success") {
        toast.success("Social Worker Registered Successfully");
        navigator("/childHome");
      } else {
        toast.error("Registration Failed");
      }
    } catch (error) {
      toast.error("An error occurred during registration.");
      console.error("Registration error:", error);
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
              <h1 className="form-title text-primary">
                Social Worker Registration
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="first_name" className="form-label">
                    First Name:
                  </label>
                </div>
                <div className="input-group">
                  <input
                    placeholder="First Name"
                    type="text"
                    id="first_name"
                    name="first_name"
                    onChange={(e) => {
                      setfname(e.target.value);
                    }}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="last_name" className="form-label">
                    Last Name:
                  </label>
                </div>
                <div className="input-group">
                  <input
                    placeholder="Last Name"
                    type="text"
                    id="last_name"
                    name="last_name"
                    onChange={(e) => {
                      setlname(e.target.value);
                    }}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                </div>
                <div className="input-group">
                  <input
                    placeholder="Email Id"
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Mobile No:
                  </label>
                </div>
                <div className="input-group">
                  <input
                    placeholder="Mobile No."
                    type="tel"
                    id="mobile"
                    name="mobile"
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setHouse(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setStreet(e.target.value);
                    }}
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
                    className="form-control"
                    onChange={(e) => {
                      setDistrict(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setPincode(e.target.value);
                    }}
                    type="number"
                    name="pincode"
                    id="pincode"
                    placeholder="Pincode "
                  />
                </div>

                <button type="submit" className="btn btn-primary ">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialWorkerRegistration;
