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
            name="propertyButton"
            id="r1"
          />
          <label className="productColor_buttons_label" for="r1" />
          <input
            className="productColor_buttons_radio"
            type="radio"
            name="propertyButton"
            id="r2"
          />
          <label className="productColor_buttons_label" for="r2" />
          <input
            className="productColor_buttons_radio"
            type="radio"
            name="propertyButton"
            id="r3"
          />
          <label className="productColor_buttons_label" for="r3" />
          <input
            className="productColor_buttons_radio"
            type="radio"
            name="propertyButton"
            id="r4"
          />
          <label className="productColor_buttons_label" for="r4" />
        </div>
      </div>
    );
  }
}

export default ProductColor;
