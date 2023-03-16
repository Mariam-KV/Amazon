import "../css/BasketItem.css";
import { useState } from "react";
import { basketActions } from "../store";
import { useDispatch } from "react-redux";
function BasketItem({ item, hide }) {
  //let basket = useSelector((state) => state.basket);

  let dispatch = useDispatch();
  let { id, title, image, price, rating, description } = item;
  let [hideButton, setHideButton] = useState(false);
  function removeFromBasket() {
    dispatch(basketActions.removeFromBasket(id));
  }
  if (hide === true && hideButton !== true) {
    setHideButton(true);
  }

  return (
    <div className="basketItem">
      <img className="basketItem__image" src={image} alt="basketItem" />

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
