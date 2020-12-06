import React from "react";
import "./css/Navigation.css";
import { NavLink } from "react-router-dom";


const Navigation = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          stayfit.com
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <li>
                <NavLink className="nav-link" to="/orders">
                  Orders
                </NavLink>
              </li>
            </li>
            <li className="nav-item">
              <li>
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
