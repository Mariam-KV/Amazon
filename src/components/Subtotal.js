import React from "react";
import "../css/Subtotal.css";
import { useStateValue } from "../Context";
import CurrencyFormatC from "./CurrencyFormatC";
import { basketActions } from "../slices/store";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
export default function Subtotal() {
  let basket = useSelector((state) => state.basket?.basket);
  let user = useSelector((state) => state.basket?.user);
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
          if (user?.email) {
            history.push("/payment");
          } else {
            history.push("/login");
          }
        }}
      >
        {user?.email ? "Proceed to Checkout" : "Sign in to Checkout"}
      </button>
    </div>
  );
}
