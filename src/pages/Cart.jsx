import React, { Component } from "react";
import CartComponents from "../components/CartComponents";
import { ProductTitle } from "../components/ProductTitle";
import { ProductProperty } from "../components/ProductProperty";
import { ProductColor } from "../components/ProductColor";
import "./cart.scss";
import nextId from "react-id-generator";
//TODO fix omegabug with managing items in cart
export class Cart extends Component {
  handleReload = () => {
    localStorage.clear();
    window.location.reload();
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
  calculateTax(total) {
    return Number(((total / 100) * 21).toFixed(2));
  }
  render() {
    const isEmpty = this.props.cartItems.length === 0 ? true : false;
    let cartItems;
    if (isEmpty) {
      cartItems = <h1>Your cart is empty</h1>;
    } else {
      const totalPrice = this.calculateTotal(this.props.cartItems);
      const tax = this.calculateTax(totalPrice);
      const withTax = (totalPrice + tax).toFixed(2);
      const currencySymbol =
        this.props.cartItems[0].prices[this.props.currencyIndex].currency
          .symbol;
      cartItems = (
        <React.Fragment>
          {this.props.cartItems.map((item) => (
            <React.Fragment key={nextId()}>
              <div className="pageCart_item">
                <div className="pageCart_selectedProps">
                  <ProductTitle brand={item.brand} name={item.name} />
                  <span>
                    {currencySymbol}
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
              <p>{this.props.quantity}</p>
              <p>{`${currencySymbol}${withTax}`}</p>
            </div>
          </div>
          <button
            className="pageCart_order"
            onClick={() => this.handleReload()}
          >
            ORDER
          </button>
        </React.Fragment>
      );
    }

    return (
      <div className="pageCart">
        <p className="pageCart_title">CART</p>
        {cartItems}
      </div>
    );
  }
}

export default Cart;
