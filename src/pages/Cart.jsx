import React, { Component } from "react";
import CartComponents from "../components/CartComponents";
import { ProductTitle } from "../components/ProductTitle";
import { ProductProperty } from "../components/ProductProperty";
import { ProductColor } from "../components/ProductColor";
import "./cart.scss";

export class Cart extends Component {
  handleReload = () => {
    localStorage.clear();
    window.location.reload();
  };
  render() {
    const isEmpty = this.props.cartItems.length === 0 ? true : false;
    let cartItems;
    if (isEmpty) {
      cartItems = <h1>Your cart is empty</h1>;
    } else {
      cartItems = (
        <React.Fragment>
          {this.props.cartItems.map((item) => (
            <React.Fragment key={item.id}>
              <div className="pageCart_item">
                <div className="pageCart_selectedProps">
                  <ProductTitle brand={item.brand} name={item.name} />
                  <span>
                    {item.prices[this.props.currencyIndex].currency.symbol}
                    {item.prices[this.props.currencyIndex].amount}
                  </span>
                  {item.attributes.map((attribute) => {
                    if (attribute.type === "text") {
                      return (
                        <ProductProperty
                          attribute={attribute}
                          key={attribute.id}
                        />
                      );
                    } else {
                      return (
                        <ProductColor
                          attribute={attribute}
                          key={attribute.id}
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
              <p>$42.00</p>
              <p>2</p>
              <p>$200.00</p>
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
