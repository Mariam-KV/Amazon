import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { stripeActions } from "../slices/stripeSlice";
console.log("client secret");
export const getClientSecretThunk = createAsyncThunk(
  "client secret",
  async ({ totalPrice }, { dispatch }) => {
    console.log(3333333333);
    const response = await axios({
      method: "post",
      url: `/payments/create/?total=${totalPrice * 100}`,
    });
    console.log(response, 4444444);
    //from backend (functions)
    console.log(response.data.clientSecret, 2345678);
    dispatch(stripeActions.defineSecret(response.data.clientSecret));
  }
);
