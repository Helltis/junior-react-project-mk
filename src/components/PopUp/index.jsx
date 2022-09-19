import React, { PureComponent } from "react";
import "./popUp.scss";

export class PopUp extends PureComponent {
  render() {
    const { active, message } = this.props;
    return (
      <div className="popup" id={active ? "show" : "hide"}>
        <div className="popup_message">{message}</div>
      </div>
    );
  }
}

export default PopUp;
