import React from "react";
import "../css/Checkout.css";
import BasketItem from "../components/BasketItem";
import { useStateValue } from "../Context";
import Subtotal from "../components/Subtotal";

function Checkout() {
  let [state] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          alt="ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div className="checkout__title">
          <h3>Hello,{state.user?.email}</h3>
          <h2>shopping </h2>
          {state?.basket.map((item, i) => {
            return <BasketItem item={item} key={i} />;
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
