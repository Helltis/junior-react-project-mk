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
        <span className="pageCart_divider" />
        <div className="pageCart_summary">
          <div className="pageCart_summary_static">
            <p>Tax 21%:</p>
            <p>Quantity:</p>
            <p style={{ fontWeight: 500 }}>Total:</p>
          </div>
          <div className="pageCart_summary_dynamic">
            <p>$42.00</p>
            <p>2</p>
            <p>$200.00</p>
          </div>
        </div>
        <button className="pageCart_order">ORDER</button>
      </div>
    );
  }
}

export default Cart;
