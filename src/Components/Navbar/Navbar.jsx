import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar  navbar-expand-xl custom-padding ${
        sticky ? "dark-nav" : ""
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="custom-width" src={logo} alt="logo" />
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
              <Link
                className="nav-link"
                to="hero"
                smooth={true}
                offset={0}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item cursor-pointer">
              <Link
                className="nav-link"
                to="program"
                smooth={true}
                offset={-260}
                duration={500}
              >
                Program
              </Link>
            </li>
            <li className="nav-item cursor-pointer">
              <Link
                className="nav-link"
                to="about"
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item cursor-pointer">
              <Link
                className="nav-link"
                to="campus"
                smooth={true}
                offset={-260}
                duration={500}
              >
                Campus
              </Link>
            </li>
            <li className="nav-item cursor-pointer">
              <Link
                className="nav-link"
                to="testimonials"
                smooth={true}
                offset={-260} // Adjust this value as needed
                duration={500}
              >
                Testimonials
              </Link>
            </li>
            <li className="nav-item cursor-pointer">
              <Link
                className="nav-btn btn"
                to="contact"
                smooth={true}
                offset={-260}
                duration={500}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
