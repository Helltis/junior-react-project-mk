import React, { PureComponent } from "react";
import "./productContainer.scss";
import { ProductGallery } from "../../components/ProductGallery";
import { ProductTitle } from "../../components/ProductTitle";
import { ProductProperty } from "../../components/ProductProperty";
import { ProductColor } from "../../components/ProductColor";
import parse from "html-react-parser";
import Toast from "../../components/Toast";

export class ProductContainer extends PureComponent {
  state = { toast: false };

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
      // Create toast if no attributes selected
      // TODO refactor toast solution
      if (!this.state.toast) {
        this.setState({
          active: !this.state.toast,
        });
        setTimeout(() => {
          this.setState({
            active: !this.state.toast,
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
    const { product } = this.props,
      price = product.prices[this.props.currencyIndex],
      inStock = product.inStock
        ? "containerCart_button"
        : "containerCart_button_inactive";

    return (
      <div className="containerCart">
        <ProductGallery gallery={product.gallery} />
        <div className="containerCart_properties">
          <ProductTitle name={product.name} brand={product.brand} />
          {product.attributes.map((attribute) => {
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
            <button onClick={() => this.addToCart(product)}>ADD TO CART</button>
            <Toast
              active={this.state.toast}
              message="Please select attributes."
            />
          </div>
          <div className="containerCart_description">
            {parse(product.description)}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductContainer;
