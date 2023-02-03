import "../css/BasketItem.css";
import { useState } from "react";
import { useStateValue } from "../Context.js";
function BasketItem({ item, order = 0 }) {
  let [state, dispatch] = useStateValue();
  let { id, title, image, price, rating } = item;
  let [hideButton, setHideButton] = useState(false);
  function removeFromBasket() {
    dispatch({ type: "REMOVE_FROM_BASKET", passedId: id });
  }
  let button = (
    <>
      {!hideButton && (
        <button onClick={removeFromBasket}>Remove from Basket</button>
      )}{" "}
    </>
  );
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="basketItem" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">{"🌟".repeat(rating)}</div>
        {order === 0 ? button : null}
      </div>
    </div>
  );
}
export default BasketItem;
