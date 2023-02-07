import React from "react";
import "../css/Checkout.css";
import BasketItem from "../components/BasketItem";
import Subtotal from "../components/Subtotal";
import { basketActions } from "../slices/store";
import { useSelector, useDispatch } from "react-redux";
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
            Your shopping basket
            {basket.length === 0 ? " is empty" : ` (${basket.length} items)`}
          </h2>
        </div>
        {basket.map((item, i) => {
          return <BasketItem item={item} key={i} hide={true} />;
        })}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
