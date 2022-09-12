import React, { PureComponent } from "react";
import "./productTitle.scss";

export class ProductTitle extends PureComponent {
  render() {
    return (
      <div className="productTitle">
        <p className="productTitle_brand">{this.props.brand}</p>
        <p className="productTitle_name">{this.props.name}</p>
      </div>
    );
  }
}

export default ProductTitle;
