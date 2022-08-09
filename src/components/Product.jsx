import React, { Component } from "react";
import "./product.scss";
import cartIcon from "../assets/cartIcon.svg";

export class Product extends Component {
  render() {
    const isInStock = this.props.product.inStock
      ? "product"
      : "product_outOfStock";
    return (
      <div className={isInStock}>
        <div className="product_cartIcon">
          <img src={cartIcon} alt="cart icon" />
        </div>
        <img
          src={this.props.product.gallery[0]}
          alt="sample product"
          className="product_image"
        />

        <div className="product_info">
          <p className="product_info_name">
            {this.props.product.brand} {this.props.product.name}
          </p>
          <p className="product_info_price">
            {this.props.product.prices[0].currency.symbol}
            {this.props.product.prices[0].amount}
          </p>
        </div>
      </div>
    );
  }
}

export default Product;
