import React, { Component } from "react";
import logo from "../assets/logo.svg";
import emptyCartIcon from "../assets/emptyCartIcon.svg";
import "./navbar.scss";
import arrow from "../assets/arrow.svg";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
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
        {/* TODO implement homepage link through logo */}
        <a href="/" className="navbar_logo">
          <img src={logo} alt="store logo" />
        </a>
        <div className="navbar_icons">
          <div className="navbar_select">
            <select>
              <option>$</option>
              <option>€</option>
              <option>¥</option>
            </select>
            {/* FIXME fix arrow flip on all browsers */}
            <img src={arrow} className="navbar_select_icon" alt="icon" />
          </div>
          <img src={emptyCartIcon} alt="cart overlay" />
        </div>
      </nav>
    );
  }
}

export default Navbar;
