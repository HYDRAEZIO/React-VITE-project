import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";


export default function CheckOut({ amount = 2000 }) { // Default amount is 2000 if not passed as prop
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://geterevilmaxi.com/success",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <div className="w-[100%] bg-white">
      <form
        onSubmit={handleSubmit}
        className="bg-transparent shadow-lg rounded-lg p-8 w-full mx-auto"
      >
        <div className="payment-element-container">
          <PaymentElement />
        </div>

        {message && (
          <div className="error text-red-600 text-sm text-center mb-4">
            {message}
          </div>
        )}

        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          type="submit"
          className="w-[70%] py-4 mt-10 bg-blue-400 font-thin text-2xl text-white rounded-lg disabled:bg-gray-400 transition duration-300 hover:bg-blue-500"
        >
          {isLoading ? "Processing..." : "Pay Now $" + (amount > 0 ? amount : 2000)}
        </button>
      </form>
    </div>
  );
};
