import React, { Component } from "react";
import PLP from "./pages/PLP";
import "./App.css";
import { PDP } from "./pages/PDP";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

export class App extends Component {
  state = { currencyIndex: 0, category: "all" };

  setCurrency = (currencyIndex) => {
    this.setState({ currencyIndex: currencyIndex });
  };

  setCategory = (Category) => {
    this.setState({ category: Category });
  };

  render() {
    return (
      <div className="App">
        <Navbar setCategory={this.setCategory} setCurrency={this.setCurrency} />
        <Routes>
          <Route
            path="/"
            element={
              <PLP
                currencyIndex={this.state.currencyIndex}
                category={this.state.category}
              />
            }
          />
          <Route
            path="/:productId"
            element={<PDP currencyIndex={this.state.currencyIndex} />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
