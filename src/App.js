import React, { PureComponent } from "react";
import PLP from "./pages/PLP";
import "./App.css";
import { PDP } from "./pages/PDP";
import Cart from "./pages/Cart";
import Navbar from "./containers/Navbar";
import { Route, Routes } from "react-router-dom";
import _ from "lodash";

export class App extends PureComponent {
  state = {
    currencyIndex:
      JSON.parse(window.localStorage.getItem("currencyIndex")) || 0,
    category: "all",
    cartItems: JSON.parse(window.localStorage.getItem("cartItems")) || [],
    cartItemsQuantity:
      JSON.parse(window.localStorage.getItem("cartItemsQuantity")) || 0,
  };

  componentDidUpdate() {
    window.localStorage.setItem(
      "currencyIndex",
      JSON.stringify(this.state.currencyIndex)
    );
    window.localStorage.setItem(
      "cartItems",
      JSON.stringify(this.state.cartItems)
    );
    window.localStorage.setItem(
      "cartItemsQuantity",
      JSON.stringify(this.state.cartItemsQuantity)
    );
  }

  setCurrency = (currencyIndex) => {
    this.setState({ currencyIndex: currencyIndex });
  };

  setCategory = (Category) => {
    this.setState({ category: Category });
  };

  // using loDash function 'isEqual' for deep comparison of product objects
  onAdd = (product) => {
    const exists = this.findProduct(product);
    if (exists) {
      this.setState({
        cartItems: this.state.cartItems.map((x) =>
          _.isEqual(x, exists)
            ? { ...exists, quantity: exists.quantity + 1 }
            : x
        ),
      });
    } else {
      this.setState({
        cartItems: [...this.state.cartItems, { ...product, quantity: 1 }],
      });
    }
    this.setState({
      cartItemsQuantity: this.state.cartItemsQuantity + 1,
    });
  };

  onRemove = (product) => {
    const exists = this.findProduct(product);
    if (exists.quantity === 1) {
      this.setState({
        cartItems: this.state.cartItems.filter((x) => !_.isEqual(x, exists)),
      });
    } else {
      this.setState({
        cartItems: this.state.cartItems.map((x) =>
          _.isEqual(x, exists)
            ? { ...exists, quantity: exists.quantity - 1 }
            : x
        ),
      });
    }
    this.setState({
      cartItemsQuantity: this.state.cartItemsQuantity - 1,
    });
  };

  findProduct = (product) =>
    this.state.cartItems.find(
      (x) =>
        x.name === product.name &&
        _.isEqual(x.selectedAttributes, product.selectedAttributes)
    );

  render() {
    const { cartItemsQuantity, currencyIndex, cartItems, category } =
        this.state,
      currencySymbol = cartItems[0]?.prices[currencyIndex].currency.symbol;

    return (
      <div className="App">
        <Navbar
          setCategory={this.setCategory}
          setCurrency={this.setCurrency}
          cartItemsQuantity={cartItemsQuantity}
          currencyIndex={currencyIndex}
          currencySymbol={currencySymbol}
          cartItems={cartItems}
          onAdd={this.onAdd}
          onRemove={this.onRemove}
        />
        <Routes>
          <Route path="*" element={<h1>Page not found.</h1>} />
          <Route
            path="/"
            element={
              <PLP
                currencyIndex={currencyIndex}
                currencySymbol={currencySymbol}
                category={category}
                onAdd={this.onAdd}
              />
            }
          />
          <Route
            path="cart"
            element={
              <Cart
                cartItems={cartItems}
                currencyIndex={currencyIndex}
                onAdd={this.onAdd}
                onRemove={this.onRemove}
                quantity={cartItemsQuantity}
                currencySymbol={currencySymbol}
              />
            }
          />
          <Route path="product">
            <Route
              path=":productId"
              element={
                <PDP
                  currencyIndex={currencyIndex}
                  onAdd={this.onAdd}
                  currencySymbol={currencySymbol}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
