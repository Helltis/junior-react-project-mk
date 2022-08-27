import React, { Component } from "react";
import CartComponents from "../components/CartComponents";
import { ProductTitle } from "../components/ProductTitle";
import { ProductProperty } from "../components/ProductProperty";
import { ProductColor } from "../components/ProductColor";
import "./cart.scss";

export class Cart extends Component {
  render() {
    const isEmpty = this.props.cartItems.length === 0 ? true : false;
    let cartItems;
    if (isEmpty) {
      cartItems = <h1>Your cart is empty</h1>;
    } else {
      cartItems = (
        <React.Fragment>
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
        </React.Fragment>
      );
    }

    return (
      <div className="pageCart">
        <p className="pageCart_title">CART</p>
        {cartItems}
      </div>
    );
  }
}

export default Cart;
