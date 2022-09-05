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

  //save state in local storage on update to prevent state reset on update
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

  //this function takes product object as input and saves it to state property 'cartItems'
  // if object is already present it increments 'quantity' property, else creates new with quantity = 1
  // also increments 'cartItemsQuantity' state
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

  // this function finds product object in 'cartItems' property and decrements
  // quantity if it is > 1, else deletes product
  // also decrements 'cartItemsQuantity' property
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

  // find object in array by comparing its name and attributes
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
          <Route path="*" element={<h1>Page not found.</h1>} />
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
