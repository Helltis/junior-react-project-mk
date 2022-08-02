import React, { Component } from "react";
import "./cartComponents.scss";
import product from "../assets/product.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";

export class CartComponents extends Component {
  arrImg = [product, product2, product3, product4];
  state = {
    quantity: 0,
    image: this.arrImg[0],
  };
  render() {
    return (
      <div className="cartComponents">
        <div className="cartComponents_quantity">
          <button className="cartComponents_quantity_increase">+</button>
          <p className="cartComponents_quantity_number">
            {this.state.quantity}
          </p>
          <button className="cartComponents_quantity_decrease">-</button>
        </div>
        <div className="cartComponents_preview">
          <img
            src={this.state.image}
            alt="product preview"
            className="cartComponents_preview_image"
          />
          <div className="cartComponents_preview_buttons">
            <button className="cartComponents_preview_left">{"<"}</button>
            <button className="cartComponents_preview_right">{">"}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartComponents;
