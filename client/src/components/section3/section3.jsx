import React, { useEffect, useState } from "react";
import erevil from "/images/ereVil.png"; // Bullet point image
import us from "/images/us-seal.png"; // Bullet point image
import section3Img from "/images/section3.jpg";
import mobileImage from "/images/s3-modal.png"; // New image for mobile view
// import btnString from "/images/btn-strip.png"; // New image for mobile view

const Section3 = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-[75vh]  max-h-[100vh] xl:w-[100%] xl:min-h-[155vh] xl:max-h-auto">
      <div
        className="relative w-auto xl:min-w-[90vw] max-[380px]:min-h-[90vh] max-[401px]:min-h-[90vh] overflow-hidden h-[70vh] xl:h-[145vh]"
        style={{
          backgroundImage: !isMobile ? "url('/images/section3.jpg')" : "none",
          backgroundSize: window.innerWidth >= 1200 ? "170% 115%" : "180% 115%",
          backgroundPosition: "top center",
        }}
      >
        {/* <img
        src={section3Img}
        alt="Background"
        className="w-screen hidden xl:block xl:min-h-[100vh] absolute scale-x-130 scale-y-125 top-28 left-0 lg:h-[88%] xl:h-[60%] object-cover"
      /> */}

        <div className="">
          <div className="p-4 xl:flex xl:flex-col xl:justify-center xl:mt-2 xl:ml-[8%] text-black text-center  xl:text-start w-full lg:w-1/2 lg:max-w-[55%]">
            <div className="xl:flex xl:flex-col xl:gap-y-13">
              <div>
                <h1 className="text-3xl xl:text-5xl lg:text-5xl text-orange-600 font-bold">
                  EREVIL MAXI
                </h1>
                <p className="text-xl xl:text-3xl lg:text-4xl text-purple-900 font-bold">
                  Male Enhancement System
                </p>
              </div>
              <div className="h-full w-full">
                <div>
                  <p className="text-sm xl:text-xl lg:text-lg text-black mt-4 font-bold">
                    Made with a blend of clinical strength ingredients,{" "}
                    <span className="text-orange-600">
                      erevil Maxi™ is a male enhancement system
                    </span>{" "}
                    that has been formulated to restore your sexual youth and
                    performance and help you experience an intense, blissful &
                    powerful sex life.
                  </p>
                </div>
                <div className="h-full w-full">
                  <p className="text-sm xl:text-xl lg:text-lg text-black mt-4 font-bold">
                  erevil Maxi dual action formula not only
                    gives you an instant surge in sexual power & performance -
                    but also treats the root cause of sexual dysfunctions,
                    ensuring that you are able to satisfy your partner,
                    consistently! Made with herbal extracts and active
                    botanicals, erevil Maxi is completely safe to
                    use and is free from any harmful side effects.
                  </p>
                </div>
              </div>

              <div className="h-full w-full text-white xl:mt-0 mt-6 text-sm xl:text-lg lg:mt-0">
                <h3 className="font-bold">Triple IntenSity</h3>
                <h3 className="text-lg xl:text-xl font-extrabold">
                  Male Enhancement
                </h3>
                <h3 className="font-bold">For maximum Results</h3>

                <div className="w-full xl:w-3/5 lg:w-[68%] font-medium">
                  <p>
                    The pro-sexual nutrient matrix in erevil Maxi
                    helps boost the 3S's of Sex - Size, Stamina & Satisfaction,
                    helping you peak perform and pleasure your partner just like
                    you did in your 20's!
                  </p>
                </div>
              </div>
              <div className="-mt-36 xl:ml-0 flex -ml-5 xl:mt-[2%] flex-wrap xl:flex-nowrap w-4/5 xl:w-3/4">
                <img
                  src={us}
                  alt="Below Text Image"
                  className="w-14 h-14 xl:w-auto xl:h-auto xl:ml-0 mx-auto -mt-2 xl:mt-0"
                />
                <div className="ml-4">
                  <p className="text-gray-700 font-medium text-sm xl:mt-[8%] xl:text-md xl:text-md">
                    <span className="font-bold">erevil Maxi </span>{" "}
                    is proudly made in the USA at a certified manufacturing
                    facility to meet statutory industry standards. Every
                    purchase is backed by a Satisfaction Guarantee, so that you
                    can enjoy the benefits with confidence.
                  </p>
                </div>
              </div>
            </div>

            <div> </div>
          </div>
          {/* Desktop Decorative Images */}
          <img
            src={erevil}
            alt="Below Text Image"
            className="hidden xl:block absolute xl:right-[5%] w-auto xl:w-[35%] z-10 xl:bottom-[1%] h-1/3  xl:h-[40%]"
          />

          <img
            src={erevil}
            alt="Below Text Image"
            className="hidden xl:block absolute xl:right-[9%] w-auto xl:w-[35%]  h-1/3 xl:h-[40%] xl:bottom-[6%]  "
          />

          {/* Mobile Image */}
          <img
            src={mobileImage}
            alt="Mobile Image"
            className="block xl:hidden absolute bottom-0 right-0 w-1/3 h-auto z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
