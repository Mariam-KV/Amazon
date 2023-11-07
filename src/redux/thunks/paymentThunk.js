import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../FireBaseApp";
import { basketActions } from "../slices/basketSlice";
console.log(43212345678965);
export const paymentThunk = createAsyncThunk(
  "payment",
  async (
    { stripe, elements, CardElement, clientSecret, user, basket, history },
    { dispatch }
  ) => {
    //WOW
    try {
      const stripeResponse = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });

      const { paymentIntent } = stripeResponse;

      // Handle success case
      if (stripeResponse.error) {
        throw new Error(stripeResponse.error.message);
      }

      // Update the database with payment information
      await db
        .collection("users")
        .doc(user?.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
      dispatch(basketActions.emptyBasket());
      //  history.replace("/orders");
    } catch (err) {
      console.log(err);
      alert(
        "Something went wrong ! Please try card number -  4242424242424242"
      );
      // history.replace("/");
    }
  }
);
