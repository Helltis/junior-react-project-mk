import React, { PureComponent } from "react";
import "./productContainer.scss";
import { ProductGallery } from "./ProductGallery";
import { ProductTitle } from "./ProductTitle";
import { ProductProperty } from "./ProductProperty";
import { ProductColor } from "./ProductColor";
import parse from "html-react-parser";
import PopUp from "./PopUp";

// this component is used to render product and it's attributes inside PDP
// takes three props: product object, currency index state and onAdd method
export class ProductContainer extends PureComponent {
  state = { active: false };

  // this object and method are used to save and add selected attributes to product object
  selectedAttributes = {};

  setSelectedAttributes = (attrName, attrId) => {
    this.selectedAttributes = {
      ...this.selectedAttributes,
      [attrName]: attrId,
    };
  };

  // this method checks if product has selected attributes before adding it to 'cartItems' state array
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
      //add attributes to product object if all attributes selected
      const productWithAttributes = {
        ...product,
        selectedAttributes: this.selectedAttributes,
      };
      this.props.onAdd(productWithAttributes);
    }
  };
  render() {
    const price = this.props.product.prices[this.props.currencyIndex];
    // disable 'add to cart' button if product property 'inStock' is false
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
