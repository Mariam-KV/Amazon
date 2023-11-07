import { useState, useEffect } from "react";
import "../css/Payment.css";
import CheckoutProduct from "../components/CheckoutProduct";
import CurrencyFormatC from "../components/CurrencyFormatC";
import { useHistory } from "react-router-dom";
import axios from "../axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getClientSecretThunk } from "../redux/thunks/getClientSecretThunk";

import { paymentThunk } from "../redux/thunks/paymentThunk";
import { useSelector, useDispatch } from "react-redux";
function Payment() {
  let { user, basket, totalPrice, totalAmount } = useSelector(
    (state) => state.basket
  );
  let [clientSecret, setClientSecret] = useState(true);
  let { status, error, secret } = useSelector((state) => state.stripe);
  console.log(status, "status");
  let dispatch = useDispatch();
  let stripe = useStripe();
  let elements = useElements();
  let history = useHistory();
  let [disable, setDisable] = useState(true);
  useEffect(() => {
    //generate the special stripe secret which allows us to charge  a customer
    if (totalAmount) {
      // console.log(23);

      // dispatch(getClientSecretThunk({ totalPrice }));
      // console.log(secret);
      let getClientSecret = async () => {
        let response = await axios({
          method: "post",
          url: `/payments/create/?total=${totalPrice * 100}`,
        });
        //from backend (functions)
        setClientSecret(response.data.clientSecret);
      };
      getClientSecret();
    }
  }, [dispatch, totalAmount, totalPrice]);

  let handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      paymentThunk({
        stripe,
        elements,
        CardElement,
        clientSecret,
        user,
        basket,
        history,
      })
    );
  };
  let handleChange = (e) => {
    setDisable(e.empty);
    // setError(e.error?.message);
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout <span>({totalAmount} items)</span>
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Account</h3>
          </div>
          <div className="payment__address">
            <h3>{user?.email}</h3>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item, i) => {
              return (
                <CheckoutProduct item={item} key={"p-item" + i} hide={true} />
              );
            })}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <h4>Card number - 4242424242424242</h4>
              {status === "rejected" ? (
                <h4 className="error">{error}</h4>
              ) : null}

              <CardElement onChange={handleChange} value={3} />
              <div>
                <CurrencyFormatC
                  title="payment"
                  value={totalPrice}
                  amount={totalAmount}
                />
              </div>
              <div>
                <button>
                  {status === "loading" ? "Processing" : "Buy now"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <button disabled={disable || processing || succeeded || error}></button> */
}
export default Payment;
