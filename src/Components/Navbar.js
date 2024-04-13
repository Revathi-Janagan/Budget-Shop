import React from "react";
import { NavLink } from "react-router-dom";
import Logovideo from "../Assets/LogoFinal.gif";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <img className="logo-set" src={Logovideo} ></img>

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
              <NavLink className="nav-link" aria-current="page" to="/products">
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

          <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
              <NavLink className="nav-link" to="#">
                <div>
                  <i className="fas fa-bell fa-lg mb-1"></i>
                  <span className="badge rounded-pill badge-notification bg-info">
                    11
                  </span>
                </div>
                Messages
              </NavLink>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-1">
              <NavLink className="nav-link" to="#">
                <div>
                  <i className="fas fa-globe-americas fa-lg mb-1"></i>
                  <span className="badge rounded-pill badge-notification bg-success">
                    11
                  </span>
                </div>
                News
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
              className="btn btn-primary"
              type="button"
              data-mdb-ripple-color="dark"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
