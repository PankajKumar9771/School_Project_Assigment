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
            <h3>ParthikLibrary</h3>
          </Link>

          <p>
            Welcome to ParthikLibrary. Where we nurture young minds for a
            brighter future.
          </p>
          <div className="footer-social-icon">
            <a
              href="https://www.facebook.com/pankajkumar.patel.756412"
              target="_blank"
            >
              <img src={facebook_icon} alt="" />
            </a>
            <a
              href="https://www.facebook.com/pankajkumar.patel.756412"
              target="_blank"
            >
              <img src={linkedin_icon} alt="" />
            </a>
            <a
              href="https://www.facebook.com/pankajkumar.patel.756412"
              target="_blank"
            >
              <img src={twitter_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Library</h2>
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
            <li>+91 97717740XX</li>
            <li>pankaj36257@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 &copy; ParthikLibrary - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
