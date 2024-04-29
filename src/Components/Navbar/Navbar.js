import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Logovideo from "../../Assets/LogoFinal.gif";

import "./Navbar.css";

const Navbar = () => {
  const { logout,cartCount } = useAuth();  
  console.log("Cart Count is", cartCount)

  const handleLogout = () => {
    logout();
  };
  
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <img className="logo-set" src={Logovideo}></img>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto d-flex flex-row mt-5 mt-lg-2">
            <li className="nav-item text-center mx-2 mx-lg-3">
              <NavLink className="nav-link" aria-current="page" to="/">
                <div>
                  <i className="fas fa-home fa-lg mb-1"></i>
                </div>
                Home
              </NavLink>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-3">
              <NavLink className="nav-link" aria-current="page" to="/about">
                <div>
                  <i className="fas fa-user fa-lg mb-1"></i>
                </div>
                About Us
              </NavLink>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-3">
              <NavLink className="nav-link" aria-current="page" to="/cards">
                <div>
                  <i className="fas fa-shopping-bag fa-lg mb-1"></i>
                </div>
                Products
              </NavLink>
            </li>

            <li className="nav-item text-center mx-2 mx-lg-3">
              <NavLink className="nav-link" aria-current="page" to="/">
                <div>
                  <i className="fas fa-envelope fa-lg mb-1"></i>
                </div>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-primary custom-btn-search"
              type="button"
              data-mdb-ripple-color="dark"
            >
              Search
            </button>
          </form>

          <ul className="navbar-nav custom-nav-signin ms-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
              <NavLink className="nav-link" to="/login">
                <div>
                  <i className="fas fa-user-circle fa-lg mb-1"></i>
                </div>
                Sign In
              </NavLink>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-1">
              <NavLink className="nav-link" to="#">
                <div>
                  <i className="fas fa-shopping-cart fa-lg mb-1"></i>
                  <span className="badge bg-success">{cartCount}</span>
                </div>
                Cart
              </NavLink>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-1">
              <NavLink className="nav-link" to="/" onClick={handleLogout}>
                <div>
                  <i className="fas fa-sign-out-alt fa-lg mb-1"></i>
                </div>
                Sign Out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
