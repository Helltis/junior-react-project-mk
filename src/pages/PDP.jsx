import React, { Component } from "react";
import Navbar from "../containers/Navbar";
import { CartContainer } from "../containers/CartContainer";

export class PDP extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CartContainer />
      </div>
    );
  }
}

export default PDP;
