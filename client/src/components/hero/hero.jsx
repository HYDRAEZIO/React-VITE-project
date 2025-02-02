import React, { useEffect, useState } from "react";
import heroImg from "/images/section1.jpg";
import overlayImg from "/images/product-name.png"; // First overlay image path
import rightImg from "/images/top-tagline.png"; // Second overlay image path
import nowAvailable from "/images/s1no-pres.png"; // Second overlay image path
import bulletImg from "/images/bulletpoint.png"; // Bullet point image
import erevil from "/images/ereVil.png"; // Bullet point image
import arrow from "/images/arrow.png"; // Bullet point image
import as_seen from "/images/as-seen.png"; // Bullet point image
import OrderForm from "../form/form";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-screen overflow-hidden relative xl:min-h-[150vh] ">
      {/* Hero warning message */}
      <div className="bg-red-600 text-white text-md w-screen text-center py-2 px-4">
        <h3 className="text-sm md:text-md lg:text-md">
          <span className="font-bold text-md md:text-lg lg:text-xl">
            WARNING:{" "}
          </span>
          Due to extremely high media demand, there is a limited supply of
          <span className="font-semibold"> erevil Maxi™ </span>
          in stock as of
          <span className="text-yellow-300"> November 24, 2024</span>.
        </h3>
      </div>

      <div className="w-full max-w-screen overflow-y-visible relative">
        <img
          src={heroImg}
          alt="Full-width"
          className=" w-screen hidden xl:block md:ml-40 lg:ml-0 ml-24  scale-x-200 md:w-full md:h-[1200px] lg:h-[750px] h-screen object-fill md:scale-x-200 lg:scale-x-140"
        />
        <img
          src="/images/section0.jpg"
          alt="Full-width"
          className=" w-screen block xl:hidden ml-0 lg:ml-0 scale-x-[100%] md:w-full md:h-[1200px] lg:h-[750px] h-screen object-fill md:scale-x-[100%] "
        />

        {/* Left Overlay Image */}
        <img
          src={overlayImg}
          alt="Overlay Image"
          className="absolute left-1/2 top-[5%] md:top-[8%] md:left-[50%] lg:left-[25%] transform -translate-y-1/2 w-36 h-32 md:w-52 md:h-32 lg:h-32 lg:w-52"
        />

        {/* Right Overlay Image */}
        <img
          src={rightImg}
          alt="Right Image"
          className="hidden xl:block absolute left-1/3 top-[8.5%] md:left-[45%] lg:left-[40%] transform -translate-y-1/2 w-[400px] h-[50px] md:w-[650px] md:h-[60px]"
        />

        {/* Text Below Overlay Images */}
        <div className="absolute top-[10%] md:top-[16%] lg:top-[14%] left-2/3 xl:left-[45%] transform -translate-x-1/2 w-full text-center px-4">
          <h2 className="text-2xl md:text-2xl md:text-wrap lg:text-3xl font-medium text-blue-700">
            Medical Strength Male Enhancement
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-600">
            Get Maximum
          </h3>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-700">
            Sexual Benefits
          </h3>
        </div>

        {/* Image Below the Text */}
        <img
          src={nowAvailable}
          alt="Below Text Image"
          className="absolute hidden md:block top-[28%] left-[33%] w-auto h-[60px] md:top-[35%] lg:top-[42%] md:left-[32%] lg:left-[28%] md:h-[100px] lg:w-2/5 lg:h-20"
        />

        <div className=" absolute top-[10%] h-5/6 right-[2%] w-auto xl:block hidden">
          <OrderForm />
        </div>
        {/* Bullet Points Section */}
        <div className="absolute top-[35%] md:top-[45%] lg:top-[53%] left-[72%] md:left-[65%] lg:left-[49%] transform -translate-x-1/2 w-1/2 xl:w-[40%] text-left space-y-4 md:space-y-6">
          {/* Group 1 */}
          <div className="flex space-x-2 md:space-x-4 items-start">
            <img
              src={bulletImg}
              alt="Bullet Icon"
              className="w-6 h-6 mt-1 md:w-8 md:h-8"
            />
            <div>
              <p className="text-lg md:text-3xl font-bold text-purple-900">
                Bigger & Long-Lasting Erections*
              </p>
              <p className="text-sm md:text-xl font-medium text-gray-800">
                Maximum pleasure & intensified orgasms
              </p>
            </div>
          </div>

          {/* Group 2 */}
          <div className="flex space-x-2 md:space-x-4 items-start">
            <img
              src={bulletImg}
              alt="Bullet Icon"
              className="w-6 h-6 mt-1 md:w-8 md:h-8"
            />
            <div>
              <p className="text-lg md:text-3xl font-bold text-purple-900">
                Surge In Sex Drive & Energy*
              </p>
              <p className="text-sm md:text-xl font-medium text-gray-800">
                Ramps up stamina & staying power
              </p>
            </div>
          </div>

          {/* Group 3 */}
          <div className="flex space-x-2 md:space-x-4 items-start">
            <img
              src={bulletImg}
              alt="Bullet Icon"
              className="w-6 h-6 mt-1 md:w-8 md:h-8"
            />
            <div>
              <p className="text-lg md:text-3xl font-bold text-purple-900">
                Increased Sexual Confidence*
              </p>
              <p className="text-sm md:text-xl font-medium text-gray-800">
                Experience vitality & peak performance
              </p>
            </div>
          </div>
        </div>

        {/* Additional Images */}
        <img
          src={arrow}
          alt="Arrow"
          className="absolute top-[92%] hidden xl:block md:top-[78%] lg:top-[92%] left-[42%] md:left-[28%] lg:left-[30%] w-[200px] md:w-auto h-auto lg:w-1/3"
        />
        <img
          src={as_seen}
          alt="As Seen On"
          className=" block mx-auto lg:absolute top-[98%] md:top-[80%] lg:top-[105%] left-[20%] md:left-[29%] w-4/5 md:w-auto h-auto"
        />
      </div>

      <img
        src={erevil}
        alt="Below Text Image"
        className="absolute top-[52%] md:top-[50%] -left-23 md:-left-30 lg:-left-10 w-auto h-1/3 md:h-1/3 lg:h-1/2"
      />
      <img
        src={erevil}
        alt="Below Text Image"
        className="absolute xl:block top-[55%] md:top-[55%] -left-15 md:-left-20 lg:-left-0 w-auto h-1/3 md:h-1/3 lg:h-1/2"
      />
      {/* Fixed Footer for screens below xl */}
      <div className="fixed bottom-0 left-0 h-[10vh] md:h-[13vh] z-100 w-full bg-purple-900 text-white py-3 px-6 flex justify-between items-center xl:hidden">
        {/* Left Image */}
        <img
          src="/images/ereVil.png"
          alt="Footer Image"
          className="h-40 md:h-72 left-0 -bottom-4 absolute "
        />

        {/* Right Button */}
        <button onClick={()=>{navigate("/form")}} className="w-full flex justify-end">
          <img
            src="/images/submit-btn.png"
            alt="Rush My Bottle"
            className="w-[55%] cursor-pointer animate-scaleUpDown"
          />
        </button>
      </div>
    </div>
    // </div>
  );
};

export default Hero;
