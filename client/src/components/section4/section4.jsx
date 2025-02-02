import React, { useEffect, useState } from "react";
import erevil from "/images/s4img.png"; // Bullet point image
import s4seal from "/images/s4seal.png"; // Bullet point image
import doc from "/images/doc.png"; // Bullet point image
import bloodImg from "/images/blood-img.png"; // Bullet point image

const Section4 = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    // Set initial value
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="xl:min-h-[144vh] ">
      {" "}
      {/* Background image for larger screens */}
      <div
        className="relative w-full h-[100%] xl:h-[139vh] bg-cover mt-10 overflow-x-hidden overflow-y-hidden"
        style={{
          backgroundImage: !isMobile ? "url('/images/section4.jpg')" : "none",
          backgroundSize: "150% 119%",
          backgroundPosition: "top center",
        }}
      >
        <img
          src={s4seal}
          alt="Below Text Image"
          className="hidden xl:block absolute xl:right-32 w-auto xl:w-[10%] h-1/3 xl:-top-[0%] xl:h-[15%]"
        />
        {/* Content */}
        <div className=" text-black text-center xl:flex xl:flex-col xl:gap-11.5 xl:text-start text-xs xl:text-xl font-bold bg-opacity-50 px-4 py-2 rounded-md">
          <div className=" flex flex-col">
            <div className="mx-auto xl:float-end xl:justify-end xl:align-end xl:w-[60%] xl:mr-[18%] xl:mt-[6%]">
              {" "}
              <h1 className="text-3xl xl:text-4xl text-orange-600 font-bold">
                THE SCIENCE BEHIND
              </h1>
              <p className="text-lg xl:text-3xl text-purple-900 font-bold">
                BETTER, LONGER & MORE INTENSE SEX!
              </p>
              <div className="xl:w-full xl:ml-12 mt-[1%]">
                <p>
                  The blood flow to the penis is responsible for erections while
                  the holding capacity of the penis chambers is what influences
                  sexual stamina and staying power.{" "}
                  <span className="text-orange-600 font-bold">
                    {" "}
                    erevil Maxi's™{" "}
                  </span>{" "}
                  helps boost both to help you and your partner enjoy intense
                  orgasms and complete satisfaction.
                </p>
              </div>
              <div className="xl:w-full w-[50%] ml-[40%] xl:ml-12 text-start text-gray-700 xl:mt-[1%] mt-[5%] font-normal">
                {/* Mobile Image */}
                <img
                  src={doc}
                  alt="Mobile Image"
                  className="block xl:hidden absolute top-[%] left-[5%] w-1/3 h-[38%] z-10"
                />
                <img
                  src={bloodImg}
                  alt="Mobile Image"
                  className="block xl:hidden absolute top-[55%] left-[40%] w-[50%] h-[15%] z-10"
                />
                <p>
                  <span className="text-gray-900 font-semibold">
                    {" "}
                    erevil Maxi's™{" "}
                  </span>{" "}
                  pro-sexual nutrient blend is quickly absorbed into the
                  bloodstream to stimulate nitric oxide production - this in
                  turn boosts the flow of blood to the penile chambers helping
                  you enjoy harder and stronger erections. On the other hand it
                  also expands the penis chambers allowing it to hold more blood
                  in order to drastically increase sexual stamina, strength and
                  staying power.
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-[55%] align-center justify-center text-sm rounded-xl text-white xl:mx-auto xl:text-lg xl:mt-0 mt-[32%] font-semibold">
            <p>
              erevil Maxi™ utilizes a breakthrough rapid absorption and extended
              release technology. Rapid absorption of the ingredients into the
              bloodstream aid in delivering instant surge of sexual power while
              the extended release technology delivers sustained results that
              help you enjoy on command erections and stamina to last all night
              long.
            </p>
          </div>
          <div className="xl:w-[48%] w-[50%] text-md xl:mx-auto xl:text-gray-600 xl:ml-[23%] xl:-mt-[2%] -mt-[25%] font-semibold">
            <img
              src={erevil}
              alt="Mobile Image"
              className="block xl:hidden absolute bottom-[1%] right-[5%] w-[45%] h-[28%] z-10"
            />
            <p>
              <span className="text-orange-600 font-bold">
                {" "}
                erevil Maxi's™{" "}
              </span>{" "}
              works by triggering the two mechanisms known to increase penis
              size, function and performance. These are:
            </p>
          </div>
        </div>
        <div className="">
          <div className=" xl:mx-auto xl:w-[50%] xl:mt-[1%]">
            <div className="text-center xl:text-start">
              <div className="xl:w-auto w-[50%] text-xl xl:text-3xl text-orange-600 xl:ml-3 xl:mt-[0] mt-[2%] font-bold">
                <p>An increase in free testosterone and</p>
              </div>
              <div className="xl:w-auto w-[50%] text-xl xl:text-3xl text-orange-600 xl:ml-3 mt-[1%] font-bold">
                <p>nitric oxide production to the penis.</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="hidden xl:block xl:w-auto w-[50%] text-xl xl:text-orange-600 xl:ml-0 mt-[2%] xl:mt-[2%]  font-bold">
                <p>erevil Maxi™ is the only product that does both.</p>
              </div>
              <div className="hidden xl:block xl:w-full text-xl xl:text-gray-600 xl:ml-0 mt-[%] font-medium">
                <p>
                  erevil Maxi contains the most potent nitric oxide stimulators
                  which maximize the delivery of the active ingredients to your
                  penile tissue giving you firmer, longer erection{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={erevil}
          alt="Below Text Image"
          className="hidden xl:block absolute xl:right-[3%] w-auto xl:w-1/5 h-1/3 xl:bottom-[9%] xl:h-[40%]"
        />
      </div>
    </div>
  );
};

export default Section4;
