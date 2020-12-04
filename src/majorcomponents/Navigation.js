import React from "react";
import "./css/Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/products" activeClassName="active">
            <a>Products</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <a>Your Profile</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <a>Your Cart</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders">
            <a>Your Orders</a>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
