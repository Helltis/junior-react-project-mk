import React, { Component } from "react";
import "./plp.scss";
import Product from "../components/Product";
import Navbar from "../containers/Navbar";

export class Category extends Component {
  render() {
    return (
      <div className="category">
        <Navbar />
        <h1 className="category_title">Category name</h1>
        <div className="category_products">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    );
  }
}

export default Category;
