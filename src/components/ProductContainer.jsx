// FIXME this is not Cart component but PDP!!!
import React, { Component } from "react";
import "./productContainer.scss";
import { ProductGallery } from "./ProductGallery";
import { ProductTitle } from "./ProductTitle";
import { ProductProperty } from "./ProductProperty";
import { ProductColor } from "./ProductColor";

export class ProductContainer extends Component {
  render() {
    return (
      <div className="containerCart">
        <ProductGallery />
        <div className="containerCart_properties">
          <ProductTitle />
          <ProductProperty />
          <ProductColor />
          <div className="containerCart_price">
            <p className="containerCart_price_title">PRICE:</p>
            <p className="containerCart_price_number">$300.00</p>
          </div>
          <div className="containerCart_button">
            <button>ADD TO CART</button>
          </div>
          <div className="containerCart_description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              consequatur fuga, maxime asperiores velit laudantium consequuntur,
              omnis commodi ipsum odit dignissimos minus odio officia sed
              numquam quod temporibus deleniti. Molestias.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductContainer;
