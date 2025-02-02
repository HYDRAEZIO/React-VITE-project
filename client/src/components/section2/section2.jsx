import React from "react";
import img1 from "/images/s2one.png";
import img2 from "/images/s2two.png";
import img3 from "/images/s2three.png";
import img4 from "/images/s2four.png";

const Section2 = () => {
  return (
    <section className="py-10 px-5">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-500">
          The Sexual Health Divide
        </h1>
      </div>

      {/* Subheading Section */}
      <div className="text-center mb-6">
        <h2 className="text-5xl font-extrabold text-black">
          Are You Suffering From The Following Symptoms
        </h2>
      </div>

      {/* Description Section */}
      <div className="flex justify-center mb-12">
        <p className="text-3xl text-center text-gray-600 w-full lg:w-2/3">
          Leading surveys on sexual health and satisfaction levels among
          American men have revealed the following:
        </p>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-9/12 mx-auto lg:flex lg:flex-row space-y-10">
        {/* Row 1: Image Left, Text Right */}
        <div className="flex lg:flex-col flex-row items-center justify-evenly">
          <img
            src={img1}
            alt="Image 1"
            className="w-40 h-40 sm:w-48 sm:h-48  lg:h-40 lg:w-40 object-contain mb-4 sm:mb-0"
          />
          <p className="lg:text-center text-left text-xl text-black font-medium sm:w-1/2 lg:w-4/5">
            Say sexual health impacts on overall life satisfaction
          </p>
        </div>

        {/* Row 2: Text Left, Image Right */}
        <div className="flex lg:flex-col flex-row-reverse items-center justify-evenly">
          <img
            src={img2}
            alt="Image 2"
            className="w-40 h-40 sm:w-48 sm:h-48  lg:h-40 lg:w-40 object-contain mb-4 sm:mb-0"
          />
          <p className="lg:text-center text-left text-xl text-black font-medium sm:w-1/2 lg:w-4/5">
            Of men suffer from Small Penis Syndrome
          </p>
        </div>

        {/* Row 3: Image Left, Text Right */}
        <div className="flex lg:flex-col flex-row items-center justify-evenly">
          <img
            src={img3}
            alt="Image 3"
            className="w-40 h-40 sm:w-48 sm:h-48  lg:h-40 lg:w-40 object-contain mb-4 sm:mb-0"
          />
          <p className="lg:text-center text-left text-xl text-black font-medium sm:w-1/2 lg:w-4/5">
            Believe embarrassment is a major sexual barrier
          </p>
        </div>

        {/* Row 4: Text Left, Image Right */}
        <div className="flex lg:flex-col lg:-mt-8 flex-row-reverse items-center justify-evenly">
          <img
            src={img4}
            alt="Image 4"
            className="w-40 h-40 sm:w-48 sm:h-48 lg:h-40 lg:w-40 object-contain mb-2 sm:mb-0 "
          />
          <p className="lg:text-center text-left text-xl text-black font-medium sm:w-1/2 lg:w-4/5 ">
            Avoid sex altogether because of lack of sexual confidence
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
