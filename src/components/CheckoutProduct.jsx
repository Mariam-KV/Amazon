import React from "react";
import "../css/CheckoutProduct.css";
import { basketActions } from "../redux/slices/basketSlice";
import { useDispatch } from "react-redux";
import ProductRating from "./ProductRating";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
function CheckoutProduct({ item, hide = false }) {
  const dispatch = useDispatch();
  const { id, title, images, price, rating, description, amount } = item;

  function removeFromBasket(all = false) {
    dispatch(basketActions.removeFromBasket({ id, all }));
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={images} alt="basketItem" />
      <div className="checkoutProduct__info">
        <h3 className="checkoutProduct__title">
          {title}
          {!hide && (
            <div className="checkoutProduct__title-icon">
              <DeleteIcon onClick={() => removeFromBasket(true)} />
            </div>
          )}
        </h3>
        {hide && (
          <>
            <ProductRating rating={rating} />
            <p className="checkoutProduct__description">{description}</p>
          </>
        )}
        <div className="checkoutProduct__priceAmount">
          {hide ? (
            `Quantity: ${amount}`
          ) : (
            <>
              <div className="checkoutProduct__amount">
                <RemoveIcon onClick={() => removeFromBasket()} />
                {amount}
                <AddIcon
                  onClick={() =>
                    dispatch(basketActions.addToBasket({ ...item, amount: 1 }))
                  }
                />
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
