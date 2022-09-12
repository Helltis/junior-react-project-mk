import React, { PureComponent } from "react";
import "./productColor.scss";
import nextId from "react-id-generator";

// this component is used to render color attributes of product
// takes two props: attribute array and selected attributes object
// I deviated from design here and created a black border around color attributes
// in order to fix problem of white color on white background, which is invisible)
export class ProductColor extends PureComponent {
  //if product has selected color attributes render them as selected
  selected = this.props.selected
    ? this.props.selected[this.props.attribute.name]
    : null;
  render() {
    const name = nextId();
    return (
      <div>
        <p className="productColor_text">Color:</p>
        <div className="productColor_buttons">
          {this.props.attribute.items.map((color) => {
            const id = nextId();
            return (
              <React.Fragment key={color.id}>
                {color.id === this.selected ? (
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
                      this.props.setSelectedAttributes(
                        this.props.attribute.name,
                        color.id
                      )
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
