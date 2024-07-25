import React from "react";
import "./Footer.css";
import facebook_icon from "../../assets/facebook_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import linkedin_icon from "../../assets/linkedin_icon.png";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to={"/"} className="logo">
            <h3>Springdale</h3>
          </Link>

          <p>
            Welcome to Springdable Public School. Where we nurture young minds
            for a brighter future.
          </p>
          <div className="footer-social-icon">
            <img src={facebook_icon} alt="" />
            <img src={linkedin_icon} alt="" />
            <img src={twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>School</h2>
          <ul>
            <Link className="link" to={"/"}>
              <li>Home</li>
            </Link>
            <Link className="link" to={"/about"}>
              <li>About Us</li>
            </Link>
            <li>Campus</li>
            <li>Privacy-Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+121 987 278 387 1232</li>
            <li>contact@pankaj.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; Springdale Public School - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
