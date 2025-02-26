import { useState } from "react";
import "./Registration.css";
// import { register } from "../../Routes/Applicationrouter";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register1, register2 } from "../../services/registration";
// import { FaUser, FaLock } from "react-icons/fa";

const ParentRegistration = () => {
  const navigate = useNavigate();

  const [marrigeStatus, setMaterial] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [occupation, setOccupation] = useState("");
  const [aadhar, setAdhar] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [income, setIncome] = useState("");
  const [houseNo, setHouse] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [partnerfname, setPartnerfname] = useState("");
  const [partnerlname, setPartnerlname] = useState("");
  const [partnergender, setPartnergender] = useState("");
  const [partnerdob, setPartnerdob] = useState("");
  const [partneraadhar, setPartneradhar_no] = useState("");
  const [partnermobile, setPartnermobile] = useState("");
  const [partneremail, setPartneremail] = useState("");
  const [partnerincome, setPartnerincome] = useState("");
  const [partneroccupation, setPartneroccupation] = useState("");
  const [partnernationality, setPartnernationality] = useState("");

  const onRegister = async () => {
    if (marrigeStatus.length === 0) {
      toast.warning("Please select material");
    } else if (marrigeStatus === "Married") {
      setPartnergender(gender === "Male" ? "Female" : "Male");
      if (fname.length === 0) {
        toast.warning("Please enter first name");
      } else if (lname.length === 0) {
        toast.warning("Please enter last name");
      } else if (gender.length === 0) {
        toast.warning("Please Select Gender");
      } else if (nationality.length === 0) {
        toast.warning("Please enter Nationality");
      } else if (password.length === 0) {
        toast.warning("Please enter Age");
      } else if (dob.length === 0) {
        toast.warning("Please enter  Birth Date");
      } else if (occupation.length === 0) {
        toast.warning("Please enter Occupation");
      } else if (aadhar.length === 0) {
        toast.warning("Please enter Adhar no");
      } else if (mobile.length === 0) {
        toast.warning("Please enter Mobile NO");
      } else if (email.length === 0) {
        toast.warning("Please enter Email");
      } else if (income.length === 0) {
        toast.warning("Please enter Income");
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
      } else if (partnerfname.length === 0) {
        toast.warning("Please enter Partner last name");
      } else if (partnerlname.length === 0) {
        toast.warning("Please enter Partner last name");
      } else if (partneraadhar.length === 0) {
        toast.warning("Please enter Partner Adhar No");
      } else if (partnerdob.length === 0) {
        toast.warning("Please enter Partner Birth Date");
      } else if (partnermobile.length === 0) {
        toast.warning("Please enter Partner Mobile No ");
      } else if (partneremail.length === 0) {
        toast.warning("Please enter Partner Email");
      } else if (partnerincome.length === 0) {
        toast.warning("Please enter Partner  Income");
      } else if (partneroccupation.length === 0) {
        toast.warning("Please select Partner Occupation");
      } else if (partnernationality.length === 0) {
        toast.warning("Please select Partner Nationality");
      } else if (partneraadhar.length === 0) {
        toast.warning("Please enter Partner Adhar No");
      } else {
        // call register function to consume register API
        const result = await register1(
          marrigeStatus,
          fname,
          lname,
          gender,
          nationality,
          dob,
          occupation,
          aadhar,
          mobile,
          email,
          income,
          houseNo,
          street,
          district,
          city,
          state,
          pincode,
          partnerfname,
          partnerlname,
          partnergender,
          partnerdob,
          partneraadhar,
          partnermobile,
          partneremail,
          partnerincome,
          partneroccupation,
          partnernationality,
          password
        );
        if (result.message === "success") {
          toast.success("Registration Successfull");
          navigate("/");
        } else {
          toast.error("Registration Failed");
        }
      }
    } else {
      if (fname.length === 0) {
        toast.warning("Please enter first name");
      } else if (lname.length === 0) {
        toast.warning("Please enter last name");
      } else if (gender.length === 0) {
        toast.warning("Please Select Gender");
      } else if (nationality.length === 0) {
        toast.warning("Please enter Nationality");
      } else if (password.length === 0) {
        toast.warning("Please enter Age");
      } else if (dob.length === 0) {
        toast.warning("Please enter  Birth Date");
      } else if (occupation.length === 0) {
        toast.warning("Please enter Occupation");
      } else if (aadhar.length === 0) {
        toast.warning("Please enter Adhar no");
      } else if (mobile.length === 0) {
        toast.warning("Please enter Mobile NO");
      } else if (email.length === 0) {
        toast.warning("Please enter Email");
      } else if (income.length === 0) {
        toast.warning("Please enter Income");
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
      } else {
        const result = await register2(
          marrigeStatus,
          fname,
          lname,
          gender,
          nationality,
          dob,
          occupation,
          aadhar,
          mobile,
          email,
          income,
          houseNo,
          street,
          district,
          city,
          state,
          pincode,
          password
        );
        if ((result.message = "success")) {
          toast.success("Registration Successfull");
          navigate("/");
        } else {
          toast.error("Registration Failed");
        }
      }
    }
  };

  // console.log(
  //   marrigeStatus,
  //   fname,
  //   lname,
  //   Gender,
  //   Nationality,
  //   Age,
  //   Dob,
  //   Occupation,
  //   Adhar,
  //   Mobile,
  //   Email,
  //   Income,
  //   Houseno,
  //   Street,
  //   District,
  //   City,
  //   State,
  //   Pincode,
  //   Partnerfname,
  //   Partnerlname,
  //   Partnergender,
  //   Partnerdob,
  //   Partneradhar_no,
  //   Partnermobile,
  //   Partneremail,
  //   Partnerincome,
  //   Partneroccupation,
  //   Partnerage,
  //   Partnernationality
  // );

  return (
    <div className="container_background">
      <div className="registration-container">
        <h1 className="form-title text-primary">Parent Registration</h1>

        <form>
          <h3>Marital Detail </h3>

          <div className="form-group">
            <label>Material Status :</label>
          </div>
          <div className="form-group">
            <select
              onChange={(e) => {
                setMaterial(e.target.value);
              }}
              name="material_status"
              id="material_status"
            >
              <option value="" selected="selected" disabled="disabled">
                -- select one --
              </option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Widowed">Widowed</option>
              <option value="Separated">Separated</option>
              <option value="Divorced">Divorced</option>
            </select>
          </div>

          <div className="form-group">
            <label>Applicant Gender :</label>
          </div>
          <div className="form-group">
            <select
              onChange={(e) => {
                setGender(e.target.value);
              }}
              name="applicant_gender"
              id="applicant_gender"
            >
              <option value="" selected="selected" disabled="disabled">
                -- select one --
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <h3>
              Personal Information :{gender === "Male" ? "Male" : "Female"}
            </h3>
          </div>

          <div className="form-group">
            <label>First Name :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setfname(e.target.value);
              }}
              type="text"
              name="first_name"
              id="first_name"
              placeholder="First Name"
            />
          </div>

          <div className="form-group">
            <label>Last Name :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setlname(e.target.value);
              }}
              type="text"
              name="last_name"
              id="last_name"
            />
          </div>

          <div className="form-group">
            <label>Nationality :</label>
          </div>
          <div className="form-group">
            <select
              onChange={(e) => {
                setNationality(e.target.value);
              }}
              name="nationality"
              id="nationality"
            >
              <option value="">-- select one --</option>
              <option value="Indian">Indian</option>
              <option value="NRI">NRI</option>
            </select>
          </div>

          <div className="form-group">
            <label>Date Of Birth :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              name="date"
              id="date"
              onChange={(e) => {
                setDob(e.target.value);
              }}
              type="date"
            />
          </div>
          <div className="form-group">
            <label>Occupation :</label>
          </div>
          <div className="form-group">
            <select
              onChange={(e) => {
                setOccupation(e.target.value);
              }}
              name="occupation"
              id="occupation"
            >
              <option value="" selected="selected" disabled="disabled">
                -- select one --
              </option>
              <optgroup label="Healthcare Practitioners and Technical Occupations:">
                <option value="Chiropractor">- Chiropractor</option>
                <option value="Dentist">- Dentist</option>
                <option value="Dietitian or Nutritionist">
                  - Dietitian or Nutritionist
                </option>
                <option value="Optometrist">- Optometrist</option>
                <option value="Pharmacist">- Pharmacist</option>
                <option value="Physician">- Physician</option>
                <option value="Physician Assistant">
                  - Physician Assistant
                </option>
                <option value="Podiatrist">- Podiatrist</option>
                <option value="Registered Nurse">- Registered Nurse</option>
                <option value="Therapist">- Therapist</option>
                <option value="Veterinarian">- Veterinarian</option>
                <option value="Health Technologist or Technician">
                  - Health Technologist or Technician
                </option>
              </optgroup>

              <optgroup label="Business, Executive, Management, and Financial Occupations:">
                <option value="Chief Executive">- Chief Executive</option>
                <option value="Construction Manager">
                  - Construction Manager
                </option>
                <option value="Engineering Manager">
                  - Engineering Manager
                </option>
                <option value="Accountant">- Accountant</option>
                <option value="Business Owner5">- Business Owner</option>
              </optgroup>
              <optgroup label="Architecture and Engineering Occupations:">
                <option value="Surveyor,Surveyor or Cartographer">
                  - Architect, Surveyor, or Cartographer
                </option>
                <option value="Engineer">- Engineer</option>
              </optgroup>
              <optgroup label="Education, Training, and Library Occupations:">
                <option value="Postsecondary Teacher">
                  - Postsecondary Teacher (e.g., College Professor)
                </option>

                <option value="Other Teacher">
                  - Other Teacher or Instructor
                </option>
              </optgroup>

              <optgroup label="Services Occupations:">
                <option value="Chef or Head Cook">- Chef or Head Cook</option>

                <option value="Sales Supervisor, Retail Sales">
                  - Sales Supervisor, Retail Sales
                </option>
                <option value="Retail Sales Worker">
                  - Retail Sales Worker
                </option>
                <option value="Insurance Sales Agent">
                  - Insurance Sales Agent
                </option>
                <option value="Sales Representative">
                  - Sales Representative
                </option>
                <option value="Real Estate Sales Agent">
                  - Real Estate Sales Agent
                </option>
                <option value="Other Services Occupation">
                  - Other Services Occupation
                </option>
              </optgroup>
              <optgroup label="Agriculture, Maintenance, Repair, and Skilled Crafts Occupations:">
                <option value="Construction and Extraction">
                  - Construction and Extraction (e.g., Construction Laborer,
                  Electrician)
                </option>
                <option value="Farming, Fishing, and Forestry">
                  - Farming, Fishing, and Forestry
                </option>
                <option value="Installation, Maintenance, and Repair">
                  - Installation, Maintenance, and Repair
                </option>
                <option value="Production Occupations">
                  - Production Occupations
                </option>
              </optgroup>

              <optgroup label="Other Occupations:">
                <option value="Military">- Military</option>
                <option value="Homemaker">- Homemaker</option>
                <option value="Other Occupation">- Other Occupation</option>
              </optgroup>
            </select>
          </div>

          <div className="form-group">
            <label>Adhar Card No :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setAdhar(e.target.value);
              }}
              type="number"
              name="adhar_card_no"
              id="adhar"
            ></input>
          </div>
          <div className="form-group">
            <label>Mobile No :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
              type="number"
              name="mobile_no"
              id="mobile"
            ></input>
          </div>

          <div className="form-group">
            <label>Annual Income :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setIncome(e.target.value);
              }}
              type="number"
            ></input>
          </div>

          <div className="form-group">
            <label>Email ID :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
            ></input>
          </div>
          <div className="form-group">
            <label>Password :</label>
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
            />
          </div>

          <h3>Address :</h3>

          <div className="form-group">
            <label>House No :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setHouse(e.target.value);
              }}
              type="text"
            ></input>
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
            ></input>
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
            ></input>
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
            ></input>
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
            ></input>
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
            ></input>
          </div>

          {marrigeStatus === "Married" ? (
            <div>
              <h3>
                Personal Information :{gender === "Male" ? "Female" : "Male"}
              </h3>

              <div className="form-group">
                <label>First Name</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  onChange={(e) => {
                    setPartnerfname(e.target.value);
                    setPartnergender(gender === "Male" ? "Female" : "Male");
                  }}
                  type="text"
                  name="first_name"
                  id="first_name"
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  onChange={(e) => {
                    setPartnerlname(e.target.value);
                  }}
                  type="text"
                  name="last_name"
                  id="last_name"
                />
              </div>

              <div className="form-group">
                <label>Nationality :</label>
              </div>
              <div className="form-group">
                <select
                  onChange={(e) => {
                    setPartnernationality(e.target.value);
                  }}
                  name="nationality"
                  id="nationality"
                >
                  <option value="">-- select one --</option>
                  <option value="Indian">Indian</option>
                  <option value="NRI">NRI</option>
                </select>
              </div>

              <div className="form-group">
                <label>Date Of Birth :</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  onChange={(e) => {
                    setPartnerdob(e.target.value);
                  }}
                  type="date"
                ></input>
              </div>
              <div className="form-group">
                <label>Occupation :</label>
              </div>
              <div className="form-group">
                <select
                  onChange={(e) => {
                    setPartneroccupation(e.target.value);
                  }}
                  name="occupation"
                  id="occupation"
                >
                  <option value="" selected="selected" disabled="disabled">
                    -- select one --
                  </option>
                  <optgroup label="Healthcare Practitioners and Technical Occupations:">
                    <option value="Chiropractor">- Chiropractor</option>
                    <option value="Dentist">- Dentist</option>
                    <option value="Dietitian or Nutritionist">
                      - Dietitian or Nutritionist
                    </option>
                    <option value="Optometrist">- Optometrist</option>
                    <option value="Pharmacist">- Pharmacist</option>
                    <option value="Physician">- Physician</option>
                    <option value="Physician Assistant">
                      - Physician Assistant
                    </option>
                    <option value="Podiatrist">- Podiatrist</option>
                    <option value="Registered Nurse">- Registered Nurse</option>
                    <option value="Therapist">- Therapist</option>
                    <option value="Veterinarian">- Veterinarian</option>
                    <option value="Health Technologist or Technician">
                      - Health Technologist or Technician
                    </option>
                  </optgroup>

                  <optgroup label="Business, Executive, Management, and Financial Occupations:">
                    <option value="Chief Executive">- Chief Executive</option>
                    <option value="Construction Manager">
                      - Construction Manager
                    </option>
                    <option value="Engineering Manager">
                      - Engineering Manager
                    </option>
                    <option value="Accountant">- Accountant</option>
                    <option value="Business Owner5">- Business Owner</option>
                  </optgroup>
                  <optgroup label="Architecture and Engineering Occupations:">
                    <option value="Surveyor,Surveyor or Cartographer">
                      - Architect, Surveyor, or Cartographer
                    </option>
                    <option value="Engineer">- Engineer</option>
                  </optgroup>
                  <optgroup label="Education, Training, and Library Occupations:">
                    <option value="Postsecondary Teacher">
                      - Postsecondary Teacher (e.g., College Professor)
                    </option>

                    <option value="Other Teacher">
                      - Other Teacher or Instructor
                    </option>
                  </optgroup>

                  <optgroup label="Services Occupations:">
                    <option value="Chef or Head Cook">
                      - Chef or Head Cook
                    </option>

                    <option value="Sales Supervisor, Retail Sales">
                      - Sales Supervisor, Retail Sales
                    </option>
                    <option value="Retail Sales Worker">
                      - Retail Sales Worker
                    </option>
                    <option value="Insurance Sales Agent">
                      - Insurance Sales Agent
                    </option>
                    <option value="Sales Representative">
                      - Sales Representative
                    </option>
                    <option value="Real Estate Sales Agent">
                      - Real Estate Sales Agent
                    </option>
                    <option value="Other Services Occupation">
                      - Other Services Occupation
                    </option>
                  </optgroup>
                  <optgroup label="Agriculture, Maintenance, Repair, and Skilled Crafts Occupations:">
                    <option value="Construction and Extraction">
                      - Construction and Extraction (e.g., Construction Laborer,
                      Electrician)
                    </option>
                    <option value="Farming, Fishing, and Forestry">
                      - Farming, Fishing, and Forestry
                    </option>
                    <option value="Installation, Maintenance, and Repair">
                      - Installation, Maintenance, and Repair
                    </option>
                    <option value="Production Occupations">
                      - Production Occupations
                    </option>
                  </optgroup>

                  <optgroup label="Other Occupations:">
                    <option value="Military">- Military</option>
                    <option value="Homemaker">- Homemaker</option>
                    <option value="Other Occupation">- Other Occupation</option>
                  </optgroup>
                </select>
              </div>

              <div className="form-group">
                <label>Adhar Card No :</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  onChange={(e) => {
                    setPartneradhar_no(e.target.value);
                  }}
                  type="number"
                  name="adhar_card_no"
                  id="adhar"
                ></input>
              </div>
              <div className="form-group">
                <label>Mobile No :</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  onChange={(e) => {
                    setPartnermobile(e.target.value);
                  }}
                  type="number"
                  name="mobile_no"
                  id="mobile"
                ></input>
              </div>

              <div className="form-group">
                <label>Email ID :</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  onChange={(e) => {
                    setPartneremail(e.target.value);
                  }}
                  type="email"
                ></input>
              </div>
              <div className="form-group">
                <label>Annual Income :</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  onChange={(e) => {
                    setPartnerincome(e.target.value);
                  }}
                  type="text"
                ></input>
              </div>
            </div>
          ) : null}

          {/* <div className="col" rowspan="2" style={{ textAlign: "center" }}> */}
          <center>
            <button
              onClick={onRegister}
              type="button"
              className="btn  btn-primary"
            >
              Submit
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};
export default ParentRegistration;
