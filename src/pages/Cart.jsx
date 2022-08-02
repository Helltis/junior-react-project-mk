import React, { Component } from "react";
import CartComponents from "../components/CartComponents";
import Navbar from "../components/Navbar";
import { ProductTitle } from "../components/ProductTitle";
import { ProductProperty } from "../components/ProductProperty";
import { ProductColor } from "../components/ProductColor";
import "./cart.scss";

export class Cart extends Component {
  render() {
    return (
      <div className="pageCart">
        <Navbar />
        <p className="pageCart_title">CART</p>
        <span className="pageCart_divider" />
        <div className="pageCart_item">
          <div className="pageCart_selectedProps">
            <ProductTitle />
            <span>$50.00</span>
            <ProductProperty />
            <ProductColor />
          </div>
          <CartComponents />
        </div>
        <span className="pageCart_divider" />
        <div className="pageCart_item">
          <div className="pageCart_selectedProps">
            <ProductTitle />
            <ProductProperty />
            <ProductColor />
          </div>
          <CartComponents />
        </div>
      </div>
    );
  }
}

export default Cart;
