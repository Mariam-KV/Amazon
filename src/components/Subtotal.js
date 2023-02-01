import React from "react";
import "../css/Subtotal.css";
import { useStateValue } from "../Context";
import CurrencyFormatC from "./CurrencyFormatC";
import { Link, useHistory } from "react-router-dom";
export default function Subtotal() {
  let [state] = useStateValue();
  let history = useHistory();
  let totalPrice = state.basket?.reduce((acc, item) => +item.price + acc, 0);

  return (
    <div className="subtotal">
      <CurrencyFormatC value={234.131} amount={3} />
      <button onClick={() => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}
