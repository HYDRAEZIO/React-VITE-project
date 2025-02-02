import React, { useEffect, useState } from "react";

const Section6 = () => {
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
    <>
      {isMobile ? (
        <div>
          <div className="p-6 space-y-8">
            {/* Item 1 */}
            <div className="flex flex-col items-center">
              <img
                src="/images/s6-img1.png"
                alt="Boron"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-blue-800">Boron</h3>
              <p className="text-gray-700 text-center">
                Stimulates nitric oxide production to boost blood circulation to
                the penis, helping achieve bigger and stronger erections.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center">
              <img
                src="/images/s6-img2.png"
                alt="Saw Palmetto"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-orange-600">
                ORCHIC SUBSTANCE
              </h3>
              <p className="text-gray-700 text-center">
                Positively influences mood patterns to reduce stress and promote
                relaxation, enabling men to perform at their peak.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center">
              <img
                src="/images/s6-img3.png"
                alt="Orchic Substance"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-red-600">
                HORNEY GOAT WEED EXTRACT
              </h3>
              <p className="text-gray-700 text-center">
                Helps increase staying power ensuring you and your partner enjoy
                longer sessions with intense orgasms.
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center">
              <img
                src="/images/s6-img4.png"
                alt="Horny Goat Weed"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-blue-800">
                TONGKAT AIL EXTRACT
              </h3>
              <p className="text-gray-700 text-center">
                Works synergistically with the other pro-sexual nutrients to
                boost blood flow to the penile chambers for improved erections.
                It also helps expand the chambers to increase blood holding
                capacity and in-turn staying power.
              </p>
            </div>

            {/* Item 5 */}
            <div className="flex flex-col items-center">
              <img
                src="/images/s6-img5.png"
                alt="Nettle Extract"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-green-800">BIOPERINE </h3>
              <p className="text-gray-700 text-center">
                Helps support the formula's quick absorption technology. This
                allows the key herbal ingredients that support male enhancement
                to be absorbed quickly into the blood stream, triggering an
                instant boost in sexual energy, stamina and erections.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[160vh]">
          <div
            className="p-8 text-center relative w-full md:h-[150vh] bg-cover mt-10 "
            style={{
              backgroundImage:
                window.innerWidth >= 1200
                  ? "url('/images/section6.jpg')"
                  : "none",
              backgroundSize: "150% 120%",
              backgroundPosition: "top center",
            }}
          >
            <div className="xl:mt-[6%]">
              <div className="flex md:flex-row flex-col">
                <div className="md:ml-[17%] md:mt-[14%]">
                  <div>
                    <h3 className="text-blue-800 md:text-white text-3xl font-bold mb-2">
                      BORON
                    </h3>
                  </div>
                  <div className="md:hidden block">
                    <p className="text-md ">
                      Stimulates nitric oxide production to boost blood
                      circulation to the penis helping achieve biggers and
                      stronger erections.
                    </p>
                  </div>
                </div>

                <div className="text-gray-700 p-3 ml-[20%] mt-[6.9%] text-start w-[35%]">
                  <h3 className=" text-orange-600 text-3xl font-bold mb-2">
                    Saw Palmetto Extract
                  </h3>
                  <p className="text-md ">
                    Called the "Viagra of Asia", this herbal extract replenishes
                    sexual energy stores for improved strength and stamina.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="text-center text-gray-700 p-3 ml-[10%] mt-[3%] w-[21%]">
                  <p>
                    Stimulates nitric oxide production to boost blood
                    circulation to the penis helping achieve biggers and
                    stronger erections.
                  </p>
                </div>
                <div className="text-gray-700 p-3 ml-2 mt-[3%] text-start w-[20%]">
                  <h3 className=" text-red-600 text-2xl font-bold mb-2">
                    Orchic Substance{" "}
                  </h3>
                  <p className="text-md ">
                    Positively influences mood patterns to reduce stress and
                    promote relaxation, enabling men to perform at their peak.
                  </p>
                </div>
                <div className="text-gray-700 p-3 ml-[9%] mt-[2%] text-start w-[18%]">
                  <h3 className=" text-blue-800 text-2xl font-bold mb-2">
                    Horney Goat Weed extract{" "}
                  </h3>
                  <p className="text-md ">
                    Helps increase staying power ensuring you and your partner
                    enjoy longer sessions with orgasms.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-[20%] ml-[11%] mt-[11%] ">
                  <p className=" text-gray-700 text-md">
                    An aphrodisiac, it helps boost male sexual drive and libido.
                    It also supports healthy testosterone levels.
                  </p>
                </div>
                <h3 className="absolute text-3xl text-white left-[15%] font-bold">
                  Nettle Extract
                </h3>
                <div className="text-gray-700 p-3 ml-[15%] mt-[4%] text-start w-[35%]">
                  <h3 className=" text-red-900 text-2xl font-bold mb-2">
                    Tongkat Ail Extract{" "}
                  </h3>
                  <p className="text-md ">
                    Works synergistically with the other pro-sexual nutrients to
                    boost blood flow to the penile chambers for improved
                    erections. It also helps expand the chambers to increase
                    blood holding capacity and in-turn staying power.
                  </p>
                </div>
              </div>

              <div className="text-gray-700 p-3 ml-[14%] mt-[4%] text-start w-[55%]">
                <h3 className=" text-orange-600 text-2xl font-bold mb-2">
                  Bioperine™
                </h3>
                <p className="text-md ">
                  Helps support the formula's quick absorption technology. This
                  allows the key herbal ingredients that support male
                  enhancement to be absorbed quickly into the blood stream,
                  triggering an instant boost in sexual energy, stamina and
                  erections.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Section6;
