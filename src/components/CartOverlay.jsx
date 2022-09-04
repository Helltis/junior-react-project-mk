import React, { Component } from "react";
import emptyCartIcon from "../assets/emptyCartIcon.svg";
import "./cartOverlay.scss";
import OutsideClickHandler from "./OutsideClickHandler";
import { ProductTitle } from "./ProductTitle";
import { ProductProperty } from "./ProductProperty";
import { ProductColor } from "./ProductColor";
import { CartComponents } from "./CartComponents";
import { Link } from "react-router-dom";
import nextId from "react-id-generator";

//TODO fix + - icons
//FIXME total should be with tax
//FIXME properties fit
export class CartOverlay extends Component {
  state = { selected: false };

  setSelected = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };

  calculateTotal(products) {
    let total = 0;
    products.forEach((product) => {
      total =
        total +
        product.prices[this.props.currencyIndex].amount * product.quantity;
    });
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
          onClick={() => this.setSelected()}
        >
          <img src={emptyCartIcon} alt="cart overlay" />
        </div>
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
                        <CartComponents
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
              {isEmpty && (
                <div className="overlay_cart">Your cart is empty.</div>
              )}
            </OutsideClickHandler>
            <div className="gray_background"></div>
          </>
        )}
      </div>
    );
  }
}

export default CartOverlay;
