import React, { Component } from "react";
import CartContainer from "../containers/CartContainer";
import { Navbar } from "../containers/Navbar";

export class Cart extends Component {
  render() {
    return (
      <div className="pageCart">
        <Navbar />
        <CartContainer />
      </div>
    );
  }
}

export default Cart;
