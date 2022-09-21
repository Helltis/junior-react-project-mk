import React, { PureComponent } from "react";
import "./productColor.scss";
import nextId from "react-id-generator";

export class ProductColor extends PureComponent {
  render() {
    // using react-id-generator here to avoid id/name collisions of attributes with same id/name
    const name = nextId("color"),
      { attribute, setSelectedAttributes } = this.props,
      selected = this.props.selected?.[attribute.name];
    return (
      <div>
        <p className="productColor_text">Color:</p>
        <div className="productColor_buttons">
          {attribute.items.map((color) => {
            const id = nextId();
            return (
              <React.Fragment key={color.id}>
                {color.id === selected ? (
                  <input
                    className="productColor_buttons_radio"
                    type="radio"
                    name={name}
                    id={id}
                    checked
                    readOnly
                  />
                ) : (
                  <input
                    className="productColor_buttons_radio"
                    type="radio"
                    name={name}
                    id={id}
                    onChange={() =>
                      setSelectedAttributes(attribute.name, color.id)
                    }
                  />
                )}
                <label
                  className="productColor_buttons_label"
                  htmlFor={id}
                  style={{ backgroundColor: color.value }}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductColor;
