import React, { Component } from "react";
import nextId from "react-id-generator";
import "./productProperty.scss";

export class ProductProperty extends Component {
  render() {
    let selected;
    if (this.props.selected) {
      selected = this.props.selected[this.props.attribute.name];
    }
    const name = nextId();
    return (
      <div className="productProperty">
        <p className="productProperty_text">
          {`${this.props.attribute.name.toUpperCase()}:`}
        </p>
        <div className="productProperty_buttons">
          {this.props.attribute.items.map((item) => {
            const id = nextId();
            return (
              <React.Fragment key={item.id}>
                {item.id === selected ? (
                  <input
                    className="productProperty_buttons_radio"
                    type="radio"
                    id={id}
                    name={name}
                    checked
                    readOnly
                  />
                ) : (
                  <input
                    className="productProperty_buttons_radio"
                    type="radio"
                    name={name}
                    id={id}
                    onChange={() =>
                      this.props.setSelectedAttributes(
                        this.props.attribute.name,
                        item.id
                      )
                    }
                  />
                )}
                <label className="productProperty_buttons_label" htmlFor={id}>
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
