import React, { PureComponent } from "react";
import "./productTitle.scss";

export class ProductTitle extends PureComponent {
  render() {
    const { brand, name } = this.props;
    return (
      <div className="productTitle">
        <p className="productTitle_brand">{brand}</p>
        <p className="productTitle_name">{name}</p>
      </div>
    );
  }
}

export default ProductTitle;
