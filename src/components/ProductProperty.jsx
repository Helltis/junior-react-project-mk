import React, { Component } from "react";
import "./productProperty.scss";

export class ProductProperty extends Component {
  render() {
    return (
      <div className="productProperty">
        <p className="productProperty_text">
          {this.props.attribute.name.toUpperCase()}:
        </p>
        <div className="productProperty_buttons">
          {/* FIXME yes - no ID */}
          {this.props.attribute.items.map((item) => (
            <React.Fragment key={item.id}>
              <input
                className="productProperty_buttons_radio"
                type="radio"
                name={this.props.attribute.name}
                id={item.id}
              />
              <label
                className="productProperty_buttons_label"
                htmlFor={item.id}
              >
                {item.value}
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductProperty;
