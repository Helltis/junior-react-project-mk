import React, { Component } from "react";
import "./category.css";
import Product from "../components/Product";
import Navbar from "./Navbar";

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
