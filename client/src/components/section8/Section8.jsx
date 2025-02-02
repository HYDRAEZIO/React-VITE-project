import React from "react";

const Section8 = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {/* /    */}
      <div
        className="relative   bg-[url('/images/section8.jpg')] min-h-[100vh] xl:h-[150vh] 
 bg-[right_12%_top] lg:bg-center 
    bg-cover
   bg-no-repeat max-w-[540px] sm:max-w-full lg:max-w-full overflow-hidden "
      >
        <div className="absolute right-0   md:pl-10  lg:left-[10%] xl:left-[10%] top-12 w-[50%] lg:w-full xl:h-[20%] ">
          <img src="images/product-name.png" className="sm:h-[150px]" alt="" />
          <p className="text-[28px] xl:text-5xl font-extrabold text-[#f47a30]  leading-[0.75]">
            Get Maximum
          </p>
          <p className="text-[32px] xl:text-5xl font-extrabold capitalize text-[#5a266e]  leading-[1.0]">
            SEXUAL BENEFITS{" "}
          </p>
        </div>
        <div className="absolute   border-0 flex flex-col items-start bottom-[10%] -right-[10%] lg:top-[35%] lg:left-[15%] md:space w-[100%]  md:w-auto p-4 sm:p-8">
          <img
            src="images/s1no-pres.png"
            height="88"
            alt=""
            className="sm:w-[40%] lg:block hidden w-[80%]"
          />
          <img src="/images/ereVil.png" alt="" className="sm:hidden absolute w-[60%] right-0 bottom-[100%]"  />
          <ul className="mb-0   space-y-2 sm:space-y-0 ">
            <li className="list-item bg-[url('/images/bulletpoint.png')] bg-no-repeat bg-left pl-8 sm:pl-12 py-2">
              <div className="px-3">
                <span className="font-semibold  font-sans text-[#482556] sm:text-[24px]">
                  Bigger &amp; Long-Lasting Erections *
                </span>
                <br />
                <span className="text-xs hidden md:block sm:text-sm text-gray-700">
                  Maximum pleasure &amp; intensified orgasms
                </span>
              </div>
            </li>

            <li className=" md:hidden list-item bg-[url('/images/bulletpoint.png')] bg-no-repeat bg-left pl-8 sm:pl-12 py-2">
              <div className="px-3">
                <span className="font-semibold  font-sans text-[#482556] sm:text-[24px]">
                  Increase In Penis Size *
                </span>
                <br />
              </div>
            </li>

            <li className="list-item bg-[url('/images/bulletpoint.png')] bg-no-repeat bg-left pl-8 sm:pl-12 py-2">
              <div className="px-3">
                <span className="font-semibold ] font-sans text-[#482556] sm:text-[24px]">
                  Surge In Sex Drive &amp; Energy *
                </span>
                <br />
                <span className="hidden md:block text-xs sm:text-sm text-gray-700">
                  Ramps up stamina &amp; staying power
                </span>
              </div>
            </li>

            <li className="list-item bg-[url('/images/bulletpoint.png')] bg-no-repeat bg-left pl-8 sm:pl-12 py-2">
              <div className="px-3">
                <span className="font-semibold  font-sans text-[#482556] sm:text-[24px]">
                  Increased Sexual Confidence *
                </span>
                <br />
                <span className="text-xs hidden md:block sm:text-sm text-gray-700">
                  Experience vitality &amp; peak performance
                </span>
              </div>
            </li>
          </ul>
        </div>
        <button onClick={scrollToTop} className="w-[25%] hidden sm:block absolute bottom-[22%] left-[10%]" >
          <img
            src="/images/submit-btn.png"
            alt="Rush My Bottle"
            className="w-[100%] cursor-pointer mt-4 animate-scaleUpDown"
          />
        </button>

        <div className="absolute xl:hidden  sm:bottom-0 sm:left-[0%]  md:w-[25%] md:h-[25%] md:ml-12 ">
          <img src="images/usa.png" alt="usa.png" className=" w-2/4 " />
        </div>

        <img
          src="/images/us-seal.png"
          className="absolute hidden lg:block right-[15%] top-[55%]"
          alt=""
        />
      </div>
    </>
  );
};

export default Section8;
