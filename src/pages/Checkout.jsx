import React from "react";
import "../css/Checkout.css";
import { useSelector, useDispatch } from "react-redux";
import { basketActions } from "../store/slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
function Checkout() {
  let basket = useSelector((state) => state.basket?.basket);
  let totalAmount = useSelector((state) => state.basket?.totalAmount);
  let dispatch = useDispatch();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__title">
          <h2>
            Your Amazon Cart
            {basket.length === 0 ? " is empty" : ` ( ${totalAmount} )`}
          </h2>
          {basket.length > 0 && (
            <DeleteForeverIcon
              onClick={() => dispatch(basketActions.emptyBasket())}
            />
          )}
        </div>
        {basket.map((item, i) => {
          return <CheckoutProduct item={item} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Checkout;
