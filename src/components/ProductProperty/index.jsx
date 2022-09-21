import React, { PureComponent } from "react";
import nextId from "react-id-generator";
import "./productProperty.scss";

export class ProductProperty extends PureComponent {
  render() {
    // using react-id-generator here to avoid id/name collisions of attributes with same id/name
    const propertyName = nextId("property"),
      { attribute, setSelectedAttributes } = this.props,
      selected = this.props.selected?.[attribute.name];

    return (
      <div className="productProperty">
        <p className="productProperty_text">{`${attribute.name}:`}</p>
        <div className="productProperty_buttons">
          {attribute.items.map((button) => {
            const id = nextId();
            return (
              <React.Fragment key={button.id}>
                {button.id === selected ? (
                  <input
                    className="productProperty_buttons_radio"
                    type="radio"
                    id={id}
                    name={propertyName}
                    checked
                    readOnly
                  />
                ) : (
                  <input
                    className="productProperty_buttons_radio"
                    type="radio"
                    name={propertyName}
                    id={id}
                    onChange={() =>
                      setSelectedAttributes(attribute.name, button.id)
                    }
                  />
                )}
                <label className="productProperty_buttons_label" htmlFor={id}>
                  {button.value}
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
