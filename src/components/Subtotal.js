import React from "react";
import "../css/Subtotal.css";
import CurrencyFormatC from "./CurrencyFormatC";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
export default function Subtotal() {
  let basket = useSelector((state) => state.basket?.basket);
  let user = useSelector((state) => state.basket?.user);
  let history = useHistory();

  let totalPrice = basket?.reduce(
    (acc, item) => +item.price * item.amount + acc,
    0
  );
  let totalAmount = basket?.reduce((acc, item) => +item.amount + acc, 0);

  return (
    <div className="subtotal">
      <CurrencyFormatC
        title={"subtotal"}
        value={totalPrice}
        amount={totalAmount}
      />
      <button
        disabled={totalAmount === 0}
        onClick={() => {
          if (user?.email) {
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
