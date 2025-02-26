import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import ChildhomeSlider from "./Childhome_Slider";
import { useAuth } from "../Authenticate/AuthContext";
import {
  getChildHomes,
  updateChildHome,
} from "../../services/Childhomeservice";

const EditHomeProfile = () => {
  const [id, setId] = useState();
  const [chilhomeName, setChilhomeName] = useState("");
  const [Houseno, setHouse] = useState("");
  const [Street, setStreet] = useState("");
  const [District, setDistrict] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Pincode, setPincode] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Managerfname, setManagerfname] = useState("");
  const [Managerlname, setManagerlname] = useState("");
  const [Bankaccountno, setBankaccountno] = useState("");
  const [Ifscno, setIfscno] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [InHome, setInHome] = useState("");
  const [Adaptable, setAdaptable] = useState("");
  const { user } = useAuth();
  console.log(
    id,
    chilhomeName,
    Houseno,
    Street,
    District,
    City,
    State,
    Pincode,
    Mobile,
    Managerfname,
    Managerlname,
    Bankaccountno,
    Ifscno,
    Email,
    Password,
    InHome,
    Adaptable,
    user
  );
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const response = await getChildHomes(user);
          const data = response;
          // console.log(data);
          setId(data.id);
          setChilhomeName(data.houseName);
          setHouse(data.u.address.houseNo);
          setStreet(data.u.address.street);
          setDistrict(data.u.address.district);
          setCity(data.u.address.city);
          setState(data.u.address.state);
          setPincode(data.u.address.pincode);
          setMobile(data.u.mobile);
          setManagerfname(data.u.fname);
          setManagerlname(data.u.lname);
          setBankaccountno(data.bankAccount);
          setIfscno(data.ifscCode);
          setEmail(data.u.email);
          setPassword(data.u.password);
          setInHome(data.inHome);
          setAdaptable(data.adoptable);
        } catch (error) {
          console.error("Error fetching data:", error);
          toast.error("Failed to fetch data");
        }
      }
    };

    fetchData();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(id);
    const updatedData = {
      houseName: chilhomeName,
      houseNo: Houseno,
      street: Street,
      district: District,
      city: City,
      state: State,
      pincode: Pincode,
      mobile: Mobile,
      fname: Managerfname,
      lname: Managerlname,
      bankAccount: Bankaccountno,
      ifscCode: Ifscno,
      email: Email,
      password: Password,
      inHome: InHome,
      adoptable: Adaptable,
    };

    try {
      const response = await updateChildHome(updatedData, user, id);
      if (response) {
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
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
              <h1 className="form-title text-primary">Update Profile </h1>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Child Home Name :</label>
                </div>
                <div className="input-group">
                  <input
                    className="form-control"
                    value={chilhomeName}
                    onChange={(e) => setChilhomeName(e.target.value)}
                    type="text"
                    name="childhomename"
                    id="childhomename"
                    placeholder="Child Home Name"
                  />
                </div>
                <div className="form-group">
                  <label>Addresse :</label>
                  <br />
                  <label>House No:</label>
                </div>
                <div className="input-group">
                  <input
                    className="form-control"
                    value={Houseno}
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
                    value={Street}
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
                    value={District}
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
                    value={City}
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
                    value={State}
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
                    value={Pincode}
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

                <div className="form-group">
                  <label>Contact No :</label>
                </div>
                <div className="input-group">
                  <input
                    value={Mobile}
                    className="form-control"
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                    type="number"
                    name="mobile"
                    id="mobile"
                    placeholder="Contact No "
                  />
                </div>
                <div className="form-group">
                  <label>Total Child Count :</label>
                </div>
                <div className="input-group">
                  <input
                    value={InHome}
                    className="form-control"
                    onChange={(e) => {
                      setInHome(e.target.value);
                    }}
                    type="number"
                    name="inhome"
                    id="inhome"
                    placeholder="Total Child Count "
                  />
                </div>
                <div className="form-group">
                  <label>Adoptable Child Count:</label>
                </div>
                <div className="input-group">
                  <input
                    value={Adaptable}
                    className="form-control"
                    onChange={(e) => {
                      setAdaptable(e.target.value);
                    }}
                    type="number"
                    name="adoptable"
                    id="adoptable"
                    placeholder="Adoptable Child Count "
                  />
                </div>
                <h1 className="form-title text-primary">Manager Details </h1>
                <div className="form-group">
                  <label>First Name:</label>
                </div>
                <div className="input-group">
                  <input
                    value={Managerfname}
                    className="form-control"
                    onChange={(e) => {
                      setManagerfname(e.target.value);
                    }}
                    type="text"
                    name="managerfname"
                    id="managerfname"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                </div>
                <div className="input-group">
                  <input
                    value={Managerlname}
                    className="form-control"
                    onChange={(e) => {
                      setManagerlname(e.target.value);
                    }}
                    type="text"
                    name="managerlname"
                    id="managerlname"
                    placeholder="Last Name"
                  />
                </div>

                <div className="form-group">
                  <label>Bank Account No:</label>
                </div>
                <div className="input-group">
                  <input
                    value={Bankaccountno}
                    className="form-control"
                    onChange={(e) => {
                      setBankaccountno(e.target.value);
                    }}
                    type="text"
                    name="bankaccountno"
                    id="bankaccountno"
                    placeholder="Bank Account No"
                  />
                </div>

                <div className="form-group">
                  <label>Ifsc Code:</label>
                </div>
                <div className="input-group">
                  <input
                    value={Ifscno}
                    className="form-control"
                    onChange={(e) => {
                      setIfscno(e.target.value);
                    }}
                    type="text"
                    name="ifscno"
                    id="ifscno"
                    placeholder="Ifsc No"
                  />
                </div>

                <div className="form-group">
                  <label>Email Id:</label>
                </div>
                <div className="input-group">
                  <input
                    value={Email}
                    className="form-control"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Id"
                  />
                </div>

                <div className="form-group">
                  <label>Password:</label>
                </div>
                <div className="input-group">
                  <input
                    value={Password}
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

                <center>
                  <button
                    // onClick={onRegister}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHomeProfile;
