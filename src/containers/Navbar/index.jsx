import React, { PureComponent } from "react";
import logo from "../../assets/logo.svg";
import "./navbar.scss";
import { Query } from "@apollo/react-components";
import { Link } from "react-router-dom";
import CurrencySelect from "../../components/CurrencySelect";
import CartOverlay from "../CartOverlay";
import { GET_NAVBAR_DATA } from "../../graphql/getNavbarData";

export class Navbar extends PureComponent {
  setCategory = (cat) => {
    this.props.setCategory(cat);
  };

  render() {
    const {
      setCurrency,
      currencyIndex,
      cartItemsQuantity,
      cartItems,
      onAdd,
      onRemove,
    } = this.props;

    return (
      <Query query={GET_NAVBAR_DATA}>
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
                <Link to="/">
                  <img src={logo} alt="store logo" />
                </Link>
              </div>
              <div className="navbar_icons">
                <CurrencySelect
                  setCurrency={setCurrency}
                  currencies={data.currencies}
                  currencyIndex={currencyIndex}
                />
                <CartOverlay
                  cartItemsQuantity={cartItemsQuantity}
                  cartItems={cartItems}
                  currencyIndex={currencyIndex}
                  onAdd={onAdd}
                  onRemove={onRemove}
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
