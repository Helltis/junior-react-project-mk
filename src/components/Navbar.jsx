import React, { Component } from "react";
import logo from "../assets/logo.svg";
import emptyCartIcon from "../assets/emptyCartIcon.svg";
import "./navbar.scss";
import arrow from "../assets/arrow.svg";
import { gql } from "@apollo/client";
import { Query } from "@apollo/react-components";
import { Link } from "react-router-dom";
import CurrencySelect from "./CurrencySelect";

const query = gql`
  {
    categories {
      name
    }
    currencies {
      label
      symbol
    }
  }
`;

export class Navbar extends Component {
  setCategory = (cat) => {
    this.props.setCategory(cat);
  };

  render() {
    const cartBadge =
      this.props.cartItemsQuantity === 0 ? "" : "navbar_cart_icon";
    return (
      <Query query={query}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>ERROR!!!!</p>;
          return (
            <nav className="navbar">
              <ul className="navbar_links">
                {data.categories.map((el) => (
                  <Link to="/" key={el.name}>
                    <li onClick={() => this.setCategory(el.name)}>
                      {el.name.toUpperCase()}
                    </li>
                  </Link>
                ))}
              </ul>
              <a href="/" className="navbar_logo">
                <img src={logo} alt="store logo" />
              </a>
              <div className="navbar_icons">
                <CurrencySelect
                  setCurrency={this.props.setCurrency}
                  currencies={data.currencies}
                  currencyIndex={this.props.currencyIndex}
                />
                {/* FIXME fix arrow flip on all browsers */}
                {/* <img src={arrow} className="navbar_select_icon" alt="icon" /> */}
                <Link to="/cart">
                  <div
                    className={cartBadge}
                    value={this.props.cartItemsQuantity}
                  >
                    <img src={emptyCartIcon} alt="cart overlay" />
                  </div>
                </Link>
              </div>
            </nav>
          );
        }}
      </Query>
    );
  }
}

export default Navbar;
