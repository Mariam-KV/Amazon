import React from "react";
import "../css/CheckoutProduct.css";
import { useState } from "react";
import { basketActions } from "../store";
import { useSelector, useDispatch } from "react-redux";

function CheckoutProduct({ item, hide }) {
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
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__rating">{"🌟".repeat(rating)}</div>
        <p className="checkoutProduct__description">{description}</p>
        <h3>{amount}</h3>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="checkoutProduct__buttons">
        <button onClick={removeFromBasket}>Remove from Basket</button>
        <button onClick={addingToBasket}>Add to Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
