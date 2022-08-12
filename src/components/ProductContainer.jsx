import React, { Component } from "react";
import "./productContainer.scss";
import { ProductGallery } from "./ProductGallery";
import { ProductTitle } from "./ProductTitle";
import { ProductProperty } from "./ProductProperty";
import { ProductColor } from "./ProductColor";
import parse from "html-react-parser";

export class ProductContainer extends Component {
  render() {
    return (
      <div className="containerCart">
        <ProductGallery gallery={this.props.product.gallery} />
        <div className="containerCart_properties">
          <ProductTitle />
          <ProductProperty />
          {this.props.product.description && <ProductColor />}
          <div className="containerCart_price">
            <p className="containerCart_price_title">PRICE:</p>
            <p className="containerCart_price_number">$300.00</p>
          </div>
          <div className="containerCart_button">
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
