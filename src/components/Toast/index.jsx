import React, { PureComponent } from "react";
import "./toast.scss";

export class Toast extends PureComponent {
  render() {
    const { active, message } = this.props;
    return (
      <div className="popup" id={active ? "show" : "hide"}>
        <div className="popup_message">{message}</div>
      </div>
    );
  }
}

export default Toast;
