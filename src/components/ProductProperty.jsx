import React, { Component } from "react";
import "./productProperty.scss";

export class ProductSize extends Component {
  render() {
    return (
      <div className="productProperty">
        <p className="productProperty_text">SIZE:</p>
        <div className="productProperty_buttons">
          <input
            className="productProperty_buttons_radio"
            type="radio"
            name="propertyButton"
            id="r1"
          />
          <label className="productProperty_buttons_label" for="r1">
            S
          </label>
          <input
            className="productProperty_buttons_radio"
            type="radio"
            name="propertyButton"
            id="r2"
          />
          <label className="productProperty_buttons_label" for="r2">
            M
          </label>
          <input
            className="productProperty_buttons_radio"
            type="radio"
            name="propertyButton"
            id="r3"
          />
          <label className="productProperty_buttons_label" for="r3">
            L
          </label>
          <input
            className="productProperty_buttons_radio"
            type="radio"
            name="propertyButton"
            id="r4"
          />
          <label className="productProperty_buttons_label" for="r4">
            XL
          </label>
        </div>
      </div>
    );
  }
}

export default ProductSize;
