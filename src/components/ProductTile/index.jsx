import React, { PureComponent } from "react";
import "./product.scss";
import cartIcon from "../../assets/cartIcon.svg";

export class ProductTile extends PureComponent {
  render() {
    const { product, onAdd, currencyIndex } = this.props,
      isInStock = product.inStock ? "product" : "product_outOfStock",
      currencySymbol = product.prices[currencyIndex].currency.symbol;

    return (
      <div className={isInStock}>
        <div
          className="product_cartIcon"
          onClick={(e) => {
            if (product.attributes.length === 0) {
              e.preventDefault();
              onAdd(product);
            }
          }}
        >
          <img src={cartIcon} alt="cart icon" />
        </div>
        <img
          src={product.gallery[0]}
          alt="sample product"
          className="product_image"
        />
        <div className="product_info">
          <p className="product_info_name">
            {`${product.brand} ${product.name}`}
          </p>
          <p className="product_info_price">
            {`${currencySymbol}${product.prices[currencyIndex].amount}`}
          </p>
        </div>
      </div>
    );
  }
}

export default ProductTile;
