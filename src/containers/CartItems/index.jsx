import React, { PureComponent } from "react";
import "./cartItems.scss";
import ImageSlider from "../../components/ImageSlider";
import QuantityButtons from "../../components/QuantityButtons";

export class CartItems extends PureComponent {
  render() {
    const { gallery, onAdd, onRemove, item, quantity } = this.props;
    return (
      <div className="cartComponents">
        <QuantityButtons
          onAdd={onAdd}
          onRemove={onRemove}
          item={item}
          quantity={quantity}
        />
        <ImageSlider gallery={gallery} />
      </div>
    );
  }
}

export default CartItems;
