import React from "react";
import dark_arrow from "../../assets/dark-arrow.png";
import "./Hero.css";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreClick = (e) => {
    e.preventDefault();
    navigate("/explore");
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero min-vh-100 w-100 ">
      <div className="hero-text">
        <h1>We Ensure better education for a better world.</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experience needed to excel in the dynamic field
          of education.
        </p>
        <button className="btn" onClick={handleExploreClick}>
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
