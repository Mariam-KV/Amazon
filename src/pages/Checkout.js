import React from "react";
import "../css/Checkout.css";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
function Checkout() {
  let basket = useSelector((state) => state.basket?.basket);
  let totalAmount = useSelector((state) => state.basket?.totalAmount);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__title">
          <h2>
            Your Amazon Cart
            {basket.length === 0 ? " is empty" : ` ( ${totalAmount} )`}
          </h2>
        </div>
        {basket.map((item, i) => {
          return <CheckoutProduct item={item} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Checkout;
