import React from "react";
import "../css/Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img
        src="https://m.media-amazon.com/images/I/91931AxlUPL._AC_SR175,263_QL70_.jpg"
        alt=""
      />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
