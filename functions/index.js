// Node.js

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MWbQtBhC2OIJsTPQpv49jKVmIVx6uhYqAzKyxbUiiF7o0CNhJcCpcIIJSMjEeLtgdX9iYQK92ZK54HfnodvVcFx006QrQm2f3"
);
// API

// -API config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  let total = request.query.total;
  console.log("boom", total);
  let paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // ok - created paymentIntent
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen command
exports.api = functions.https.onRequest(app);
// Eample endpoint
//  http://127.0.0.1:5001/fir-214b5/us-central1/api
