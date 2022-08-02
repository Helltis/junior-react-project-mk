import React, { Component } from "react";
import product from "../assets/product.png";
import "./product.scss";
import cartIcon from "../assets/cartIcon.svg";

// TODO out of stock functionality
export class Product extends Component {
  render() {
    return (
      <div className="product">
        <div className="product_cartIcon">
          <img src={cartIcon} alt="cart icon" />
        </div>
        <img src={product} alt="sample product" className="product_image" />

        <div className="product_info">
          <p className="product_info_name">Apollo Running Short</p>
          <p className="product_info_price">$50.00</p>
        </div>
      </div>
    );
  }
}

export default Product;
