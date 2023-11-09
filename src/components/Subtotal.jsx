import React from "react";
import "../css/Subtotal.css";
import CurrencyFormatC from "./CurrencyFormatC";
import { sidebarActions } from "../redux/slices/sidebarSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
export default function Subtotal() {
  const user = useSelector((state) => state.basket?.user);
  const { totalPrice, totalAmount } = useSelector((state) => state.basket);

  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="subtotal">
      <CurrencyFormatC
        title={"subtotal"}
        value={totalPrice}
        amount={totalAmount}
      />
      <button
      
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
