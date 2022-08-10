import React, { Component } from "react";
import logo from "../assets/logo.svg";
import emptyCartIcon from "../assets/emptyCartIcon.svg";
import "./navbar.scss";
import arrow from "../assets/arrow.svg";
import { gql } from "@apollo/client";
import { Query } from "@apollo/react-components";

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
  state = { currencyIndex: 1 };
  setCategory = (cat) => {
    this.props.setCategory(cat);
  };

  setCurrency = (curr) => {
    this.props.setCurrency(curr);
  };

  render() {
    return (
      <Query query={query}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>ERROR!!!!</p>;
          return (
            <nav className="navbar">
              <ul className="navbar_links">
                {data.categories.map((el) => (
                  <li key={el.name} onClick={() => this.setCategory(el.name)}>
                    {/* TODO refactor a to button */}
                    <a>{el.name.toUpperCase()}</a>
                  </li>
                ))}
              </ul>
              {/* TODO implement homepage link through logo */}
              <a href="/" className="navbar_logo">
                <img src={logo} alt="store logo" />
              </a>
              <div className="navbar_icons">
                <div className="navbar_select">
                  {/* getting index of currency to change state on currency switch */}
                  <select
                    onChange={(e) =>
                      this.setCurrency(
                        data.currencies.findIndex(
                          (price) => price.label === e.target.value
                        )
                      )
                    }
                  >
                    {data.currencies.map((el) => (
                      <option value={el.label} key={el.label}>
                        {el.symbol} {el.label}
                      </option>
                    ))}
                  </select>
                  {/* FIXME fix arrow flip on all browsers */}
                  <img src={arrow} className="navbar_select_icon" alt="icon" />
                </div>
                {/* TODO cart item number */}
                <img src={emptyCartIcon} alt="cart overlay" />
              </div>
            </nav>
          );
        }}
      </Query>
    );
  }
}

export default Navbar;
