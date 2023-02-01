import React from "react";
import "../css/Payment.css";
import BasketItem from "../components/BasketItem";
import { useStateValue } from "../Context";
function Payment() {
  let [{ user, basket }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>deeeeeeee</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>tbilisi</p>
            <p>dfsfs</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item, i) => {
              return <BasketItem item={item} key={"p-item" + i} />;
            })}
          </div>
        </div>
        <div className="payment__section">
          {" "}
          <div className="payment__title">Payment method</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
