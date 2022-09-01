import React, { Component } from "react";
import "./productProperty.scss";

export class ProductProperty extends Component {
  render() {
    let selected;
    if (this.props.selected) {
      selected = this.props.selected[this.props.attribute.name];
    }
    return (
      <div className="productProperty">
        <p className="productProperty_text">
          {this.props.attribute.name.toUpperCase()}:
        </p>
        <div className="productProperty_buttons">
          {/* FIXME yes - no ID */}
          {/* FIXME same attribute id's */}
          {this.props.attribute.items.map((item) => {
            const id = Math.random();
            return (
              <React.Fragment key={item.id}>
                {item.id === selected ? (
                  <input
                    className="productProperty_buttons_radio"
                    type="radio"
                    name={this.props.attribute.name}
                    id={item.id}
                    checked
                    onChange={() =>
                      this.props.setSelectedAttributes(
                        this.props.attribute.name,
                        item.id
                      )
                    }
                  />
                ) : (
                  <input
                    className="productProperty_buttons_radio"
                    type="radio"
                    name={this.props.attribute.name}
                    id={item.id}
                    onChange={() =>
                      this.props.setSelectedAttributes(
                        this.props.attribute.name,
                        item.id
                      )
                    }
                  />
                )}
                <label
                  className="productProperty_buttons_label"
                  htmlFor={item.id}
                >
                  {item.value}
                </label>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductProperty;
