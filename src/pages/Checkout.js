import React from "react";
import "../css/Checkout.css";
import Subtotal from "../components/Subtotal";
import { basketActions } from "../store";
import { useSelector, useDispatch } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
function Checkout() {
  let basket = useSelector((state) => state.basket?.basket);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          alt="ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div className="checkout__title">
          <h2>
            Your Amazon basket
            {basket.length === 0 ? " is empty" : null}
          </h2>
        </div>
        {basket.map((item, i) => {
          return <CheckoutProduct item={item} key={i} />;
        })}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
