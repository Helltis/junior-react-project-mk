import React, { PureComponent } from "react";
import "./cartItems.scss";
import ImageSlider from "../../components/ImageSlider";
import QuantityButtons from "../../components/QuantityButtons";

export class CartItems extends PureComponent {
  render() {
    const { onAdd, onRemove, item } = this.props;
    return (
      <div className="cartComponents">
        <QuantityButtons onAdd={onAdd} onRemove={onRemove} item={item} />
        <ImageSlider gallery={item.gallery} />
      </div>
    );
  }
}

export default CartItems;
