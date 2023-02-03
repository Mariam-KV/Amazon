import "../css/BasketItem.css";
import { useState } from "react";
import { useStateValue } from "../Context.js";
function BasketItem({ item, hide }) {
  let [dispatch] = useStateValue();
  let { id, title, image, price, rating } = item;
  let [hideButton, setHideButton] = useState(false);
  function removeFromBasket() {
    dispatch({ type: "REMOVE_FROM_BASKET", passedId: id });
  }

  if (hide === true) {
    setHideButton(true);
  }

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
        {hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}
export default BasketItem;
