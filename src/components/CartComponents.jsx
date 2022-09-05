import React, { Component } from "react";
import minus from "../assets/minus-square.svg";
import plus from "../assets/plus-square.svg";
import left from "../assets/arrow-left.svg";
import right from "../assets/arrow-right.svg";
import "./cartComponents.scss";

// this component is used to render add/remove buttons and product gallery inside cart
// takes five props:
// onAdd, onRemove methods
// product, gallery, quantity objects
export class CartComponents extends Component {
  state = {
    imgIndex: 0,
  };
  glrLen = this.props.gallery.length;
  imgFwd = () => {
    if (this.state.imgIndex < this.glrLen - 1) {
      this.setState({ imgIndex: this.state.imgIndex + 1 });
    } else {
      this.setState({ imgIndex: 0 });
    }
  };
  imgBck = () => {
    if (this.state.imgIndex > 0) {
      this.setState({ imgIndex: this.state.imgIndex - 1 });
    } else {
      this.setState({ imgIndex: this.glrLen - 1 });
    }
  };
  render() {
    const imgArrows =
      this.glrLen > 1
        ? "cartComponents_preview_buttons"
        : "cartComponents_preview_buttons_disabled";
    return (
      <div className="cartComponents">
        <div className="cartComponents_quantity">
          <input
            type="image"
            src={plus}
            alt="plus"
            onClick={() => this.props.onAdd(this.props.item)}
          />
          <p className="cartComponents_quantity_number">
            {this.props.quantity}
          </p>
          <input
            type="image"
            src={minus}
            alt="minus"
            onClick={() => this.props.onRemove(this.props.item)}
          />
        </div>
        <div className="cartComponents_preview">
          <img
            src={this.props.gallery[this.state.imgIndex]}
            alt="product preview"
          />
          <div className={imgArrows}>
            <input type="image" src={left} alt="left" onClick={this.imgBck} />
            <input type="image" src={right} alt="right" onClick={this.imgFwd} />
          </div>
        </div>
      </div>
    );
  }
}

export default CartComponents;
