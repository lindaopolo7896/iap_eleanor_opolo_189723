import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import "../styles/signup.css";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.role) {
      newErrors.role = "Role is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate first
    let validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setServerMessage("Registering...");

    try {
      const response = await fetch(
        "http://localhost/IAP_ELEANOR_OPOLO_189723-1/backend/register.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log(data);

      if (data.status === "success") {
        setServerMessage("Registration successful! Check your email.");
      } else {
        setServerMessage("error " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setServerMessage("Server error. Please try again later.");
    }
  };

  return (
    <div className="signupPage">
      <img src={Logo} alt="logo" className="logo" />
      <form className="signupForm" onSubmit={handleSubmit}>
        <h2 className="title">Join CampusClubs</h2>

        <div className="labels">
          <label htmlFor="name">
            Full Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              id="name"
              placeholder="Enter your full name"
            />
            {errors.name && <p className="errors">{errors.name}</p>}
          </label>

          <label htmlFor="email">
            Email Address
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your university email"
            />
            {errors.email && <p className="errors">{errors.email}</p>}
          </label>

          <label htmlFor="role">
            Role
            <select
              name="role"
              value={formData.role}
              id="role"
              onChange={handleChange}
            >
              <option value="">-- Select Role --</option>
              <option value="student">Student Member</option>
              <option value="leader">Club Leader</option>
              <option value="admin">Administrator</option>
            </select>
            {errors.role && <p className="errors">{errors.role}</p>}
          </label>

          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <p className="errors">{errors.password}</p>}
          </label>
        </div>

        <button type="submit" className="loginBtn">
          Signup
        </button>

        {serverMessage && <p className="serverMessage">{serverMessage}</p>}

        <div className="or">
          <hr />
          <p>or</p>
          <hr />
        </div>
        <button type="button" className="googleBtn">
          <FcGoogle />
          Continue with Google
        </button>
        <p className="noAccount">
          Already a member?
          <Link to="/login" className="link">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
