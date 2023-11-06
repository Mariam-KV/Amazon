import React from "react";
import "../css/Subtotal.css";
import CurrencyFormatC from "./CurrencyFormatC";
import { sidebarActions } from "../store/slices/sidebarSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
export default function Subtotal() {
  let user = useSelector((state) => state.basket?.user);
  let totalPrice = useSelector((state) => state.basket.totalPrice);
  let totalAmount = useSelector((state) => state.basket.totalAmount);
  let history = useHistory();
  let dispatch = useDispatch();
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
          dispatch(sidebarActions.toggleShow(false));
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
