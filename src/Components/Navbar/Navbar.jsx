import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setSticky(window.scrollY > 50);
      }
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      setSticky(false); 
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <nav
      className={`navbar navbar-expand-xl custom-padding ${
        sticky || location.pathname !== "/" ? "dark-nav" : ""
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <h3 className="custom-width">Springdale</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item cursor-pointer">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item cursor-pointer">
              <NavLink className="nav-link" to="/achedemics">
                Academics
              </NavLink>
            </li>
            <li className="nav-item cursor-pointer">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>

            <li className="nav-item cursor-pointer">
              <NavLink className="nav-link" to="/faculity">
                Faculity
              </NavLink>
            </li>
            <li className="nav-item cursor-pointer">
              <NavLink className="nav-link" to="/admission">
                Admission
              </NavLink>
            </li>
            <li className="nav-item cursor-pointer">
              <NavLink className="nav-link" to="/gallery">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item cursor-pointer">
              <NavLink className="nav-link" to="/students">
                Students
              </NavLink>
            </li>
            <li className="nav-item cursor-pointer">
              <NavLink to="/contact">
                <button className="nav-btn btn"> Contact Us</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
