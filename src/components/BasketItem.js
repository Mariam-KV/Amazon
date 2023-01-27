import React from "react";
import "../css/BasketItem.css";
function BasketItem({ item }) {
  console.log(item);
  let { id, title, image, price, rating } = item;
  console.log(id);
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="basketItem" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {/* {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )} */}
      </div>
    </div>
  );
}
export default BasketItem;
