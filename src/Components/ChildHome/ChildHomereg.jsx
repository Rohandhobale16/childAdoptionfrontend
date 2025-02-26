import React, { useState } from "react";
import "../Registration/Registration.css";
import { toast } from "react-toastify";
import { registerChildhome } from "../../services/registration";
import { useNavigate } from "react-router-dom";

const ChildHomeReg = () => {
  const nevigate = useNavigate();
  const [houseName, setChilhomeName] = useState("");
  const [houseNo, setHouse] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [mobile, setMobile] = useState("");
  const [fname, setManagerfname] = useState("");
  const [lname, setManagerlname] = useState("");
  const [bankAccount, setBankaccountno] = useState("");
  const [ifscCode, setIfscno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inHome, setInHome] = useState("");
  const [adoptable, setAdaptable] = useState("");

  const onRegister = async () => {
    const role = "ROLE_CHILDHOME";
    if (houseName.length === 0) {
      toast.warning("Please enter Child Home Name");
    } else if (mobile.length === 0) {
      toast.warning("Please enter Mobile NO");
    } else if (email.length === 0) {
      toast.warning("Please enter Email");
    } else if (houseNo.length === 0) {
      toast.warning("Please enter Houseno");
    } else if (street.length === 0) {
      toast.warning("Please enter Street");
    } else if (district.length === 0) {
      toast.warning("Please enter District");
    } else if (city.length === 0) {
      toast.warning("Please enter City");
    } else if (state.length === 0) {
      toast.warning("Please enter State");
    } else if (pincode.length === 0) {
      toast.warning("Please enter pincode");
    } else if (fname.length === 0) {
      toast.warning("Please enter Manager First first name");
    } else if (lname.length === 0) {
      toast.warning("Please enter Manager First last name");
    } else if (bankAccount.length === 0) {
      toast.warning("Please enter Bank Account No");
    } else if (ifscCode.length === 0) {
      toast.warning("Please enter IFSC code");
    } else if (password.length === 0) {
      toast.warning("Please enter Bank Account No");
    } else if (inHome.length === 0) {
      toast.warning("Please enter Total Child Count");
    } else if (adoptable.length === 0) {
      toast.warning("Please enter Adoptable child count");
    } else {
      const result = await registerChildhome(
        houseNo,
        street,
        district,
        state,
        pincode,
        city,
        houseName,
        inHome,
        adoptable,
        fname,
        lname,
        mobile,
        email,
        password,
        role,
        bankAccount,
        ifscCode
      );
      // console.log(result.message);
      if (result && result.message === "success") {
        toast.success("Registration Successfull");
        nevigate("/");
      } else {
        toast.error("Registration Failed");
      }
    }
  };

  console.log(
    houseNo,
    street,
    district,
    state,
    pincode,
    city,
    houseName,
    inHome,
    adoptable,
    fname,
    lname,
    mobile,
    email,
    password,
    bankAccount,
    ifscCode
  );

  return (
    <div className="container_background">
      <div className="registration-container">
        <h1 className="form-title text-primary">Child Home Registration </h1>

        <form>
          <div className="form-group">
            <label>Child Home Name :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setChilhomeName(e.target.value);
              }}
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

          <div className="form-group">
            <label>Contact No :</label>
          </div>
          <div className="input-group">
            <input
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
              onClick={onRegister}
              type="button"
              className="btn btn-primary"
            >
              Submit
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default ChildHomeReg;
