import React, { useRef, useState } from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const NavBar = ({ loggedInUser, onUserTypeSelect, selectedUserType }) => {
  const navbarRef = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleUserTypeClick = (userType) => {
    onUserTypeSelect(userType);
    setDropdownOpen(false);
  };

  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="logo" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#contact">Find Vet</a>
          <a href="#mission">Our Mission</a>
          <a href="#reviews">Reviews</a>
          <div
            className="dropdown"
            style={{ position: "relative", display: "inline-block" }}
          >
            <button
              onClick={toggleDropdown}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                color: "#fff",
              }}
            >
              {selectedUserType}
            </button>
            {dropdownOpen && (
              <div
                className="dropdown-content"
                style={{
                  display: "block",
                  position: "absolute",
                  backgroundColor: "#f9f9f9",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                  zIndex: 1,
                }}
              >
                <a
                  href="#!"
                  onClick={() => handleUserTypeClick("Pet Owner")}
                  style={{ padding: "8px", display: "block" }}
                >
                  Pet Owner Login
                </a>
                <a
                  href="#!"
                  onClick={() => handleUserTypeClick("Vet")}
                  style={{ padding: "8px", display: "block" }}
                >
                  Vet Login
                </a>
                <a
                  href="#!"
                  onClick={() => handleUserTypeClick("Admin")}
                  style={{ padding: "8px", display: "block" }}
                >
                  Admin Login
                </a>
              </div>
            )}
          </div>
        </nav>
        <div className="icons">
          <Link type="button" className="btn btn-success" to="/signup">
            Sign Up
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link type="button" className="btn btn-danger" to="/login">
            Login
          </Link>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
