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

export class CartOverlay extends PureComponent {
  state = { selected: false, active: false };

  setSelected = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };

  // function activates PopUp toast for 2 seconds
  createToast = () => {
    if (!this.state.active) {
      this.setState({
        active: !this.state.active,
      });
      setTimeout(() => {
        this.setState({
          active: !this.state.active,
        });
      }, 2000);
    }
  };

  calculateTotal(products) {
    let total = 0;
    products.forEach((product) => {
      total =
        total +
        product.prices[this.props.currencyIndex].amount * product.quantity;
    });
    total += (total / 100) * 21;
    return Number(total.toFixed(2));
  }

  handleReload = () => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    const cartBadge =
      this.props.cartItemsQuantity === 0 ? "" : "overlay_cart_icon";
    const totalPrice = this.calculateTotal(this.props.cartItems);
    const isEmpty = this.props.cartItems.length === 0 ? true : false;
    return (
      <div className="overlay">
        <div
          className={cartBadge}
          value={this.props.cartItemsQuantity}
          onClick={() => (isEmpty ? this.createToast() : this.setSelected())}
        >
          <img src={emptyCartIcon} alt="cart overlay" />
        </div>
        <Toast message="Your cart is empty" active={this.state.active} />
        {this.state.selected && (
          <>
            <OutsideClickHandler onOutsideClick={this.setSelected}>
              {!isEmpty && (
                <div className="overlay_cart">
                  <div className="overlay_cart_title">
                    <span className="title">My Bag. </span>
                    <span className="quantity">{`${this.props.cartItemsQuantity} items`}</span>
                  </div>
                  <div className="overlay_cart_items">
                    {this.props.cartItems.map((item) => (
                      <div className="overlay_cart_item" key={nextId()}>
                        <div className="overlay_cart_properties">
                          <ProductTitle brand={item.brand} name={item.name} />
                          <span className="overlay_cart_price">
                            {
                              this.props.cartItems[0].prices[
                                this.props.currencyIndex
                              ].currency.symbol
                            }
                            {(
                              item.prices[this.props.currencyIndex].amount *
                              item.quantity
                            ).toFixed(2)}
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
                    <span>{`${
                      this.props.cartItems[0].prices[this.props.currencyIndex]
                        .currency.symbol
                    }${totalPrice}`}</span>
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
                    <button
                      className="checkout"
                      onClick={() => this.handleReload()}
                    >
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