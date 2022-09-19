import React, { PureComponent } from "react";
import "./product.scss";
import cartIcon from "../../assets/cartIcon.svg";

export class Product extends PureComponent {
  render() {
    const isInStock = this.props.product.inStock
      ? "product"
      : "product_outOfStock";
    return (
      <div className={isInStock}>
        <div
          className="product_cartIcon"
          onClick={(e) => {
            if (this.props.product.attributes.length === 0) {
              e.preventDefault();
              this.props.onAdd(this.props.product);
            }
          }}
        >
          <img src={cartIcon} alt="cart icon" />
        </div>
        <img
          src={this.props.product.gallery[0]}
          alt="sample product"
          className="product_image"
        />

        <div className="product_info">
          <p className="product_info_name">
            {this.props.product.brand} {this.props.product.name}
          </p>
          <p className="product_info_price">
            {
              this.props.product.prices[this.props.currencyIndex].currency
                .symbol
            }
            {this.props.product.prices[this.props.currencyIndex].amount}
          </p>
        </div>
      </div>
    );
  }
}

export default Product;
