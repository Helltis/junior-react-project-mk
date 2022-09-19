import React, { PureComponent } from "react";
import minus from "../../assets/minus-square.svg";
import plus from "../../assets/plus-square.svg";

export class QuantityButtons extends PureComponent {
  render() {
    const { onAdd, item, quantity, onRemove } = this.props;
    return (
      <div className="cartComponents_quantity">
        <input type="image" src={plus} alt="plus" onClick={() => onAdd(item)} />
        <p className="cartComponents_quantity_number">{quantity}</p>
        <input
          type="image"
          src={minus}
          alt="minus"
          onClick={() => onRemove(item)}
        />
      </div>
    );
  }
}

export default QuantityButtons;
