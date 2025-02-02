import React, { useEffect, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { FaCheckCircle, FaTimesCircle, FaHourglassHalf, FaExclamationTriangle } from 'react-icons/fa';

const STATUS_CONTENT_MAP = {
  succeeded: {
    text: "Payment succeeded",
    icon: <FaCheckCircle size={40} color="white" />,
    iconColor: "bg-green-500",
  },
  processing: {
    text: "Your payment is processing.",
    icon: <FaHourglassHalf size={40} color="white" />,
    iconColor: "bg-gray-500",
  },
  requires_payment_method: {
    text: "Payment failed. Try again.",
    icon: <FaTimesCircle size={40} color="white" />,
    iconColor: "bg-red-500",
  },
  default: {
    text: "Something went wrong. Try again.",
    icon: <FaExclamationTriangle size={40} color="white" />,
    iconColor: "bg-red-500",
  },
};

export default function CompletePage() {
  const stripe = useStripe();
  const [status, setStatus] = useState("default");
  const [intentId, setIntentId] = useState(null);

  useEffect(() => {
    if (!stripe) return;

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (!paymentIntent) return;

      setStatus(paymentIntent.status);
      setIntentId(paymentIntent.id);
    });
  }, [stripe]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 via-gray-100 to-gray-100 p-6">
      <div className="bg-white shadow-2xl rounded-xl p-8 max-w-lg text-center transform transition-all hover:scale-105 duration-300">
        <div
          className={`w-20 h-20 flex items-center justify-center rounded-full ${STATUS_CONTENT_MAP[status].iconColor} text-white mx-auto mb-6`}
        >
          {STATUS_CONTENT_MAP[status].icon}
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-4 mb-4">
          {STATUS_CONTENT_MAP[status].text}
        </h2>

        {intentId && (
          <div className="mt-4 p-6 bg-gradient-to-r from-gray-100 to-gray-300 rounded-lg shadow-lg text-left">
            <table className="w-full text-sm text-gray-700">
              <tbody>
                <tr>
                  <td className="font-semibold py-2">Transaction ID:</td>
                  <td className="text-gray-600">{intentId}</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2">Status:</td>
                  <td className="text-gray-600 capitalize">{status}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {intentId && (
          <a
            href={`/`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Go To Home
          </a>
        )}
      </div>
    </div>
  );
}
