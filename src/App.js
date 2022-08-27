import React, { Component } from "react";
import PLP from "./pages/PLP";
import "./App.css";
import { PDP } from "./pages/PDP";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

export class App extends Component {
  // TODO better state management solution
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
    const exists = this.state.cartItems.find((x) => x.id === product.id);
    if (exists) {
      this.setState({
        cartItems: this.state.cartItems.map((x) =>
          x.id === product.id ? { ...exists, quantity: exists.quantity + 1 } : x
        ),
      });
    } else {
      this.setState({
        cartItems: [...this.state.cartItems, { ...product, quantity: 1 }],
      });
    }
    this.setState({ cartItemsQuantity: this.state.cartItemsQuantity + 1 });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Navbar
          setCategory={this.setCategory}
          setCurrency={this.setCurrency}
          cartItemsQuantity={this.state.cartItemsQuantity}
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
