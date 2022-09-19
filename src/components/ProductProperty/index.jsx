import React, { PureComponent } from "react";
import nextId from "react-id-generator";
import "./productProperty.scss";

export class ProductProperty extends PureComponent {
  render() {
    // using react-id-generator here to avoid id/name collisions of attributes with same id/name
    const propertyName = nextId("property");
    const selected = this.props.selected?.[this.props.attribute.name];
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
                {item.id === selected ? (
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
