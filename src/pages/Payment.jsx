import { useState, useEffect } from "react";
import "../css/Payment.css";
import CheckoutProduct from "../components/CheckoutProduct";
import CurrencyFormatC from "../components/CurrencyFormatC";
import { useHistory } from "react-router-dom";
import axios from "../axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { paymentThunk } from "../redux/thunks/paymentThunk";
import { useSelector, useDispatch } from "react-redux";
function Payment() {
  const { user, basket, totalPrice, totalAmount } = useSelector(
    (state) => state.basket
  );
  const [clientSecret, setClientSecret] = useState(true);
  const { status } = useSelector((state) => state.stripe);
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  useEffect(() => {
    //generate the special stripe secret which allows us to charge  a customer
    if (totalAmount) {
      const getClientSecret = async () => {
        const response = await axios({
          method: "post",
          url: `/payments/create/?total=${totalPrice * 100}`,
        });
        //from backend (functions)

        setClientSecret(response.data.clientSecret);
      };
      getClientSecret();
    }
  }, [dispatch, totalAmount, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      paymentThunk({
        stripe,
        elements,
        CardElement,
        clientSecret,
        user,
        basket,
      })
    );
    if (status === "fulfilled") history.replace("/orders");
    else {
      history.replace("/");
    }
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
              {error ? <h4 className="error">{error}</h4> : null}

              <CardElement
                onChange={(e) => {
                  //setting errors for invalid data before submitting

                  setError(e.error?.message);
                  setDisable(!e.complete);
                }}
                value={3}
              />
              <div>
                <CurrencyFormatC
                  title="payment"
                  value={totalPrice}
                  amount={totalAmount}
                />
              </div>
              <div>
                <button disabled={disable || status === "loading"}>
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

export default Payment;
