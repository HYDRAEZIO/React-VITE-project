  import React, { useState, useEffect  } from "react";
  

  import { FaRegCircle } from "react-icons/fa";
  import { Elements } from "@stripe/react-stripe-js";
  import { loadStripe } from "@stripe/stripe-js";
  import CheckOut from "./CheckOut";
import ShimmerEffect from "../shimmer/shimmer";

  // Stripe public key
  const stripePromise = loadStripe(
      "pk_live_51NsmYFL6UDKZvIsfzyOXgW5N5ApnVGgXMhP5NVM7aPreE8hBz21cOfQdYhNl59MgcYwcgxum5SNVxKJ3yMfUZaSr00nHPLeECs"            
  );


  const CheckOutPage = () => {
    const [selectedAmount, setSelectedAmount] = useState();
    const [paymentIntentId, setPaymentIntentId] = useState("");
    const [selectedCard, setSelectedCard] = useState("2"); 
    const [clientSecret, setClientSecret] = useState("");
    // Packages data
    const packages = [
      {
        id: "1",
        name: "Basic Package",
        description: "For personal use",
        price: 1000,
        discount: "10% Discount!",
        image: "images/ereVil.png",
      },
      {
        id: "2",
        name: "Standard Package",
        description: "Perfect for small businesses",
        price: 2000,
        discount: "5% Discount!",
        image: "images/ereVil.png",
      },
      {
        id: "3",
        name: "Premium Package",
        description: "Best for enterprises",
        price: 3000,
        discount: "No Discount",
        image: "images/ereVil.png",
      },
    ];

    useEffect(() => {
          fetchClientSecret(packages.find((pkg) => pkg.id == 2).price);
    }, []);

    const fetchClientSecret = async (amount) => {
      try {
        const customerData = localStorage.getItem("customerData");
        const response = await fetch(`http://18.197.77.208:4242/create-payment-intent`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount, customerData }),
        });
    
        const data = await response.json();
        setClientSecret(data.clientSecret);
        setPaymentIntentId(data.paymentIntentId);
        console.log(data.clientSecret, "clientSecret");
    
        setSelectedAmount(amount);
    
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };
    

    const handleSelectCard = async (id) => {
      console.log("amount select is " + selectedAmount);
      const selectedPackage = packages.find((pkg) => pkg.id === id);
      const price = selectedPackage.price;
      await setSelectedAmount(price);
      setSelectedCard(id);

      if (paymentIntentId) {
        try {
          const response = await fetch(`http://18.197.77.208:4242/update-payment-amount`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ newAmount: price, paymentIntentId }),
          });

          const data = await response.json();
          console.log(data);
          // fetchClientSecret(price);
            console.log(paymentIntentId);

          
          console.log("amount select is " + selectedAmount);
          
        } catch (error) {
          console.error("Error updating payment amount:", error);
        }
      }
    };

    return (
    <>
     { clientSecret ? (
        <div
          className="text-3xl w-full bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: "url(./images/checkout-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto flex lg:w-[80%] flex-col gap-2">
            <header className="grid grid-cols-2 sm:grid-cols-6 gap-2 justify-items-start items-center">
              <div className="sm:col-span-2 col-span-1 flex justify-center">
                <img src="images/logo-white-2.png" alt="Logo" className="max-h-20" />
              </div>
              <div className="sm:col-span-3 col-span-1 mt-4 sm:flex flex-row">
                <div className="sm:col-span-1 justify-center">
                  <img src="images/ca.png" alt="CA" className="min-h-14" />
                </div>
                <p className="font-sans text-18px w-[70%] text-sm sm:col-span-2 items-start p-2 ml-[-10px]">
                  Internet Exclusive Offers Available to USA Residents Only
                </p>
              </div>
            </header>

            <div className="h-fit bg-transparent grid lg:grid-cols-3 gap-2">
              {/* Left Section */}
              <div className="lg:col-span-2 h-fit">
                <div className="bg-[#ffffff] border-[1px] border-gray-300 p-4 mb-2">
                  <p className="text-sm font-sans ">
                    <span className="text-[#661997]">APPROVED!</span>
                    <span className="font-semibold text-[#393f40]">
                      {" "}
                      Free Bottle Packages Confirmed
                    </span>
                  </p>
                  <p className="text-sm font-sans">
                    Limited supply available as of Friday, 1/24/2025. We currently
                    have product in stock and ready to ship within 24 hours.
                  </p>
                  <p className="text-sm font-sans">
                    Sell Out Risk: <span className="text-[#fc0303]">HIGH</span>
                  </p>
                </div>

                <div className="flex flex-col bg-[#ffffff] py-2 sm:p-8 gap-3 border-[1px] border-gray-300 w-full relative">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`rounded-bl-[10px] rounded-br-[10px] bg-[#fdfbe2] p-3 relative flex flex-col border-[1px] border-gray-300 shadow-lg cursor-pointer ${
                        selectedCard === pkg.id ? "border-4" : ""
                      }`}
                      onClick={() => handleSelectCard(pkg.id)}
                    >
                      <p className="bg-[#620611] rounded-tl-[10px] rounded-tr-[10px] font-bold text-[27px] tracking-wide uppercase text-[#fff9ef] leading-[32px] pl-[15px] float-left">
                        {pkg.name}*
                      </p>

                      <div className="flex flex-grow max-h-[200px] rounded-2xl bg-[#ffffff] ">
                        <div className=" my-auto ">
                          {selectedCard === pkg.id && (
                            <img
                              src="images/done-icon.png"
                              alt="Package selected"
                              className="absolute bottom-[40%] right-[84%] w-[12%] sm:bottom-[35%] sm:right-[87%] sm:w-[10%]"
                            />
                          )}
                          <FaRegCircle className=" text-cyan-700  h-[50%] w-[150%] " />
                        </div>
                        <div className="w-[70%] h-[200px] rounded-2xl">
                          <img className="h-[90%]" src={pkg.image} alt={pkg.name} />
                        </div>

                        {/* Right Section */}
                        <div className="w-[30%] flex flex-col items-center rounded-2xl justify-center text-black p-4 relative">
                          <p className="text-lg font-semibold">{pkg.description}</p>
                          <p className="text-xl font-bold mt-2">{pkg.price}</p>
                          <p className="text-sm mt-1 italic">{pkg.discount}</p>

                          <div className="mt-2 bg-[#f87a3b] w-[100px] sm:w-[150px] text-center  text-xs text-white  p-2 rounded">
                            {selectedCard === pkg.id ? (
                              <p>Selected!!</p>
                            ) : (
                              <p>Select Package</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <span className="text-xs mt-6">*at retail price</span>
                  <img src="images/or-secureicons.jpg" className="mb-6" alt="Secure icons" />

                  {/* Money back guarantee */}
                  <div className="bg-[#ffffff] sm:p-3 mb-10 border-[1px] border-gray-300 rounded-tl-[10px] rounded-tr-[10px]">
                    <p className="bg-[#620611] rounded-tl-[10px] rounded-tr-[10px] font-bold text-[27px] tracking-wide uppercase text-[#fff9ef] leading-[32px] pl-[15px] float">
                      30 day money back guarantee
                    </p>
                    <div className="grid grid-cols-3">
                      <img
                        className="maxh-10 col-span-1"
                        src="images/guarantee-ico.jpg"
                        alt="Money-back guarantee"
                      />
                      <div className="col-span-2">
                        <p className="text-center m-2 text-[15px] leading-[24px] font-normal text-[#393f40]">
                          We are so confident in our products and services, that we
                          back it with a 30-day money-back guarantee. If for any
                          reason you are not fully satisfied with our products,
                          simply return the purchased products in the original
                          container within 30 days of when you received your order.
                          We will refund you 100% of the purchase price - with
                          absolutely no hassle.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="w-[112%] bg-gradient-to-b from-[#fe8814] via-[#fc5603] to-[#fb5514] relative left-[-6%] h-[4rem] text-center align-middle ">
                    <p className="text-white text-[1.375rem] font-bold italic block">
                      HURRY! CONFIRM YOUR ORDER NOW
                    </p>
                    <div className="absolute right-[-37px] top-0 left-[100%] w-[20px] h-[4rem] bg-[url('../images/arrow-end2.png')] bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className=" w-[70%]  lg:col-span-1 lg:w-[100%] mx-auto max-h-[100vh]  border-gray-300">
                <div className="w-full text-center sticky">
                  <div className="bg-[#323232] text-[#ffffff] p-4 gap-2">
                    <p className="text-[40px]">Final Step:</p>
                    <p className="text-[20px] capitalize">Payment Information</p>
                  </div>
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckOut amount={selectedAmount} key={selectedAmount} />
                  </Elements>
                </div>
              </div>
            </div>
          </div>

          <footer className="bg-gradient-to-bl mt-20 py-10 px-4 sm:px-8">
            <div className="max-w-[1000px] mx-auto">
              {/* Section Title */}
              <p className="text-center font-normal text-base mt-4 mb-5 leading-[1.4] text-gray-700">
                Our Promises and Assurances to You
              </p>

              {/* List of Assurance Images */}
              <ul className="flex flex-wrap justify-center sm:justify-between mb-5 space-y-4 sm:space-y-0 px-2">
                {/* Each List Item */}
                <li className="w-full sm:w-1/5 text-center">
                  <div className="footer-part__img  mx-auto flex items-center justify-center h-[100px]">
                    <img alt="secured-by" src="images/secured-by.png" />
                  </div>
                  <p className="text-sm text-gray-700 mt-2">
                    Highest Security Levels for Online Transactions 256 bit
                    Encryption.
                  </p>
                </li>
                <li className="w-full sm:w-1/5 text-center">
                  <div className="footer-part__img flex items-center justify-center h-[100px]">
                    <img alt="symantec" src="images/symantec.png" />
                  </div>
                  <p className="text-sm text-gray-700 mt-2">
                    Your Privacy Protected Rest Assured.
                  </p>
                </li>
                <li className="w-full sm:w-1/5 text-center">
                  <div className="footer-part__img flex items-center justify-center h-[100px]">
                    <img
                      alt="satisfaction-seal"
                      style={{ maxWidth: "76px" }}
                      src="images/satisfaction-seal.png"
                    />
                  </div>
                  <p className="text-sm text-gray-700 mt-2">
                    100% Consumer Satisfaction Guaranteed.
                  </p>
                </li>
                <li className="w-full sm:w-1/5 text-center">
                  <div className="footer-part__img flex items-center justify-center h-[100px]">
                    <img
                      alt="customer-service-seal"
                      src="images/customer-service-seal.png"
                    />
                  </div>
                  <p className="text-sm text-gray-700 mt-2">
                    Award Winning Customer Service.
                  </p>
                </li>
              </ul>

              {/* Information Section */}
              <p className="text-sm text-gray-700 mb-4 text-center">
                VitalGrowXL is committed to maintaining the highest quality products
                and the utmost integrity in business practices. All products sold on
                this website are certified by Good Manufacturing Practices (GMP),
                which is the highest standard of testing in the supplement industry.
              </p>
              <p className="text-sm text-gray-700 mb-4 text-center">
                Notice: The products and information found on this site are not
                intended to replace professional medical advice or treatment. These
                statements have not been evaluated by the Food and Drug
                Administration. These products are not intended to diagnose, treat,
                cure or prevent any disease. Individual results may vary.
              </p>
              <p className="text-sm text-gray-700 mb-4 text-center">
                © {new Date().getFullYear()} VitalGrowXL. All Rights Reserved.
              </p>

              {/* Footer Links */}
              <ul className="flex justify-center space-x-4 text-sm text-gray-700">
                <li>
                  <a href="/privacy-policy" className="hover:text-blue-600">
                    Privacy Policy |
                  </a>
                </li>
                <li>
                  <a href="/terms-and-conditions" className="hover:text-blue-600">
                    Terms and Conditions |
                  </a>
                </li>
                <li>
                  <a href="/wireless-policy" className="hover:text-blue-600">
                    Wireless Policy
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      ) : (
        <ShimmerEffect/>
      )}
    </>
    );
  };

  export default CheckOutPage;
