require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const morgan = require('morgan');

// Load Stripe API key from environment variables
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors({
  origin: true,
  credentials: true,
}));

app.get('/', (req, res) => {
  res.send({ message: "Hello!" });
});

// Endpoint to create the PaymentIntent
app.post("/create-payment-intent", async (req, res) => {
  const { amount, customerData } = req.body;
  console.log(req.body);

  // Log the incoming amount and customer data for debugging purposes
  console.log("amount is " + amount);
  console.log(customerData);

  if (!amount || amount <= 0) {
    return res.status(400).send({ error: "Invalid amount" });
  }

  try {
    // Create the customer in Stripe
    const customer = await stripe.customers.create({
      name: `${customerData.firstName} ${customerData.lastName}`,
      email: customerData.email,
      phone: customerData.phone,
      address: {
        line1: customerData.address,
        line2: customerData.apt,
        city: customerData.city,
        state: customerData.state,
        postal_code: customerData.zip,
      },
    });

    // Create the PaymentIntent and link it to the customer
    const paymentIntent = await stripe.paymentIntents.create({
      amount,  // Amount should be in cents
      currency: "usd",
      customer: customer.id,  // Link the PaymentIntent to the created customer
      automatic_payment_methods: { enabled: true },  // Enable automatic payment methods
    });

    // Send back the clientSecret and paymentIntentId to the frontend
    res.send({
      paymentIntentId: paymentIntent.id,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

// Endpoint to update the PaymentIntent amount
app.post('/update-payment-amount', async (req, res) => {
  const { newAmount, paymentIntentId } = req.body;

  if (newAmount <= 0) {
    return res.status(400).send({ error: "Invalid amount" });
  }

  try {
    // Retrieve the PaymentIntent
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    // Check if the PaymentIntent exists
    if (!paymentIntent) {
      return res.status(404).send({ error: "Payment intent not found" });
    }

    // Ensure the PaymentIntent is unconfirmed (you cannot update a confirmed PaymentIntent)
    if (paymentIntent.status === 'requires_payment_method' || paymentIntent.status === 'requires_confirmation') {
      // Update the amount of the PaymentIntent
      const updatedPaymentIntent = await stripe.paymentIntents.update(paymentIntentId, {
        amount: newAmount,
      });

      // Send the updated PaymentIntent to the frontend
      res.status(200).json(updatedPaymentIntent);
    } else {
      // If the PaymentIntent cannot be updated
      res.status(400).send({ error: 'Cannot update a confirmed PaymentIntent' });
    }
  } catch (error) {
    console.error('Error updating PaymentIntent:', error.message);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
