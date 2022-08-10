import React, { Component } from "react";
import PLP from "./pages/PLP";
import "./App.css";
import { PDP } from "./pages/PDP";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <PDP />
      </div>
    );
  }
}

export default App;
