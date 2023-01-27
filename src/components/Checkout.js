import React from "react";
import "../css/Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          alt="ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h2 className="checkout__title">shoppun </h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
        <h2>gff</h2>
      </div>
    </div>
  );
}

export default Checkout;
