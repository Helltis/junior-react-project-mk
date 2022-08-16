import React, { Component } from "react";
import "./productColor.scss";

// FIXME white color on white background
export class ProductColor extends Component {
  render() {
    return (
      <div>
        <p className="productColor_text">COLOR:</p>
        <div className="productColor_buttons">
          {this.props.attribute.items.map((color) => (
            <React.Fragment key={color.id}>
              <input
                className="productColor_buttons_radio"
                type="radio"
                name="colorButton"
                id={color.id}
              />
              <label
                className="productColor_buttons_label"
                htmlFor={color.id}
                style={{ backgroundColor: color.value }}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductColor;
