import React, { Component } from "react";
// import Navbar from "./containers/Navbar";
// import Product from "./components/Product";
// import Category from "./containers/Category";
// import PDP from "./pages/PDP";
// import ProductProperty from "./components/ProductProperty";
// import ProductTitle from "./components/ProductTitle";
import ProductGallery from "./components/ProductGallery";
// import ProductColor from "./components/ProductColor";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductGallery />
      </div>
    );
  }
}

export default App;
