import "../css/Checkout.css";
import { useState } from "react";
import { basketActions } from "../slices/store";
import { useSelector, useDispatch } from "react-redux";
function BasketItem({ item, hide }) {
  let basket = useSelector((state) => state.basket);

  let dispatch = useDispatch();
  // [state, dispatch] = useStateValue();
  let { id, title, image, price, rating, description } = item;
  let [hideButton, setHideButton] = useState(false);
  function removeFromBasket() {
    dispatch(basketActions.addToBasket({ passedId: id }));
  }
  if (hide === true && hideButton !== true) {
    setHideButton(true);
  }
  console.log(rating);
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="basketItem" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__rating">{"🌟".repeat(rating)}</div>
        <p>{description}</p>
        <p className="checkoutProduct__price">
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
