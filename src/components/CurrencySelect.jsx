import React, { Component } from "react";
import arrow from "../assets/arrow.svg";
import "./currencySelect.scss";
import OutsideClickHandler from "./OutsideClickHandler";

//this component renders currency selector
//on selection of currency it will find its index in currencies array and set 'currencyIndex' state
//takes three props: setCurrency method, currencies array and currencyIndex state
export class CurrencySelect extends Component {
  state = { selected: false };

  setSelected = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };

  render() {
    return (
      <div className="currency_select">
        <div className="select_menu">
          <div className="select_button" onClick={() => this.setSelected()}>
            <span className="select_button_text">
              {this.props.currencies[this.props.currencyIndex].symbol}
            </span>
            <img
              src={arrow}
              className="select_button_icon"
              alt="icon"
              style={{
                transform: this.state.selected ? "rotate(180deg)" : "inherit",
              }}
            />
          </div>
          {this.state.selected && (
            <OutsideClickHandler onOutsideClick={this.setSelected}>
              <ul className="select_options">
                {this.props.currencies.map((el) => (
                  <li
                    key={el.label}
                    className="option"
                    onClick={() => {
                      this.props.setCurrency(this.props.currencies.indexOf(el));
                      this.setSelected();
                    }}
                  >
                    {el.symbol} {el.label}
                  </li>
                ))}
              </ul>
            </OutsideClickHandler>
          )}
        </div>
      </div>
    );
  }
}

export default CurrencySelect;
