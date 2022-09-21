import React, { PureComponent } from "react";
import arrow from "../../assets/arrow.svg";
import "./currencySelect.scss";
import OutsideClickHandler from "../OutsideClickHandler";

export class CurrencySelect extends PureComponent {
  state = { selected: false };

  setSelected = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };

  render() {
    const { currencies, currencyIndex, setCurrency } = this.props,
      selected = this.state.selected,
      setSelected = this.setSelected;

    return (
      <div className="currency_select">
        <div className="select_menu">
          <div className="select_button" onClick={() => setSelected()}>
            <span className="select_button_text">
              {currencies[currencyIndex].symbol}
            </span>
            <img
              src={arrow}
              className="select_button_icon"
              alt="icon"
              style={{
                transform: selected ? "rotate(180deg)" : "inherit",
              }}
            />
          </div>
          {selected && (
            <OutsideClickHandler onOutsideClick={setSelected}>
              <ul className="select_options">
                {currencies.map((currency) => (
                  <li
                    key={currency.label}
                    className="option"
                    onClick={() => {
                      setCurrency(currencies.indexOf(currency));
                      setSelected();
                    }}
                  >
                    {currency.symbol} {currency.label}
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
