import React from "react";
import { useStateValue } from "../Context";
import "../css/Product.css";

function Product({ id, title, image, price, rating }) {
  let [dispatch] = useStateValue();

  function addingToBasket() {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
    console.log(id);
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}fdfdfgfd</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}3232</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟🌟🌟🌟🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addingToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
