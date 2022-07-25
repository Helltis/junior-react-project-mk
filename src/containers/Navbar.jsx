import React, { Component } from "react";
import logo from "../assets/logo.svg";
import emptyCartIcon from "../assets/emptyCartIcon.svg";
import "./navbar.css";
import arrow from "../assets/arrow.svg";

export class Navbar extends Component {
  render() {
    return (
      // navbar with three elements /category links/logo/currency selector & cart overlay
      <nav className="navbar">
        {/* implement stylish a href links to categories */}
        <ul className="navbar_links">
          <li>
            <a href="/">WOMEN</a>
          </li>
          <li>
            <a href="/">MEN</a>
          </li>
          <li>
            <a href="/">KIDS</a>
          </li>
        </ul>
        {/* implement homepage link through logo */}
        <a href="/" className="navbar_logo">
          <img src={logo} alt="store logo" />
        </a>
        {/* currency selector & cart overlay icon */}
        <div className="navbar_icons">
          <div className="navbar_select">
            <select>
              <option>$</option>
              <option>€</option>
              <option>¥</option>
            </select>
            <img src={arrow} className="navbar_select_icon" alt="icon" />
          </div>
          <img src={emptyCartIcon} alt="cart overlay" />
        </div>
      </nav>
    );
  }
}

export default Navbar;
