import React, { PureComponent } from "react";
import nextId from "react-id-generator";
import "./productProperty.scss";

//TODO try Symbol for ids
export class ProductProperty extends PureComponent {
  selected = this.props.selected?.[this.props.attribute.name];

  render() {
    // using react-id-generator here to avoid id/name collisions of attributes with same id/name
    const name = nextId();
    return (
      <div className="productProperty">
        <p className="productProperty_text">
          {`${this.props.attribute.name}:`}
        </p>
        <div className="productProperty_buttons">
          {this.props.attribute.items.map((item) => {
            const id = nextId();
            return (
              <React.Fragment key={item.id}>
                {item.id === this.selected ? (
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
