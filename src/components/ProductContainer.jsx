import React, { Component } from "react";
import "./productContainer.scss";
import { ProductGallery } from "./ProductGallery";
import { ProductTitle } from "./ProductTitle";
import { ProductProperty } from "./ProductProperty";
import { ProductColor } from "./ProductColor";
import parse from "html-react-parser";

export class ProductContainer extends Component {
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
                <ProductProperty attribute={attribute} key={attribute.id} />
              );
            } else {
              return <ProductColor attribute={attribute} key={attribute.id} />;
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
            <button>ADD TO CART</button>
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
