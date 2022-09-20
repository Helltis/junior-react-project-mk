import React, { PureComponent } from "react";
import emptyCartIcon from "../../assets/emptyCartIcon.svg";
import "./cartOverlay.scss";
import OutsideClickHandler from "../../components/OutsideClickHandler";
import { ProductTitle } from "../../components/ProductTitle";
import { ProductProperty } from "../../components/ProductProperty";
import { ProductColor } from "../../components/ProductColor";
import CartItems from "../CartItems";
import { Link } from "react-router-dom";
import nextId from "react-id-generator";
import Toast from "../../components/Toast";
import { checkout } from "../../utils/handleCheckout";
import { calculateTotalWithTax, itemPrice } from "../../utils/calculatePrice";

export class CartOverlay extends PureComponent {
  state = { selected: false, toast: false };

  setSelected = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };

  createToast = () => {
    if (!this.state.toast) {
      this.setState({
        active: !this.state.toast,
      });
      setTimeout(() => {
        this.setState({
          active: !this.state.toast,
        });
      }, 2000);
    }
  };

  render() {
    const { cartItems, currencyIndex, cartItemsQuantity } = this.props;
    const { selected, toast } = this.state;
    const totalPrice = calculateTotalWithTax(cartItems, currencyIndex);
    const cartBadge = cartItemsQuantity === 0 ? "" : "overlay_cart_icon";
    const isEmpty = cartItems.length === 0 ? true : false;
    const currencySymbol = cartItems[0]?.prices[currencyIndex].currency.symbol;
    return (
      <div className="overlay">
        <div
          className={cartBadge}
          value={cartItemsQuantity}
          onClick={() => (isEmpty ? this.createToast() : this.setSelected())}
        >
          <img src={emptyCartIcon} alt="cart overlay" />
        </div>
        <Toast message="Your cart is empty" active={toast} />
        {selected && (
          <>
            <OutsideClickHandler onOutsideClick={this.setSelected}>
              {!isEmpty && (
                <div className="overlay_cart">
                  <div className="overlay_cart_title">
                    <span className="title">My Bag. </span>
                    <span className="quantity">{`${cartItemsQuantity} items`}</span>
                  </div>
                  <div className="overlay_cart_items">
                    {cartItems.map((item) => (
                      <div className="overlay_cart_item" key={nextId()}>
                        <div className="overlay_cart_properties">
                          <ProductTitle brand={item.brand} name={item.name} />
                          <span className="overlay_cart_price">
                            {currencySymbol}
                            {itemPrice(item, currencyIndex)}
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
                        <CartItems
                          gallery={item.gallery}
                          quantity={item.quantity}
                          onAdd={this.props.onAdd}
                          onRemove={this.props.onRemove}
                          item={item}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="overlay_cart_total">
                    <span>Total</span>
                    <span>{`${currencySymbol}${totalPrice}`}</span>
                  </div>
                  <div className="overlay_cart_buttons">
                    <Link to="/cart">
                      <button
                        className="viewBag"
                        onClick={() => this.setSelected()}
                      >
                        VIEW BAG
                      </button>
                    </Link>
                    <button className="checkout" onClick={() => checkout()}>
                      CHECK OUT
                    </button>
                  </div>
                </div>
              )}
            </OutsideClickHandler>
            {/* this div is used to create gray background on cart overlay activation */}
            <div className="gray_background"></div>
          </>
        )}
      </div>
    );
  }
}

export default CartOverlay;
