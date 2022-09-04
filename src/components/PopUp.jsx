import React, { Component } from "react";
import "./popUp.scss";

export class PopUp extends Component {
  render() {
    return (
      <div className="popup" id={this.props.active ? "show" : "hide"}>
        <div className="popup_message">{this.props.message}</div>
      </div>
    );
  }
}

export default PopUp;