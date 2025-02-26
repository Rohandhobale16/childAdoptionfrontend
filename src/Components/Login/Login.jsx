import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";
import { useAuth } from "../Authenticate/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginservice } from "../../services/Loginservice";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email.length === 0) {
      toast.warning("Please enter Email Id");
    } else if (password.length === 0) {
      toast.warning("Please enter Password");
    } else
      try {
        //Testing data
        // const data = {
        //   email: "om@gmail.com",
        //   password: "1234",
        //   userRole: "ROLE_CHILDHOME",
        //   id: "1",
        // };

        const response = await loginservice(email, password);
        // const response = data;
        console.log(response);
        if (response) {
          const userData = response;
          setUser(userData);

          if (userData.role === "ROLE_CHILDHOME") {
            navigate("/childHomeProfile");
          } else if (userData.role === "ROLE_ADMIN") {
            navigate("/admin");
          } else if (userData.role === "ROLE_PARENT") {
            navigate("/parent");
          } else if (userData.role === "ROLE_EMPLOYEE") {
            navigate("/socialWorkerProfile");
          }
        }
      } catch (error) {
        console.log("Login error:", error);
        toast.error("An error occurred during login.");
      }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <form onSubmit={handleLogin}>
          <h1 class="form-title text-primary">Sign In</h1>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-options">
            <a hidden href="/">
              Forgot Password?
            </a>
            <a hidden href="/">
              Register
            </a>
          </div>
          <button className="btn btn-primary" id="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
