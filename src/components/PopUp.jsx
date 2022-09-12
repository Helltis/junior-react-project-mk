import React, { PureComponent } from "react";
import "./popUp.scss";

// this component handles toast styling
// takes two props: active bool and message string to display
export class PopUp extends PureComponent {
  render() {
    return (
      <div className="popup" id={this.props.active ? "show" : "hide"}>
        <div className="popup_message">{this.props.message}</div>
      </div>
    );
  }
}

export default PopUp;
