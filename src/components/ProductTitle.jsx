import React, { Component } from "react";
import "./productTitle.scss";

export class ProductName extends Component {
  render() {
    return (
      <div className="productTitle">
        <p className="productTitle_brand">Apollo</p>
        <p className="productTitle_name">Running Short</p>
      </div>
    );
  }
}

export default ProductName;