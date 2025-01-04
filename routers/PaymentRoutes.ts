import { Request, Response } from "express";
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 8080;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/payment-sheet", async (req: Request, res: Response) => {
  // Use an existing Customer ID if this is a returning customer.
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY!);
  const amount = req.body.amount;
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: "2024-12-18.acacia" }
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "eur",
    customer: customer.id,
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter
    // is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: process.env.STRIPE_PUBLISH_KEY!,
  });
});

app.listen(PORT, () => {
  console.log("Server running" + PORT);
});
