import React, { PureComponent } from "react";
import CartItems from "../../containers/CartItems";
import { ProductTitle } from "../../components/ProductTitle";
import { ProductProperty } from "../../components/ProductProperty";
import { ProductColor } from "../../components/ProductColor";
import "./cart.scss";
import nextId from "react-id-generator";
import { checkout } from "../../utils/handleCheckout";
import {
  calculateTax,
  itemPrice,
  calculateTotalWithTax,
} from "../../utils/calculatePrice";

export class Cart extends PureComponent {
  renderEmptyCart = () => {
    <h1>Your cart is empty</h1>;
  };

  renderCart = (cartItems) => {
    const { currencyIndex, onAdd, onRemove, quantity } = this.props;
    const totalPrice = calculateTotalWithTax(cartItems, currencyIndex);
    const tax = calculateTax(totalPrice);
    const currencySymbol = cartItems[0].prices[currencyIndex].currency.symbol;
    return (
      <React.Fragment>
        {cartItems.map((item) => (
          <React.Fragment key={nextId()}>
            <div className="pageCart_item">
              <div className="pageCart_selectedProps">
                <ProductTitle brand={item.brand} name={item.name} />
                <span>
                  {`${currencySymbol}${itemPrice(item, currencyIndex)}`}
                </span>
                {item.attributes.map((attribute) => {
                  if (attribute.type === "text") {
                    return (
                      <ProductProperty
                        attribute={attribute}
                        key={attribute.id}
                        selected={item.selectedAttributes}
                      />
                    );
                  } else {
                    return (
                      <ProductColor
                        attribute={attribute}
                        key={attribute.id}
                        selected={item.selectedAttributes}
                      />
                    );
                  }
                })}
              </div>
              <CartItems onAdd={onAdd} onRemove={onRemove} item={item} />
            </div>
            <span className="pageCart_divider" />
          </React.Fragment>
        ))}
        <div className="pageCart_summary">
          <div className="pageCart_summary_static">
            <p>Tax 21%:</p>
            <p>Quantity:</p>
            <p style={{ fontWeight: 500 }}>Total:</p>
          </div>
          <div className="pageCart_summary_dynamic">
            <p>{`${currencySymbol}${tax}`}</p>
            <p>{quantity}</p>
            <p>{`${currencySymbol}${totalPrice}`}</p>
          </div>
        </div>
        <button className="pageCart_order" onClick={() => checkout()}>
          ORDER
        </button>
      </React.Fragment>
    );
  };
  render() {
    const { cartItems } = this.props;
    return (
      <div className="pageCart">
        <p className="pageCart_title">CART</p>
        {cartItems.length === 0
          ? this.renderEmptyCart()
          : this.renderCart(cartItems)}
      </div>
    );
  }
}

export default Cart;
