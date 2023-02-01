import React from "react";
import "../css/Subtotal.css";
import { useStateValue } from "../Context";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
export default function Subtotal() {
  let [state] = useStateValue();
  let history = useHistory();
  let totalPrice = state.basket?.reduce((acc, item) => +item.price + acc, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({state.basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={() => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}
