import React, { Component } from "react";
// import Navbar from "./containers/Navbar";
// import Product from "./components/Product";
// import Category from "./containers/Category";
// import PDP from "./pages/PDP";
import ProductSize from "./components/ProductSize";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductSize />
      </div>
    );
  }
}

export default App;
