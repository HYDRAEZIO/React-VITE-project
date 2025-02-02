import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-white p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center border-t-4 border-green-500">
        {/* Success Icon */}
        <FaCheckCircle className="w-24 h-24 text-green-500 mx-auto mb-4" />

        {/* Success Message */}
        <h2 className="text-3xl font-bold text-gray-800">Payment Successful!</h2>
        <p className="text-gray-600 mt-2">
          Thank you for your payment. Your transaction has been successfully completed.
        </p>

            {/* Transaction Details */}
            <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-inner text-gray-700">
            <p className="font-semibold">Transaction ID:</p>
            <p className="text-gray-600">#123456789</p>

            <p className="mt-2 font-semibold">Amount Paid:</p>
            <p className="text-gray-600">$199.99</p>

            <p className="mt-2 font-semibold">Payment Method:</p>
            <p className="text-gray-600">Credit Card (Visa **** 1234)</p>
            </div>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition-all"
          >
            Go to Dashboard
          </button>

        </div>

        {/* Support Information */}
        <p className="text-gray-500 text-sm mt-6">
          Need help? 
        </p>
        <p href="/support" className="text-green-600 font-semibold hover:underline">Contact Support</p>
      </div>
    </div>
  );
};

export default SuccessPage;
