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
      <CurrencyFormatC
        title={"subtotal"}
        value={totalPrice}
        amount={state.basket?.length}
      />
      <button onClick={() => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}
