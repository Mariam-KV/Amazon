import React from "react";
import "../css/CheckoutProduct.css";
import { basketActions } from "../store/basketSlice";
import { useDispatch } from "react-redux";
import ProductRating from "./ProductRating";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
function CheckoutProduct({ item, hide = false }) {
  let dispatch = useDispatch();
  let { id, title, image, price, rating, description, amount } = item;

  function removeFromBasket(all = false) {
    dispatch(basketActions.removeFromBasket({ id, all }));
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
        <h3 className="checkoutProduct__title">
          {title}
          {hide ? (
            ""
          ) : (
            <div className="checkoutProduct__title-icon">
              <CloseIcon onClick={() => removeFromBasket(true)} />
            </div>
          )}
        </h3>
        <ProductRating rating={rating} />
        <p className="checkoutProduct__description">{description}</p>

        <div className="checkoutProduct__priceAmount">
          {hide ? (
            `Quantity: ${amount}`
          ) : (
            <>
              <div className="checkoutProduct__amount">
                <RemoveIcon onClick={() => removeFromBasket()} />
                {amount}
                <AddIcon onClick={() => addingToBasket()} />
              </div>
              <p className="checkoutProduct__price-one">${price}</p>
            </>
          )}

          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price * amount}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
