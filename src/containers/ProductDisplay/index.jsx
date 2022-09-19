import React, { PureComponent } from "react";
import "./productContainer.scss";
import { ProductGallery } from "../../components/ProductGallery";
import { ProductTitle } from "../../components/ProductTitle";
import { ProductProperty } from "../../components/ProductProperty";
import { ProductColor } from "../../components/ProductColor";
import parse from "html-react-parser";
import PopUp from "../../components/PopUp";

export class ProductContainer extends PureComponent {
  state = { active: false };

  selectedAttributes = {};

  setSelectedAttributes = (attrName, attrId) => {
    this.selectedAttributes = {
      ...this.selectedAttributes,
      [attrName]: attrId,
    };
  };

  addToCart = (product) => {
    if (
      Object.keys(this.selectedAttributes).length < product.attributes.length
    ) {
      //Create toast if no attributes selected
      if (!this.state.active) {
        this.setState({
          active: !this.state.active,
        });
        setTimeout(() => {
          this.setState({
            active: !this.state.active,
          });
        }, 2000);
      }
    } else {
      const productWithAttributes = {
        ...product,
        selectedAttributes: this.selectedAttributes,
      };
      this.props.onAdd(productWithAttributes);
    }
  };
  render() {
    const price = this.props.product.prices[this.props.currencyIndex];
    const inStock = this.props.product.inStock
      ? "containerCart_button"
      : "containerCart_button_inactive";
    return (
      <div className="containerCart">
        <ProductGallery gallery={this.props.product.gallery} />
        <div className="containerCart_properties">
          <ProductTitle
            name={this.props.product.name}
            brand={this.props.product.brand}
          />
          {this.props.product.attributes.map((attribute) => {
            if (attribute.type === "text") {
              return (
                <ProductProperty
                  attribute={attribute}
                  key={attribute.id}
                  setSelectedAttributes={this.setSelectedAttributes}
                />
              );
            } else {
              return (
                <ProductColor
                  attribute={attribute}
                  key={attribute.id}
                  setSelectedAttributes={this.setSelectedAttributes}
                />
              );
            }
          })}
          <div className="containerCart_price">
            <p className="containerCart_price_title">PRICE:</p>
            <p className="containerCart_price_number">
              {price.currency.symbol}
              {price.amount}
            </p>
          </div>
          <div className={inStock}>
            <button onClick={() => this.addToCart(this.props.product)}>
              ADD TO CART
            </button>
            <PopUp
              active={this.state.active}
              message="Please select attributes."
            />
          </div>
          <div className="containerCart_description">
            {parse(this.props.product.description)}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductContainer;
