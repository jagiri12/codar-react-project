import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import headpic from "../assets/logo.png.webp";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header-container">
        <h1 className="header-title">
          <img src={headpic} alt="Logo" />
        </h1>

        {/* Hamburger Menu Button */}
        <button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu />
        </button>

        {/* Navigation Links */}
        <nav className={`nav-container ${isOpen ? "is-active" : ""}`}>
          <NavLink to="/" className="links" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className="links" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/service" className="links" onClick={() => setIsOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/gallery" className="links" onClick={() => setIsOpen(false)}>
            Gallery
          </NavLink>

          {/* Dropdown */}
          <div className="dropdown">
            <NavLink to="/blogs" className="links">
              Blogs
            </NavLink>
            <div className="dropdown-content">
              <NavLink to="/blogs" className="links" onClick={() => setIsOpen(false)}>
                Blogs
              </NavLink>
              <NavLink to="/blogsdetails" className="links" onClick={() => setIsOpen(false)}>
                Blog Details
              </NavLink>
            </div>
          </div>

          <button className="main-button">Free Quote</button>

          {/* Close Button */}
          <MdCancel className="navbar-cancel" onClick={() => setIsOpen(false)} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
