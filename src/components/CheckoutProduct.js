import React from "react";
import "../css/CheckoutProduct.css";
import { basketActions } from "../store/basketSlice";
import { useDispatch } from "react-redux";
import ProductRating from "./ProductRating";
function CheckoutProduct({ item, hide = false }) {
  let dispatch = useDispatch();
  let { id, title, image, price, rating, description, amount } = item;

  function removeFromBasket() {
    dispatch(basketActions.removeFromBasket(id));
  }
  function addingToBasket() {
    dispatch(
      basketActions.addToBasket({
        id,
        title,
        image,
        price,
        rating,
        description,
        amount,
      })
    );
  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="basketItem" />

      <div className="checkoutProduct__info">
        <h3 className="checkoutProduct__title">{title}</h3>
        <ProductRating rating={rating} />
        <p className="checkoutProduct__description">{description}</p>
        <h3>Quantity: {amount}</h3>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      {hide ? (
        ""
      ) : (
        <div className="checkoutProduct__buttons">
          <button onClick={() => removeFromBasket()}>Remove from Basket</button>
          <button onClick={() => addingToBasket()}>Add to Basket</button>
        </div>
      )}
    </div>
  );
}

export default CheckoutProduct;
