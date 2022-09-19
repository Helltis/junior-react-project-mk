import React, { PureComponent, createRef } from "react";

// this components is used to check if event happens outside of child element
// takes a function to execute as prop
export class OutsideClickHandler extends PureComponent {
  wrapperRef = createRef();
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleClickOutside = (event) => {
    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target)
    ) {
      this.props.onOutsideClick();
    }
  };
  render() {
    return <div ref={this.wrapperRef}>{this.props.children}</div>;
  }
}

export default OutsideClickHandler;
