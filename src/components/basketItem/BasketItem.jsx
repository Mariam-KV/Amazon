import "../css/BasketItem.css";
import { useState } from "react";
import { basketActions } from "../redux/slices";
import { useDispatch } from "react-redux";
function BasketItem({ item, hide }) {
  let dispatch = useDispatch();
  let { id, title, images, price, rating, description } = item;
  let [hideButton, setHideButton] = useState(false);
  function removeFromBasket() {
    dispatch(basketActions.removeFromBasket(id));
  }
  if (hide === true && hideButton !== true) {
    setHideButton(true);
  }

  return (
    <div className="basketItem">
      <img className="basketItem__image" src={images[0]} alt="basketItem" />

      <div className="basketItem__info">
        <p className="basketItem__title">{title}</p>
        <div className="basketItem__rating">{"🌟".repeat(rating)}</div>
        <p>{description}</p>
        <p className="basketItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        {hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}
export default BasketItem;
