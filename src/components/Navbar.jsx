import React, { Component } from "react";
import logo from "../assets/logo.svg";
import "./navbar.scss";
import { gql } from "@apollo/client";
import { Query } from "@apollo/react-components";
import { Link } from "react-router-dom";
import CurrencySelect from "./CurrencySelect";
import CartOverlay from "./CartOverlay";

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
    return (
      <Query query={query}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading Navbar...</p>;
          if (error) return <p>ERROR LOADING NAVBAR!!!!</p>;
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
              <div className="navbar_logo">
                <img src={logo} alt="store logo" />
              </div>
              <div className="navbar_icons">
                <CurrencySelect
                  setCurrency={this.props.setCurrency}
                  currencies={data.currencies}
                  currencyIndex={this.props.currencyIndex}
                />
                <CartOverlay
                  cartItemsQuantity={this.props.cartItemsQuantity}
                  cartItems={this.props.cartItems}
                  currencyIndex={this.props.currencyIndex}
                  onAdd={this.props.onAdd}
                  onRemove={this.props.onRemove}
                />
              </div>
            </nav>
          );
        }}
      </Query>
    );
  }
}

export default Navbar;
