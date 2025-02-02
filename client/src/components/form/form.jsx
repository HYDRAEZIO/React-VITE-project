import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "../../utils/constant";
const OrderForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState(""); // Custom alert message

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apt: "",
    city: "",
    amount: 100,
    country: "Iowa (IA)",
    zip: "",
  });

  const [formErrors, setFormErrors] = useState({});

  // Validation Function
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "firstName":
      case "lastName":
      case "city":
      case "address":
        if (!value.trim()) error = "This field is required";
        break;
      case "email":
        if (!value) error = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(value)) error = "Invalid email format";
        break;
      case "phone":
        if (!value) error = "Phone number is required";
        else if (!/^\d+$/.test(value))
          error = "Invalid Phone Number! Only numbers are allowed";
        break;
      case "zip":
        if (!value) error = "Zip code is required";
        else if (!/^\d+$/.test(value))
          error = "Invalid zip code! Only numbers are allowed";
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate field on change
    setFormErrors({ ...formErrors, [name]: validateField(name, value) });
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) errors[key] = error;
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    localStorage.setItem('customerData', JSON.stringify(formData));

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      apt: "",
      city: "",
      amount: 100,
      state: "Iowa (IA)",
      zip: "",
    });

    alert("Order submitted successfully!");

    // Navigate to checkout page
    navigate("/checkout");

    setLoading(false);
  };

  return (
    <div className="max-w-sm mx-auto bg-   shadow-2xl rounded-lg p-6 border border-gray-200 mt-10">
      {/* Back Button */}
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="fixed xl:hidden top-3 text-xl left-3 flex bg-white w-20 h-10 rounded-2xl items-center text-gray-700 hover:text-black"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </button>

      <div className="flex justify-center gap-3 mt-3">
        <img src="/images/frm-top.png" alt="McAfee Secure" className="" />
      </div>
      <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
        {[
          { name: "firstName", placeholder: "First Name*" },
          { name: "lastName", placeholder: "Last Name*" },
          { name: "email", placeholder: "Email*" },
          { name: "phone", placeholder: "Phone Number*" },
          { name: "address", placeholder: "Address*" },
          { name: "city", placeholder: "City*" },
          { name: "zip", placeholder: "Zip Code*" },
        ].map(({ name, placeholder }) => (
          <div key={name}>
            <input
              type={name === "email" ? "email" : "text"}
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                formErrors[name] ? "border-red-500" : ""
              }`}
            />
            {formErrors[name] && (
              <p className="text-red-500 text-xs">{formErrors[name]}</p>
            )}
          </div>
        ))}

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none"
        >
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>

        <button type="submit" className="w-full flex justify-center">
          <img
            src="/images/submit-btn.png"
            alt="Rush My Bottle"
            className="w-[80%] cursor-pointer mt-4 animate-scaleUpDown"
          />
        </button>
      </form>

      {loading && (
        <p className="text-center text-blue-500 mt-2">Submitting order...</p>
      )}
 {alertMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center animate-fadeIn">
            <p className="text-gray-700">{alertMessage}</p>
            <button onClick={() => setAlertMessage("")} className="float-end mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              OK
            </button>
          </div>
        </div>
      )}
      <style>
      {`
          @keyframes scaleUpDown {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          .animate-scaleUpDown {
            animation: scaleUpDown 1.5s infinite ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default OrderForm;
