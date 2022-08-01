import React, { Component } from "react";
import "./productColor.scss";

export class ProductColor extends Component {
  render() {
    return (
      <div>
        <p className="productColor_text">COLOR:</p>
        <div className="productColor_buttons">
          <input
            className="productColor_buttons_radio"
            type="radio"
            name="colorButton"
            id="c1"
          />
          <label className="productColor_buttons_label" for="c1" />
          <input
            className="productColor_buttons_radio"
            type="radio"
            name="colorButton"
            id="c2"
          />
          <label className="productColor_buttons_label" for="c2" />
          <input
            className="productColor_buttons_radio"
            type="radio"
            name="colorButton"
            id="c3"
          />
          <label className="productColor_buttons_label" for="c3" />
          <input
            className="productColor_buttons_radio"
            type="radio"
            name="colorButton"
            id="c4"
          />
          <label className="productColor_buttons_label" for="c4" />
        </div>
      </div>
    );
  }
}

export default ProductColor;
