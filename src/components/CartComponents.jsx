import React, { Component } from "react";
import minus from "../assets/minus-square.svg";
import plus from "../assets/plus-square.svg";
import left from "../assets/arrow-left.svg";
import right from "../assets/arrow-right.svg";
import "./cartComponents.scss";
import product from "../assets/product.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";

export class CartComponents extends Component {
  arrImg = [product, product2, product3, product4];
  state = {
    quantity: 1,
    image: this.arrImg[0],
  };
  render() {
    return (
      <div className="cartComponents">
        <div className="cartComponents_quantity">
          <input type="image" src={plus} alt="plus" />
          <p className="cartComponents_quantity_number">
            {this.state.quantity}
          </p>
          <input type="image" src={minus} alt="minus" />
        </div>
        <div className="cartComponents_preview">
          <img src={this.state.image} alt="product preview" />
          <div className="cartComponents_preview_buttons">
            <input type="image" src={left} alt="left" />
            <input type="image" src={right} alt="right" />
          </div>
        </div>
      </div>
    );
  }
}

export default CartComponents;
