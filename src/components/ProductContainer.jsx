import React, { Component } from "react";
import "./productContainer.scss";
import { ProductGallery } from "./ProductGallery";
import { ProductTitle } from "./ProductTitle";
import { ProductProperty } from "./ProductProperty";
import { ProductColor } from "./ProductColor";
import parse from "html-react-parser";

export class ProductContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.selectedAttributes = this.setDefaultAttributes(this.props.product);
  // }
  selectedAttributes = {};
  // componentDidMount() {
  //   this.selectedAttributes = this.setDefaultAttributes(this.props.product);
  // }
  // setDefaultAttributes = (product) => {
  //   let attr = {};
  //   product.attributes.forEach(
  //     (attribute) =>
  //       (attr = {
  //         ...attr,
  //         [attribute.name]: attribute.items[0].id,
  //       })
  //   );
  //   return attr;
  // };

  setSelectedAttributes = (attrName, attrId) => {
    this.selectedAttributes = {
      ...this.selectedAttributes,
      [attrName]: attrId,
    };
    console.log(this.selectedAttributes);
  };

  addToCart = (product) => {
    if (
      Object.keys(this.selectedAttributes).length < product.attributes.length
    ) {
      // TODO create popup
      return null;
    } else {
      const productWithAttributes = {
        ...product,
        selectedAttributes: this.selectedAttributes,
      };
      this.props.onAdd(productWithAttributes);
    }
  };
  render() {
    console.log(this.selectedAttributes);
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
              {
                /* TODO merge color property */
              }
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
            <button onClick={() => this.addToCart(this.props.product)}>
              {/* {
              product = {...this.props.product, selectedAttributes: this.selectedAttributes}
            } */}
              ADD TO CART
            </button>
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
