import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import headpic from "../assets/logo.png.webp";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header-container">
        <h1 className="header-title">
          <img src={headpic} />
        </h1>
        <nav className={`nav-container ${isOpen ? "is-active" : ""}`}>
          <NavLink to="/" className="links">
            Home
          </NavLink>
          <NavLink to="/about" className="links">About</NavLink>

          <NavLink to="/service" className="links">
            Services
          </NavLink>
          <NavLink to="/gallery" className="links">
            Gallery
          </NavLink>
          <div className="dropdown">
            <NavLink to="/blogs" className="links">
              Blogs
            </NavLink>

            <div className="dropdown-content">
              <NavLink to="/blogs" className="links">
                Blogs
              </NavLink>
              <NavLink to="/blogsdetails" className="links">
                Blog details
              </NavLink>
            </div>
          </div>

          <button className="main-button">Click Me!</button>
          <MdCancel
            className="navbar-cancel"
            onClick={() => setIsOpen(false)}
          />
        </nav>
        <button className="navbar-toggler" onClick={toggleNavbar}>
          <GiHamburgerMenu onClick={toggleNavbar} />
        </button>
      </header>
    </>
  );
};

export default Navbar;
