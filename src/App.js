import React, { Component } from "react";
import PLP from "./pages/PLP";
import "./App.css";
import { PDP } from "./pages/PDP";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import _ from "lodash";

export class App extends Component {
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

  onAdd = (product) => {
    const exists = this.findProduct(product);
    console.log(exists);
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

  productTotalPrice = (product) => {
    return product.quantity * product.prices[this.state.currencyIndex].amount;
  };

  findProduct = (product) =>
    this.state.cartItems.find(
      (x) =>
        x.name === product.name &&
        _.isEqual(x.selectedAttributes, product.selectedAttributes)
    );

  render() {
    return (
      <div className="App">
        <Navbar
          setCategory={this.setCategory}
          setCurrency={this.setCurrency}
          cartItemsQuantity={this.state.cartItemsQuantity}
          currencyIndex={this.state.currencyIndex}
          cartItems={this.state.cartItems}
          onAdd={this.onAdd}
          onRemove={this.onRemove}
        />
        <Routes>
          <Route
            path="/"
            element={
              <PLP
                currencyIndex={this.state.currencyIndex}
                category={this.state.category}
                onAdd={this.onAdd}
              />
            }
          />
          <Route
            path="cart"
            element={
              <Cart
                cartItems={this.state.cartItems}
                currencyIndex={this.state.currencyIndex}
                onAdd={this.onAdd}
                onRemove={this.onRemove}
                quantity={this.state.cartItemsQuantity}
              />
            }
          />
          <Route path="product">
            <Route
              path=":productId"
              element={
                <PDP
                  currencyIndex={this.state.currencyIndex}
                  onAdd={this.onAdd}
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
