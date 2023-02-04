import React from "react";
import "../css/Subtotal.css";
import { useStateValue } from "../Context";
import CurrencyFormatC from "./CurrencyFormatC";
import { useHistory } from "react-router-dom";
export default function Subtotal() {
  let [{ basket, user }] = useStateValue();
  let history = useHistory();
  let totalPrice = basket?.reduce((acc, item) => +item.price + acc, 0);
  return (
    <div className="subtotal">
      <CurrencyFormatC
        title={"subtotal"}
        value={totalPrice}
        amount={basket?.length}
      />
      <button
        onClick={() => {
          if (user) {
            history.push("/payment");
          } else {
            history.push("/login");
          }
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
