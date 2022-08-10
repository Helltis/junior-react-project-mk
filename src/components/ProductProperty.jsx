import React, { Component } from "react";
import "./productProperty.scss";

export class ProductProperty extends Component {
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
          <label className="productProperty_buttons_label" htmlFor="r1">
            S
          </label>
          <input
            className="productProperty_buttons_radio"
            type="radio"
            name="propertyButton"
            id="r2"
          />
          <label className="productProperty_buttons_label" htmlFor="r2">
            M
          </label>
          <input
            className="productProperty_buttons_radio"
            type="radio"
            name="propertyButton"
            id="r3"
          />
          <label className="productProperty_buttons_label" htmlFor="r3">
            L
          </label>
          <input
            className="productProperty_buttons_radio"
            type="radio"
            name="propertyButton"
            id="r4"
          />
          <label className="productProperty_buttons_label" htmlFor="r4">
            XL
          </label>
        </div>
      </div>
    );
  }
}

export default ProductProperty;
