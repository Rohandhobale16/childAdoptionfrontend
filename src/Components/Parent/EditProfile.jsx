import React, { useState, useEffect, useCallback } from "react";
import Parent_Slider from "./Parent_Slider";
import "../Parent/Parent_Slider.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authenticate/AuthContext";
import { createUrl } from "../../util";

const EditProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
   const url = createUrl(`api/parent/profile/${user.id}`);

  const [formData, setFormData] = useState({
    material: "",
    fname: "",
    lname: "",
    gender: "",
    dob: "",
    occupation: "",
    email: "",
    income: "",
    houseNo: "",
    street: "",
    district: "",
    city: "",
    state: "",
    pincode: "",
    partner: {
      fname: "",
      lname: "",
      gender: "",
      dob: "",
      email: "",
      income: "",
      occupation: "",
    },
  });

  // Fetch user profile data
  const fetchProfile = useCallback(async () => {
    try {
      const response = await fetch(
        url,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.jwt}`,
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch profile data");
      }

      const data = await response.json();

      // Map API response to formData structure
      setFormData({
        material: data.marriageStatus || "",
        fname: data.fname || "",
        lname: data.lname || "",
        gender: data.gender || "",
        dob: data.dob || "",
        occupation: data.occupation || "",
        email: data.email || "",
        income: data.annualIncome ? data.annualIncome.toString() : "",
        houseNo: data.houseNo || "",
        street: data.street || "",
        district: data.district || "",
        city: data.city || "",
        state: data.state || "",
        pincode: data.pincode || "",
        partner: {
          fname: data.partnerFname || "",
          lname: data.partnerLname || "",
          gender: data.partnerGender || "",
          dob: data.partnerDob || "",
          email: data.partnerEmail || "",
          income: data.partnerIncome ? data.partnerIncome.toString() : "",
          occupation: data.partnerOccupation || "",
        },
      });
    } catch (error) {
      toast.error("Error fetching profile data");
    } finally {
      setLoading(false);
    }
  }, [user.id, user.jwt]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("partner_")) {
      setFormData((prev) => ({
        ...prev,
        partner: { ...prev.partner, [name.split("_")[1]]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateFields = () => {
    const requiredFields = [
      "fname",
      "lname",
      "gender",
      "dob",
      "occupation",
      "email",
      "income",
      "houseNo",
      "street",
      "district",
      "city",
      "state",
      "pincode",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        toast.warning(
          `Please enter ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`
        );
        return false;
      }
    }

    if (formData.material === "Married") {
      const partnerFields = ["fname", "lname", "dob", "email", "income", "occupation"];
      for (const field of partnerFields) {
        if (!formData.partner[field]) {
          toast.warning(
            `Please enter partner's ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`
          );
          return false;
        }
      }
    }

    return true;
  };

  const onUpdateProfile = async () => {
    if (!validateFields()) return;

    try {
      const response = await fetch(
       url,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.jwt}`,
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );
    
      const result = response.headers.get("content-type")?.includes("application/json")
        ? await response.json()
        : {};
    
      if (response.ok && result.message === "success") {
        toast.success("Profile Updated Successfully");
        navigate("/");
      } else {
        throw new Error(result.message || "Update Failed");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
    
  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Parent_Slider />
        </div>
        <div className="col-10 ms-auto p-4">
          <div className="container_background">
            <div className="registration-container">
              <h1 className="form-title text-primary">Edit Profile</h1>
              <form>
                <h3>Marital Detail</h3>
                <div className="form-group">
                  <label>Marital Status:</label>
                  <select name="material" value={formData.material} onChange={handleChange}>
                    <option value="" disabled>-- select one --</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                  </select>
                </div>

                <h3>Personal Information</h3>
                {["fname", "lname", "dob", "occupation", "email", "income", "houseNo", "street", "district", "city", "state", "pincode"].map((field) => (
                  <div className="form-group" key={field}>
                    <label>{field.replace(/([A-Z])/g, " $1")}:</label>
                    <input className="form-control" type={field === "dob" ? "date" : "text"} name={field} value={formData[field]} onChange={handleChange} />
                  </div>
                ))}

                {formData.material === "Married" && (
                  <>
                    <h3>Partner Information</h3>
                    {["fname", "lname", "dob", "email", "income", "occupation"].map((field) => (
                      <div className="form-group" key={`partner_${field}`}>
                        <label>Partner {field}:</label>
                        <input className="form-control" type={field === "dob" ? "date" : "text"} name={`partner_${field}`} value={formData.partner[field]} onChange={handleChange} />
                      </div>
                    ))}
                  </>
                )}

                <center>
                  <button onClick={onUpdateProfile} type="button" className="btn btn-primary">Update</button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
