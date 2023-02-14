import { useState, useEffect } from "react";
import "../css/Payment.css";
import CheckoutProduct from "../components/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormatC from "../components/CurrencyFormatC";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "../axios";
import { db } from "../FireBaseApp";
import { basketActions } from "../store/basketSlice";
import { useSelector, useDispatch } from "react-redux";
function Payment() {
  let user = useSelector((state) => state.basket.user);
  let basket = useSelector((state) => state.basket.basket);
  let totalPrice = useSelector((state) => state.basket.totalPrice);
  let totalAmount = useSelector((state) => state.basket.totalAmount);
  let dispatch = useDispatch();
  let stripe = useStripe();
  let elements = useElements();
  let [error, setError] = useState(null);
  let [disable, setDisable] = useState(true);
  let [processing, setProcessing] = useState("");
  let [succeeded, setSucceeded] = useState(false);
  let [clientSecret, setClientSecret] = useState(true);
  let history = useHistory();

  useEffect(() => {
    //generate the special stripe secret which allows us to charge  a customer
    if (totalAmount) {
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
  }, [totalAmount, totalPrice]);

  let handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    //WOW
    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent === payment confirmation
        //when we complete the payment
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setProcessing(false);
        setError(false);
        dispatch(basketActions.emptyBasket());

        history.replace("/orders");
      })
      .catch((err) => setError(true));
  };
  let handleChange = (e) => {
    setDisable(e.empty);
    setError(e.error?.message);
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout <Link to="/checkout">({totalAmount} items)</Link>
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Account</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
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
              {error ? <h4 className="error">{error}</h4> : null}
              <CardElement onChange={handleChange} />
              <div>
                <CurrencyFormatC
                  title="payment"
                  value={totalPrice}
                  amount={totalAmount}
                />
              </div>
              <div>
                <button disabled={disable || processing || succeeded}>
                  {processing ? "Processing" : "Buy now"}
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
