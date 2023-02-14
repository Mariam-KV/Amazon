import React from "react";
import "../css/Subtotal.css";
import CurrencyFormatC from "./CurrencyFormatC";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
export default function Subtotal() {
  let user = useSelector((state) => state.basket?.user);
  let totalPrice = useSelector((state) => state.basket.totalPrice);
  let totalAmount = useSelector((state) => state.basket.totalAmount);
  let history = useHistory();

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
