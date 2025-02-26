import React, { useState } from "react";
import ChildhomeSlider from "./Childhome_Slider";
import { AddChild } from "../../services/Childhomeservice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authenticate/AuthContext";

const AddChildForm = () => {
  const { user } = useAuth();
  const navigator = useNavigate();
  const [childData, setChildData] = useState({
    name: "",
    gender: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChildData({ ...childData, [name]: value });
  };

  // const handleFileChange = (e) => {
  //   setChildData({ ...childData, photo: e.target.files[0] });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: childData.name,
      gender: childData.gender,
      // age: parseInt(childData.age),
      age: childData.age,
      ch: user.id,
    };

    try {
      const result = await AddChild(data, user); // Send the data object
      if (result && result.status === 200) {
        toast.success("Child Added Successfully");
        navigator("/childHome");
      }
    } catch (error) {
      toast.error("An error occurred during child addition.");
      console.log("Add child error:", error);
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
              <h1 className="form-title text-primary">Add Child </h1>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={childData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="gender" className="form-label">
                    Gender:
                  </label>
                </div>
                <div className="input-group">
                  <select
                    className="form-select"
                    id="gender"
                    name="gender"
                    value={childData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="age" className="form-label">
                    Age:
                  </label>
                </div>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    name="age"
                    value={childData.age}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* <div hidden className="form-group">
                  <label htmlFor="photo" className="form-label">
                    Photo:
                  </label>
                </div>
                <div className="input-group">
                  <input
                    hidden
                    type="file"
                    className="form-control"
                    id="photo"
                    name="photo"
                    onChange={handleFileChange}
                  />
                </div> */}

                <button type="submit" className="btn btn-primary">
                  Add Child
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddChildForm;
