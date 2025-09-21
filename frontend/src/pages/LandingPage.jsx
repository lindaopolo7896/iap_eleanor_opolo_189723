import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/landing.css";

function LandingPage() {
  return (
    <div className="landingPage">
      <img src={Logo} alt="logo" className="logo" />
      <h1>CampusClubs</h1>
      <p className="tagline">
        "Connect, Explore, and Grow with Student Clubs."
      </p>

      <p className="hero">
        CampusClubs helps you discover student organizations, join exciting
        activities, and track your involvement across campus all in one place.
      </p>
      <div className="cta">
        <Link to="/signup" className="signup">
          Get Started
        </Link>
        <Link to="/login" className="login">
          Member Login
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
